import os.path

from django.conf import settings
from django import template

register = template.Library()

@register.filter("ts")
def ts(value):
    return value+"?"+str(os.stat(settings.BASE_DIR+value).st_mtime)
