import uwsgi
import time

def application(env, start_response):
    # complete the handshake
    uwsgi.websocket_handshake(env['HTTP_SEC_WEBSOCKET_KEY'], env.get('HTTP_ORIGIN', ''))
    uwsgi.websocket_send("hello")
    uwsgi.websocket_send("hello2")

    # while True:
        # msg = uwsgi.websocket_recv_nb()
        # uwsgi.websocket_send(msg)
