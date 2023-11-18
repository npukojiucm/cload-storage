from rest_framework import serializers

from app.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'login', 'email', 'password', 'role', 'created_at']
