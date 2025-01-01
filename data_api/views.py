from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import KeyValueData
from .serializers import KeyValueDataSerializer

class KeyValueDataView(APIView):
    def get(self, request):
        # Fetch all key-value data
        data = KeyValueData.objects.all().order_by('key')
        serializer = KeyValueDataSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        # Add new key-value data
        serializer = KeyValueDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .models import KeyValueData
# from .serializers import KeyValueDataSerializer

# class KeyValueDataView(APIView):
#     def get(self, request):
#         data = KeyValueData.objects.all()  # Fetch all key-value pairs
#         serializer = KeyValueDataSerializer(data, many=True)
#         return Response(serializer.data)

# ###################0Volume1##########
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .models import KeyValueData
# from .serializers import KeyValueDataSerializer

# class KeyValueDataView(APIView):
#     def get(self, request):
#         data = KeyValueData.objects.all().order_by('key')
#         serializer = KeyValueDataSerializer(data, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = KeyValueDataSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
