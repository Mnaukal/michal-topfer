import csv


numbers = list(range(11))
second_powers = [x ** 2 for x in numbers]

data = list(zip(numbers, second_powers))

# Print the table
print(data)

# Write to file
file_path = "out.csv"

with open(file_path, "w", newline="", encoding="utf8") as file:  # csv.writer adds the newlines
    # Attach writer to file
    writer = csv.writer(file, delimiter=",")

    # Write header (column names)
    writer.writerow(["number", "second power"])

    # Write data
    writer.writerows(data)
