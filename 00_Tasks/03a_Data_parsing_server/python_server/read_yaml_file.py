import yaml

def read_yaml():
    with open('../files/me.yaml', 'r') as file:
        data = yaml.safe_load(file)
    return data