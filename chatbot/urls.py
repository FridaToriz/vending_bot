"""
URL configuration for chatbot project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import (
    UsersListCreate,
    UsersRetrieveUpdateDestroy,
    ProductListCreate,
    ProductRetrieveUpdateDestroy,
    ProfileListCreate,
    ProfileRetrieveUpdateDestroy,
)

urlpatterns = [
    path('admin/', admin.site.urls),
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
