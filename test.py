import requests

# GET get_engines
# data = {}
# page = requests.get(url = "http://localhost:3000/engines", params=data)

# GET getMethods
# data = {}
# page = requests.get(url = "http://localhost:3000/models/XNR/methods", params=data)

# GET models
# data = {}
# page = requests.get(url = "http://localhost:3000/models", params=data)

# GET predict
data = {
    "data":{
        "X": [[0, 0],[0, 1],[1, 0],[1, 1]]
    }
}
page = requests.get(url = "http://localhost:3000/models/XorModel", json=data)




# Post call_method
# data = {
#     "method": "method_name",
#     "params": {
#         "a": 0,
#         "b": 1,
#         "c": [2, 3, 4]
#     }
# }
# page = requests.post("http://localhost:3000/models/XorModel",json=data)

# Post fit
# data = {
#     "data": {
#         "X": [[0, 0],[0, 1],
#              [1, 0],[1, 1]],
#         "y": [0, 1, 1, 0]
#     },
#     "params": {
#         "n_classes": 2,
#         "max_steps": 150
#     }
# }
# page = requests.post("http://localhost:3000/models/Xormodel",json=data)

# Post createEmpty
# data ={
#     "algorithm": "LSTM"
# }
# page = requests.post("http://localhost:3000/models/XorModel",json=data)

# Post createFit
# data ={
#     "algorithm": "LSTM",
#     "data": {
#         "X": [[0, 0],[0, 1],
#              [1, 0],[1, 1]],
#         "y": [0, 1, 1, 0]
#     },
#     "params": {
#         "n_classes": 2,
#         "max_steps": 150
#     }
# }
# page = requests.post("http://localhost:3000/models/XorModel",json=data)

# PUT updateMetada
# data = {
#     "metadata":{
#         "name": "new_name",
#         "owner": "new_owner",
#         "creation_date": "new_date"
#     }
# }

# page = requests.put("http://localhost:3000/models/NaiveBaysianFB",json=data)

# PUT updateModel
# data = {
#     "data": {
#         "X": [3, 75.2, 6, 6.1],
#         "y": [4.3, 7, 12.02, 0]
#     },
#     "params": {
#         "alpha": 0.05
#     }
# }

# page = requests.put("http://localhost:3000/models/NaiveBaysianFB",json=data)

# DELETE deleteModel
# data = {}
# page = requests.delete("http://localhost:3000/models/LR_GPU_TWITTER",json=data)



print(page)
print(page.content)
