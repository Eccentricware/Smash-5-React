from rest_framework import renderers, viewsets
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import generics
from fighter.models import Fighter
from fighter.FighterSerializer import FighterSerializer

class FighterHighlight(generics.GenericAPIView):
    queryset = Fighter.objects.all()
    renderer_classes = (renderers.StaticHTMLRenderer,)

    def get(self, request, *args, **kwargs):
        fighter = self.get_object()
        return Response(fighter.name)

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'fighter': reverse('fighter-list', request=request, format=format)
    })

class FighterViewSet(viewsets.ModelViewSet):
    '''
    Current Favor and Counter Ratings
    '''
    queryset = Fighter.objects.all()
    serializer_class = FighterSerializer

    @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    def perform_create(self, serializer):
        serializer.save()

class FighterEditorViewSet(viewsets.ModelViewSet):
    '''
    Current Favor and Counter Ratings
    '''
    queryset = Fighter.objects.all()
    serializer_class = FighterSerializer
    lookup_field = 'name'

    @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    def perform_create(self, serializer):
        serializer.save()
