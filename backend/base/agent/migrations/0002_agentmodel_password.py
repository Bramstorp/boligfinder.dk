# Generated by Django 3.1 on 2020-08-25 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agent', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='agentmodel',
            name='password',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
