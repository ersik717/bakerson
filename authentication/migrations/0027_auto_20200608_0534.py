# Generated by Django 2.2.12 on 2020-06-07 23:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0026_auto_20200608_0224'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='expire_date',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='product',
            name='manufacture_date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
