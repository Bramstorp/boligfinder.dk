# Generated by Django 3.0.8 on 2020-08-25 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0011_auto_20200825_1106'),
    ]

    operations = [
        migrations.AlterField(
            model_name='housemodel',
            name='build_year',
            field=models.IntegerField(null=True),
        ),
    ]
