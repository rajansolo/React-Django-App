# from django.contrib import admin
# from django.urls import path, include

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/', include('blog.urls')),  # Ensure this includes your blog app URLs
#     path('', include('data_api.urls'))

# ]

from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls')),  # API routes
    path('', include('data_api.urls')),  # Data API routes
    # Serve the React frontend
    path('', TemplateView.as_view(template_name="index.html")),
]