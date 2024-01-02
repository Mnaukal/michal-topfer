import csv

file_path = "sample.csv"


# for loop (iterator)

with open(file_path, encoding="utf8") as file:
    # Attach CSV reader to file
    reader = csv.reader(file, delimiter=',')

    # The first row of the CSV file is a header (names of columns).
    # The following command will skip the first row so the for loop will start from the second row (the first row with data).
    next(reader)

    # Access all rows iteratively in a for loop (cannot access n-th line directly)
    for row in reader:
        print(row)


# list

with open(file_path, encoding="utf8") as file:
    # Attach CSV reader to file
    reader = csv.reader(file, delimiter=',')

    # Again, we want to skip the header.
    next(reader)

    # Store data in list, this consumes possibly lot of RAM to store the data
    data = list(reader)

    # Access the data as list of lists
    print(data)


# dictionary

with open(file_path, encoding="utf8") as file:
    # Attach CSV reader to file
    # As "fieldnames" parameter is not defined, first row of the CSV file will be used as column names (the keys in the dictionaries for rows).
    reader = csv.DictReader(file, delimiter=',')

    # Iterate over rows represented as ordered dictionaries
    for row in reader:
        print("Row:")
        for key, value in row.items():
            # key is the column name
            print(f" {key}: {value}")
