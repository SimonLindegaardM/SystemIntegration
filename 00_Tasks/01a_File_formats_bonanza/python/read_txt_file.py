with open('../me.txt', 'r') as file:
    content = file.readlines()
    json_objects = []
    for line in content:
        data = line.strip().split(". ")
        json_objects.append({
            "name": data[0],
            "age": int(data[1].split()[0]),
            "hobbies": data[2]
        })
    print(json_objects)