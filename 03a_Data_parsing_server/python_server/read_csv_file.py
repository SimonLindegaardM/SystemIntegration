import csv

def read_csv():
    data = []
    with open('../files/me.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
    return data