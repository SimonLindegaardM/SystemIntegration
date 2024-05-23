
def read_txt():
    with open('../files/me.txt', 'r') as file:
        content = file.readlines()
        json_objects = {}
        for line in content:
            key, value = line.strip().split(": ", 1)
            if key == 'age':
                # Assuming the age line always follows the format "age: XX år"
                value = value.split()[0] + " år"  # Keep the "år" part as it seems important
            elif key == 'hobbies':
                # Assuming hobbies are separated by a comma and a space
                value = value.split(", ")
            json_objects[key] = value

        print(json_objects)
        return(json_objects)