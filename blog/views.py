from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.timezone import now
import json
from .models import Post

@csrf_exempt
def get_posts(request):
    if request.method == 'GET':
        posts = Post.objects.all().order_by('-created_at').values('id', 'username', 'title', 'content', 'created_at', 'last_edited')
        return JsonResponse(list(posts), safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        new_post = Post.objects.create(
            username=data['username'],
            title=data['title'],  # Accept the title from the request
            content=data['content'],
            created_at=now()
        )
        return JsonResponse({
            'id': new_post.id,
            'username': new_post.username,
            'title': new_post.title,
            'content': new_post.content,
            'created_at': new_post.created_at,
            'last_edited': new_post.last_edited,
        })
    
@csrf_exempt
def post_detail(request, post_id):
    try:
        post = Post.objects.get(id=post_id)
    except Post.DoesNotExist:
        return JsonResponse({'error': 'Post not found'}, status=404)

    if request.method == 'DELETE':
        post.delete()
        return JsonResponse({'message': 'Post deleted successfully'})

    elif request.method == 'PUT':
        data = json.loads(request.body)
        post.title = data.get('title', post.title)  # Update the title if provided
        post.content = data.get('content', post.content)  # Update content if provided
        post.created_at = now()  # Update created_at to the current time
        post.last_edited = now()  # Update last_edited to the current time
        post.save()
        return JsonResponse({
            'id': post.id,
            'username': post.username,
            'title': post.title,
            'content': post.content,
            'created_at': post.created_at,
            'last_edited': post.last_edited,
        })

# Working code start#######
# @csrf_exempt
# def get_posts(request):
#     if request.method == 'GET':
#         posts = Post.objects.all().order_by('-created_at').values('id', 'username', 'created_at', 'content')
#         return JsonResponse(list(posts), safe=False)
#     elif request.method == 'POST':
#         data = json.loads(request.body)
#         new_post = Post.objects.create(
#             username=data['username'],
#             content=data['content'],
#             created_at=now()
#         )
#         return JsonResponse({
#             'id': new_post.id,
#             'username': new_post.username,
#             'content': new_post.content,
#             'created_at': new_post.created_at
#         })


# @csrf_exempt
# def post_detail(request, post_id):
#     try:
#         post = Post.objects.get(id=post_id)
#     except Post.DoesNotExist:
#         return JsonResponse({'error': 'Post not found'}, status=404)

#     if request.method == 'DELETE':
#         post.delete()
#         return JsonResponse({'message': 'Post deleted successfully'})

#     elif request.method == 'PUT':
#         data = json.loads(request.body)
#         post.content = data.get('content', post.content)  # Update content if provided
#         post.created_at = now()  # Update created_at to the current timestamp
#         post.last_edited = now()  # Update last_edited to the current timestamp
#         post.save()
#         return JsonResponse({
#             'id': post.id,
#             'username': post.username,
#             'content': post.content,
#             'created_at': post.created_at,
#             'last_edited': post.last_edited,
#         })

# Working code end#######

# New code start 

# @csrf_exempt
# def get_posts(request):
#     if request.method == 'GET':
#         posts = Post.objects.all().order_by('-created_at').values('id', 'username', 'content', 'created_at', 'last_edited')
#         return JsonResponse(list(posts), safe=False)
#     elif request.method == 'POST':
#         data = json.loads(request.body)
#         new_post = Post.objects.create(
#             username=data['username'],
#             content=data['content'],
#             created_at=now()
#         )
#         return JsonResponse({
#             'id': new_post.id,
#             'username': new_post.username,
#             'content': new_post.content,
#             'created_at': new_post.created_at,
#             'last_edited': new_post.last_edited,
#         })

# @csrf_exempt
# def post_detail(request, post_id):
#     try:
#         post = Post.objects.get(id=post_id)
#     except Post.DoesNotExist:
#         return JsonResponse({'error': 'Post not found'}, status=404)

#     if request.method == 'DELETE':
#         post.delete()
#         return JsonResponse({'message': 'Post deleted successfully'})

#     elif request.method == 'PUT':
#         data = json.loads(request.body)
#         post.content = data.get('content', post.content)
#         post.created_at = now()  # Update created_at to the current time
#         post.last_edited = now()  # Update last_edited to the current time
#         post.save()
#         return JsonResponse({
#             'id': post.id,
#             'username': post.username,
#             'content': post.content,
#             'created_at': post.created_at,
#             'last_edited': post.last_edited,
#         })

# New code end 


# @csrf_exempt  # Disable CSRF for simplicity; use proper token-based auth in production
# def get_posts(request):
#     if request.method == 'GET':
#         posts = Post.objects.all().order_by('-created_at').values('username', 'created_at', 'content')
#         return JsonResponse(list(posts), safe=False)
#     elif request.method == 'POST':
#         data = json.loads(request.body)
#         new_post = Post.objects.create(
#             username=data['username'],
#             content=data['content'],
#             created_at=now()
#         )
#         return JsonResponse({
#             'username': new_post.username,
#             'content': new_post.content,
#             'created_at': new_post.created_at
#         })