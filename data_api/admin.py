from django.contrib import admin
from .models import KeyValueData

@admin.register(KeyValueData)
class KeyValueDataAdmin(admin.ModelAdmin):
    list_display = ('key', 'value')  # Display these fields in the admin panel
