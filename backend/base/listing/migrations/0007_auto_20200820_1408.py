# Generated by Django 3.0.8 on 2020-08-20 12:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0006_auto_20200820_1252'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listingmodel',
            name='sale_type',
            field=models.CharField(choices=[('FOR_SALE', 'For Sale'), ('FOR_RENT', 'For Rent')], max_length=50, null=True),
        ),
    ]