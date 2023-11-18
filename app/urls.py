from django.urls import path
from rest_framework import routers


from . import views


# router = routers.DefaultRouter()
# router.register(r'cutarea', DualFcaPlanUseViewSet.as_view(), base_name='cutareadel')

urlpatterns = [
    path("", views.Site.as_view(), name="home"),
    path("signup/", views.Site.as_view(), name="signup"),

    path("api/signup", views.UserSignUp.as_view({'post': 'create_user'}), name='signup'),

]
