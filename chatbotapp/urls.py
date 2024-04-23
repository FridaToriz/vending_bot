from django.contrib import admin
from django.urls import path, include
from .views import (
    UsersListCreate,
    UsersRetrieveUpdateDestroy,
    ProductListCreate,
    ProductRetrieveUpdateDestroy,
    ProfileListCreate,
    ProfileRetrieveUpdateDestroy,
)

urlpatterns = [
# Routes for users
    path('users/', UsersListCreate.as_view(), name='user-list'),
    path('users/<int:pk>/', UsersRetrieveUpdateDestroy.as_view(), name='user-detail'),

# Routes for products
    path('products/', ProductListCreate.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroy.as_view(), name='product-detail'),

# Routes for profiles
    path('profiles/', ProfileListCreate.as_view(), name='profile-list'),
    path('profiles/<int:pk>/', ProfileRetrieveUpdateDestroy.as_view(), name='profile-detail'),
]
