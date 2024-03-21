import xml.etree.ElementTree as ET

tree = ET.parse('../me.xml')
root = tree.getroot()

name = root.find('name').text
age = root.find('age').text
hobbies = [hobby.text for hobby in root.find('hobbies').findall('hobby')]

print(f'Name: {name}')
print(f'Age: {age}')
print(f'Hobbies: {", ".join(hobbies)}')