# Generated by Django 2.1.4 on 2019-02-01 08:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fighter', '0005_fighter_smash_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='fighter',
            name='piranha_plant',
            field=models.FloatField(default=5),
        ),
    ]
