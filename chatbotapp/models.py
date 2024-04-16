from django.db import models

# Creating models 
class users(models.Model) :
    nombre = models.CharField(max_length=30)
    correo = models.CharField(max_length=30)
    whatsapp = models.IntegerField()
    contraseña = models.CharField(max_length=8)

class product(models.Model) :
    user = models.ForeignKey(users, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=20)
    precio = models.DecimalField(max_digits=5, decimal_places=2)
    descripcion = models.CharField(max_length=100)
    cantidad = models.IntegerField()
    foto =  models.BinaryField()

class profile (models.Model) :
    user = models.OneToOneField(users, on_delete=models.CASCADE)
    logo = models.BinaryField()
    categoria = models.CharField(max_length=30)
    
