# Generated by Django 3.0.8 on 2020-08-06 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listingmodel',
            name='sale_type',
            field=models.CharField(choices=[('FOR_SALE', 'For Sale'), ('FOR_RENT', 'For Rent')], max_length=50, null=True),
        ),
    ]
