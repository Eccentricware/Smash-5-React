# Generated by Django 2.1.4 on 2019-08-03 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fighter', '0007_fighter_joker'),
    ]

    operations = [
        migrations.AddField(
            model_name='fighter',
            name='hero',
            field=models.FloatField(default=5),
        ),
    ]
