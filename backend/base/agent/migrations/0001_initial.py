# Generated by Django 3.0.7 on 2020-08-04 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AgentModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=50)),
                ('photo', models.ImageField(upload_to='')),
                ('description', models.TextField(blank=True)),
                ('phone', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=100)),
                ('top_seller', models.BooleanField(default=False)),
                ('date_hired', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
