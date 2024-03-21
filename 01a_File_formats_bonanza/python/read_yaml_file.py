import yaml

with open('../me.yaml', 'r') as file:
    profile = yaml.safe_load(file)

print(profile)
print('Name:', profile['name'])
print('Age:', profile['age'])
print('Hobbies:', ', '.join(profile['hobbies']))