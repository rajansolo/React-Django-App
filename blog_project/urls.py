from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls')),  # Ensure this includes your blog app URLs
    path('', include('data_api.urls'))

]