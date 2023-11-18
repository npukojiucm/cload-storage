from datetime import datetime

from django.views.generic import TemplateView
from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response

from app.models import User
from app.serializers import UserSerializer


class Site(TemplateView):
    template_name = "index.html"


class UserSignUp(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['post'], url_path='signup')
    def create_user(self, request):

        # user = User()
        # user.first_name = request.data['first_name']
        # user.last_name = 'last_name'
        # user.login = request.data['login']
        # user.email = 'email'
        # user.password = 'password'
        # user.role = False
        # user.created_at = datetime.now()
        # user.save()

        return Response(status=status.HTTP_201_CREATED, data={'ok'})
