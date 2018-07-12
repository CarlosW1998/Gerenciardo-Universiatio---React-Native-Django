from oauth2_provider.views.generic import ProtectedResourceView, ReadWriteScopedResourceView
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse

class ApiEndpoint(ProtectedResourceView):
    def get(self, request, *args, **kwargs):
        return HttpResponse('Hello, OAuth2!')


@login_required()
def secret_page(request, *args, **kwargs):
    return HttpResponse('Secret contents!', status=200)






    #screte
    #YNSDo0JOfRKHWcKYShDf3s1LhfITNdKtlyADB0DL3faHVnzI2WvXM1WIzFh5lw7qjfR9UdTo1KchaGTmqk0Tu0NQvlnxWn6D0cbtEGZdnApUqPy8iBjYrgec6MpC99aV


    #id
    #4VghNJwcKNcVG6VfdPRFx5fc7q95QejO4wTHORRi




'''
{
    "access_token": "<your_access_token>",
    "token_type": "Bearer",
    "expires_in": 36000,
    "refresh_token": "<your_refresh_token>",
    "scope": "read write groups"
}

{"access_token": "hirYcI0NJAr4KwbHCqa5NDDAyVBjLP", 
"token_type": "Bearer", 
"expires_in": 36000, 
"refresh_token": "G42f3RXWuo3sABg5gaBjNOq9epiJ4S",
 "scope": "read write groups"}


 Retrieve users
curl -H "Authorization: Bearer hirYcI0NJAr4KwbHCqa5NDDAyVBjLP" http://localhost:8000/users/
curl -H "Authorization: Bearer <your_access_token>" http://localhost:8000/users/1/

curl -H "Authorization: Bearer hirYcI0NJAr4KwbHCqa5NDDAyVBjLP" http://localhost:8000/teste/

# Retrieve groups
curl -H "Authorization: Bearer <your_access_token>" http://localhost:8000/groups/

# Insert a new user
curl -H "Authorization: Bearer <your_access_token>" -X POST -d"username=foo&password=bar" http://localhost:8000/users/


'''