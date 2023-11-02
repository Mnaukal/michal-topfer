import csv

file_path = "sample.csv"


# iterator

with open(file_path, encoding="utf8") as file:
    # Attach CSV reader to file
    reader = csv.reader(file, delimiter=',')

    # Access all rows is an iterator (cannot access n-th line directly)
    for row in reader:
        print(row)


# list

with open(file_path, encoding="utf8") as file:
    # Attach CSV reader to file
    reader = csv.reader(file, delimiter=',')

    # Store data in list, this consumes possibly lot of RAM to store the data
    data = list(reader)

    # Access the data as list of lists
    print(data)


# dictionary

with open(file_path, encoding="utf8") as file:
    # Attach CSV reader to file
    # As "fieldnames" are not defined, first line will be used as filed names
    reader = csv.DictReader(file, delimiter=',')

    # Iterate over lines represented as ordered dictionaries
    for row in reader:
        print("Row:")
        for key, value in row.items():
            print(f" {key}: {value}")
