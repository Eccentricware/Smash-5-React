from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view
from fighter import views


schema_view = get_schema_view(title="Pastbin API")

router = DefaultRouter()
router.register(r'fighter', views.FighterViewSet)
router.register(r'fighter_edit', views.FighterEditorViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^schema/$', schema_view)
]
