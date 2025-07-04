from django.urls import path, include
from django.views.generic.base import TemplateView
from . import views

urlpatterns = [
    path("signup/", views.signup, name="signup"),
    path("", TemplateView.as_view(template_name="home.html"), name="home"),
]