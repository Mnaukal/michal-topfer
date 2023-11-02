"""
Debugování pomocí logů.

Převzato od Pavla Koupila (https://gitlab.mff.cuni.cz/contosp/nprg030/-/blob/master/class09/prumerne_hodnoceni.py) a upraveno.
"""


import logging

# Nastavení logování
logging.basicConfig(
    filename="average_grade.log",  # logs are saved to a file
    encoding="utf8",  # set the encoding
    filemode="w",  # set the file mode to overwrite previous logs (default is append)
    format="%(levelname)s: %(message)s",  # set the message format (to remove module name)
    level=logging.DEBUG,
)


def compute_average_grade(grades: list[tuple[str, int]]) -> float | None:
    """Computes the average grade from a list of tuples (student, grade). The result is rounded to two decimal places. Returns None if no grades are provided."""
    logging.debug(f"Computing the average of grades: {grades}")
    grades_sum = 0
    grades_count = 0

    # compute the sum of grades
    for name, grade in grades:
        logging.debug(f"Student: {name}, Grade: {grade}")
        grades_sum += grade
        grades_count += 1
        logging.debug(f"Current sum: {grades_sum}, current count: {grades_count}")

    # add 1 to prevent division by zero
    if grades_count == 0:
        logging.warning("Count of grades is zero, adding 1 to prevent division by zero.")
    grades_count += 1

    # compute the average
    logging.debug(f"Computing the average as {grades_sum} / {grades_count}")
    average = grades_sum / grades_count
    logging.debug(f"Average: {average}")

    # round the average
    rounded_average = round(2, int(average))
    logging.debug(f"Rounded average: {rounded_average}")

    return rounded_average

    
def print_average_grade(students: list[tuple[str, int]]) -> None:
    """Prints the computed average grade for a list of students and their grades."""
    average_grade = compute_average_grade(students)

    logging.debug(f"Printing the average grade for students: {students}")
    student_names = [student[0] for student in students]

    if average_grade is not None:
        print(f"Average grade of {', '.join(student_names)} is {average_grade}")
        logging.debug(f"Average grade {average_grade} printed")
    else:
        logging.error("Cannot print the average, see 'average_grade.log' for more information.")


# Testovací data
students = [("Jan", 85), ("Petr", 92), ("Marie", 78), ("Eva", 88)]
no_students = []

print_average_grade(students)
print_average_grade(no_students)
