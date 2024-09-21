from django.urls import path
from . import views

urlpatterns= [
    path("", views.home, name="home"),
    path('login/', views.login, name='login'),
    path("products", views.products, name="products"),
    path("BrokersCompare" , views.BrokersCompare , name = "BrokersCompare"),
    path("TechnicalAnalysis" , views.TechnicalAnalysis , name = "TechnicalAnalysis"),
    path("CreateAccount" , views.CreateAccount , name = "CreateAccount"),
    path("ForgotPassword" , views.ForgotPassword , name = "ForgotPassword")
]
