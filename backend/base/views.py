from django.shortcuts import render

from django.http import JsonResponse

from .products import products

from rest_framework.decorators import api_view

from rest_framework.response import Response

from .serializers import ProductSerializer

from .models import *

# Create your views here.

@api_view(['GET'])
def getRoutes(r):

    routes=[
    '/api/products/',
    '/api/products/create',
    '/api/products/upload',
    '/api/products/<id>/reviews',
    '/api/products/top',
    '/api/products/<id>',

    '/api/products/delete/<id>/',
    '/api/products/<update>/<id>/',
    ]

    return Response(routes)


@api_view(['GET'])
def getProducts(r):
    products=Product.objects.all()
    s=ProductSerializer(products,many=True)
    return Response(s.data)

@api_view(['GET'])
def getProduct(r,pk):

    product=Product.objects.get(_id=pk)
    s=ProductSerializer(product,many=False)


    return Response(s.data)
