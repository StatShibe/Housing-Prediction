from django.shortcuts import render

from joblib import load
model = load('./models/lm.joblib')

def predictor(request):
    return render(request, 'main.html')

def formInfo(request):
    areaIncome = float(request.GET['avgAreaIncome'])
    houseAge = float(request.GET['avgHouseAge'])
    rooms = float(request.GET['avgRooms'])
    population = float(request.GET['areaPopulation'])
    bedrooms = float(request.GET['avgBedrooms'])
    #address = request.GET['address']
    y_pred = model.predict([[areaIncome, houseAge, rooms, population, bedrooms]])
    y_pred = int(y_pred)
    print(y_pred)
    return render(request,'result.html',{'result' : y_pred} )