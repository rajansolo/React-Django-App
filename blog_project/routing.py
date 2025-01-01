# blog_project/routing.py
from django.urls import re_path
from blog.blogers import BlogConsumer

websocket_urlpatterns = [
    re_path(r'ws/blog/$', BlogConsumer.as_asgi()),
]
