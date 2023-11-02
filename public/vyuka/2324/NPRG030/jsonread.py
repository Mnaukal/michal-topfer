import json

file_path = "sample.json"

# Open JSON source file
with open(file_path, encoding="utf8") as file:
    # Parse configuration
    config = json.load(file)

    # Access whole document
    print(config)

    # Access particular options
    print(config['connection']['server'])
    print(config['options']['components'])


# Load JSON from string
config = json.loads('{"letters":["a","b","c"]}')
print(config)
