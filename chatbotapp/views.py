from django.shortcuts import render
from rest_framework import generics 
from .models import users, product, profile
from .serializers import usersSerializer, productSerializer, profileSerializer

#  Show and create users
class UsersListCreate(generics.ListCreateAPIView) :
    queryset = users.objects.all()
    serializer_class = usersSerializer

# Show, update and delete users
class UsersRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView) :
    queryset = users.objects.all()
    serializer_class = usersSerializer

# Show and create products
class ProductListCreate(generics.ListCreateAPIView) :
    queryset = product.objects.all()
    serializer_class = productSerializer

# Show, update and delete products
class ProductRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView) :
    queryset = product.objects.all()
    serializer_class = productSerializer

# Show and create profiles
class ProfileListCreate(generics.ListCreateAPIView) :
    queryset = profile.objects.all()
    serializer_class = profileSerializer

# Show, update and delete profiles 
class ProfileRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView) :
    queryset = profile.objects.all()
    serializer_class = profileSerializer
    
