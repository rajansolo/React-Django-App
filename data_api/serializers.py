from rest_framework import serializers
from .models import KeyValueData

class KeyValueDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyValueData
        fields = ['id', 'key', 'value']
