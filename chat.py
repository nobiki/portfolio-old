import uwsgi
import redis
import time
import sys
import json

def application(env, start_response):
    # complete the handshake
    uwsgi.websocket_handshake(env['HTTP_SEC_WEBSOCKET_KEY'], env.get('HTTP_ORIGIN', ''))

    r = redis.StrictRedis(host='redis-gandamu', port=6379, db=0)
    channel = r.pubsub()
    channel.subscribe('foobar')
    websocket_fd = uwsgi.connection_fd()
    redis_fd = channel.connection._sock.fileno()

    while True:
        uwsgi.wait_fd_read(websocket_fd, 3)
        uwsgi.wait_fd_read(redis_fd)
        uwsgi.suspend()
        fd = uwsgi.ready_fd()
        if fd > -1:
            if fd == websocket_fd:
                msg = uwsgi.websocket_recv_nb()
                if msg:
                    r.publish('foobar', msg)
            elif fd == redis_fd:
                msg = channel.parse_response()
                # only interested in user messages
                t = 'message'
                if sys.version_info[0] > 2:
                    t = b'message'
                if msg[0] == t:
                    json = msg[2].decode('utf-8')
                    uwsgi.websocket_send("%s" % json)
                    # uwsgi.websocket_send("[%s] %s" % (time.time(), msg))
        else:
            # on timeout call websocket_recv_nb again to manage ping/pong
            msg = uwsgi.websocket_recv_nb()
            if msg:
                r.publish('foobar', msg)
