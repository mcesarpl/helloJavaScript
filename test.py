import requests

params = {'id':'110','name':'Thalisson','year':'1997','rating':'3.0'}
page = requests.post("http://localhost:5001/games/",data=params)
print(page.content)
