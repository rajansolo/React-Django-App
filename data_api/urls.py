from django.urls import path
from data_api.views import KeyValueDataView

urlpatterns = [
    path('apidata/', KeyValueDataView.as_view(), name='key_value_data'),
]