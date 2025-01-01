from django.core.management.base import BaseCommand
from data_api.models import KeyValueData

class Command(BaseCommand):
    help = 'Populate the database with key-value data'

    def handle(self, *args, **kwargs):
        # Define the data to be added
        data = [
            {"key": "Animal", "value": "Cat"},
            {"key": "Color", "value": "Blue"},
            {"key": "Country", "value": "Japan"},
            {"key": "Fruit", "value": "Apple"},
            {"key": "Language", "value": "Python"},
            {"key": "Planet", "value": "Earth"},
            {"key": "Sport", "value": "Soccer"},
            {"key": "Technology", "value": "AI"},
            {"key": "Vehicle", "value": "Car"},
            {"key": "Weather", "value": "Sunny"},
        ]

        # Add each entry to the database
        for entry in data:
            obj, created = KeyValueData.objects.get_or_create(**entry)
            if created:
                self.stdout.write(f"Added: {entry['key']} - {entry['value']}")
            else:
                self.stdout.write(f"Skipped (already exists): {entry['key']} - {entry['value']}")
        
        self.stdout.write(self.style.SUCCESS('Successfully populated the database!'))