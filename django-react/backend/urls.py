from django.urls import path, include
from rest_framework import routers
from .views import LanguageViewset, UserViewset

# https://simpleisbetterthancomplex.com/tutorial/2018/11/22/how-to-implement-token-authentication-using-django-rest-framework.html
from rest_framework.authtoken.views import obtain_auth_token

routers = routers.DefaultRouter()
# routers.register(r'languages', LanguageViewset)
routers.register(r'users', UserViewset)

urlpatterns = [
    path('', include(routers.urls)),
    path('languages', LanguageViewset.as_view({'get': 'list', 'post': 'create'})),
    path('languages/<int:pk>', LanguageViewset.as_view({'get': 'retrieve', 'patch': 'update'})),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth')
]