import json

with open('../me.json', 'r') as file:
    data = json.load(file)

print(data)
print('Name:', data['name'])
print('Age:', data['age'])
print('Hobbies:', ', '.join(data['hobbies']))