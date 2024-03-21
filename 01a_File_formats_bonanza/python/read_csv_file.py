import csv

with open('../me.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(row)
        print('Name:', row['name'])
        print('Age:', row['age'])
        print('Hobbies:', row['hobbies'])