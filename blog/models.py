# from django.db import models

# class Post(models.Model):
#     username = models.CharField(max_length=100)
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
    
#     def __str__(self):
#         return f"{self.username} - {self.created_at}"


# from django.db import models
# from django.utils.timezone import now

# class Post(models.Model):
#     username = models.CharField(max_length=100)
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
#     last_edited = models.DateTimeField(null=True, blank=True)  # New field for last edited time

#     def __str__(self):
#         return f"{self.username} - {self.created_at} (Edited: {self.last_edited})"

##2
# from django.db import models
# from django.utils.timezone import now

# class Post(models.Model):
#     username = models.CharField(max_length=100)
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
#     last_edited = models.DateTimeField(null=True, blank=True)

#     def __str__(self):
#         return f"{self.username} - {self.created_at} (Edited: {self.last_edited})"


from django.db import models
from django.utils.timezone import now

class Post(models.Model):
    username = models.CharField(max_length=100)
    title = models.CharField(max_length=200, null=True, blank=True)  # New field for the blog title
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    last_edited = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.title} by {self.username} - {self.created_at} (Edited: {self.last_edited})"
