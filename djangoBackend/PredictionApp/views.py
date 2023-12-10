from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt



from joblib import load
model = load('./models/lm.joblib')

def predictor(request):
    return render(request, 'main.html')

@csrf_exempt
def formInfo(request):
    print(request.POST)
    print(request.body)

    areaIncome = float(request.GET["avgAreaIncome"])
    houseAge = float(request.GET["avgHouseAge"])
    rooms = float(request.GET["avgRooms"])
    population = float(request.GET["population"])
    bedrooms = float(request.GET["avgBedrooms"])
    #address = request.GET['address']
    y_pred = model.predict([[areaIncome, houseAge, rooms, population, bedrooms]])
    y_pred = int(y_pred)
    print(y_pred)
    return JsonResponse({'result':y_pred})