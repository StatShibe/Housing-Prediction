from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json



from joblib import load
model = load('./models/lm.joblib')

def predictor(request):
    return render(request, 'main.html')

@csrf_exempt
def formInfo(request):
    print(request.body)
    data = json.loads(request.body.decode('utf-8'))
    areaIncome = float(data["avgAreaIncome"])
    houseAge = float(data["avgHouseAge"])
    rooms = float(data["avgRooms"])
    population = float(data["population"])
    bedrooms = float(data["avgBedrooms"])
    #address = request.GET['address']
    y_pred = model.predict([[areaIncome, houseAge, rooms, population, bedrooms]])
    y_pred = int(y_pred)
    print(y_pred)
    return JsonResponse({'result':y_pred})