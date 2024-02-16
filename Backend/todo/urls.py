from rest_framework.routers import DefaultRouter
from .views import TodoViewset
from django.urls import path,include
router = DefaultRouter()
router.register(r'todos',TodoViewset)


urlpatterns = [
    path('', include(router.urls)),
]