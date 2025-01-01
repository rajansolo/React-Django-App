from django.urls import path
from .views import get_posts, post_detail

urlpatterns = [
    path('posts/', get_posts, name='get_posts'),
    path('posts/<int:post_id>/', post_detail, name='post_detail'),
]
