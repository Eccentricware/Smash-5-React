# Generated by Django 2.1.4 on 2019-04-20 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fighter', '0006_fighter_piranha_plant'),
    ]

    operations = [
        migrations.AddField(
            model_name='fighter',
            name='joker',
            field=models.FloatField(default=5),
        ),
    ]
