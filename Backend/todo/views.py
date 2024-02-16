from rest_framework.viewsets import ModelViewSet
from .models import Todo
from .serializer import TodoSerializer

class TodoViewset(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class =TodoSerializer