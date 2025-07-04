# Generated by Django 5.2.3 on 2025-06-23 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Trainer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('experience', models.PositiveIntegerField()),
                ('yoga_type', models.CharField(max_length=100)),
                ('bio', models.TextField()),
                ('profile_image', models.ImageField(upload_to='trainers/')),
            ],
        ),
    ]
