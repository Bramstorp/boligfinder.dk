# Generated by Django 3.0.8 on 2020-08-24 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0009_auto_20200821_1354'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listingmodel',
            name='main_image',
            field=models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d/'),
        ),
    ]
