import json

def read_json():
    with open('../files/me.json', 'r') as file:
        data = json.load(file)
    return data

# print(data)
# print('Name:', data['name'])
# print('Age:', data['age'])
# print('Hobbies:', ', '.join(data['hobbies']))