import json

# the data can be a dictionary, list, or a simple value such as number or string
data = {
    "a": 5,
    "b": ["a", "b"]
}

# print as string
print(json.dumps(data))

# print with indentation
print(json.dumps(data, indent=2))

file_path = "out.json"

# Store JSON in file
with open(file_path, "w", encoding="utf8") as file:
    json.dump(data, file)
