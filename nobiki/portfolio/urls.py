from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from . import views
from .views import *

urlpatterns = [
    url(r'^$', IndexView.as_view()),
    url(r'^memo/', MemoView.as_view()),
]

