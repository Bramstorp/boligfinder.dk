from django.db import models

# Create your models here.
class ContactModel(models.Model): 
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    message = models.TextField()
    contact_date = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
    	return self.email