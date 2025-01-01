import json
from channels.generic.websocket import AsyncWebsocketConsumer

class BlogConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("blog", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("blog", self.channel_name)

    async def send_new_post(self, event):
        await self.send(text_data=json.dumps(event))
