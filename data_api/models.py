from django.db import models

class KeyValueData(models.Model):
    key = models.CharField(max_length=100, unique=True)
    value = models.TextField()

    class Meta:
        ordering = ['key']  # Order data alphabetically by key

    def __str__(self):
        return self.key
