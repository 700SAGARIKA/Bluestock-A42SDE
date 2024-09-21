from django.shortcuts import render,HttpResponse , redirect
from django.contrib.auth.models import User , auth
from django.contrib import messages
# Create your views here.
def home(request):
    return render(request,"email.html")

def login(request):
    #print("Hieeeeee")
    if request.method == 'POST':
        #print(request.POST) 
        username = request.POST['username']
        password = request.POST['Password']  
        #print(f"Username: {username}, Password: {password}") 
        user_login = auth.authenticate(username=username, password=password)

        if user_login is not None:
            auth.login(request, user_login)
            return redirect('BrokersCompare')  # Make sure this URL is defined
        else:
            messages.info(request, 'Invalid Credentials')
            return redirect('login')
    else:
        return render(request, "email.html") 

def products(request):
    return render(request,"Stock_school.html")
    #return HttpResponse("the products page!!")
def BrokersCompare(request):
    return render(request,"component3.html")
def TechnicalAnalysis(request):
    return render(request,"component7.html")
def CreateAccount(request):
    if request.method == 'POST':
        email = request.POST['email']
        username = request.POST['username']
        password = request.POST['Password']

        if(User.objects.filter(email = email).exists()):
            messages.info(request , 'Email Already Taken')
            return redirect('CreateAccount')
        elif(User.objects.filter(username=username).exists()):
            messages.info(request , 'UserName Already Taken')
            return redirect('CreateAccount')
        else:
            user = User.objects.create_user(username = username , email = email , password=password)
            user.save()
            #log user ib
            user_login = auth.authenticate(username= username ,password=password )
            auth.login(request , user_login)
            return redirect('BrokersCompare')
    else:
         return render(request,"CreateAccount.html")
def ForgotPassword(request):
    return render(request,"ForgotPassword.html")