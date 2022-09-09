from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import LanguageSerializer, UserSerializer
from .models import Language
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class LanguageViewset(viewsets.ModelViewSet):
    def list(self, request):
        queryset = Language.objects.all()
        serializer_class = LanguageSerializer
        serializer = LanguageSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def create(self, request):
        serializer = LanguageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def retrieve(self, request, pk=None):
        if pk is not None:
            queryset = Language.objects.all()
            language = get_object_or_404(queryset, pk=pk)
            serializer = LanguageSerializer(language)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        if pk is not None:
            name = request.post
            Language.objects.filter(pk=pk).update(name = )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
