from rest_framework import serializers
from .models import users 
from .models import product
from .models import profile

class usersSerializer(serializers.ModelSerializer) :
    class Meta:
        model = users
        fields = ['id', 'nombre', 'correo', 'whatsapp', 'contraseña']

class productSerializer(serializers.ModelSerializer) :
    class Meta:
        model = product
        fields = ['id, nombre, precio, descripcion, cantidad, foto']

class profileSerializer(serializers.ModelSerializer) :
    class Meta:
        model = profile 
        fields = ['user, logo, categoria']



