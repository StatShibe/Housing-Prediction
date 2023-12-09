from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('PredictionApp.urls')),
    path('user', include('machineLearningAPI.urls')),
    path('admin/', admin.site.urls)
]
