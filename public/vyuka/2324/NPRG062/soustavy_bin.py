DIGITS = "01"


def from_base2(number_str: str) -> int:
    """Takes a number as a string in base 2 and returns the number in decimal."""
    number = 0

    # use the Horner's scheme for the conversion
    for digit_char in number_str:
        digit = DIGITS.index(digit_char)
        number = number * 2 + digit

    return number


def to_base2(number: int) -> str:
    """Takes a number and returns it as a string in base 2."""
    number_str = ""

    while number > 0:
        digit = number % 2
        digit_char = DIGITS[digit]
        number_str = digit_char + number_str
        number //= 2

    return number_str


# examples
print(from_base2("101"))
print(to_base2(5))
