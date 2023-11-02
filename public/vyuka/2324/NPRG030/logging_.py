"""
Příklad logování při převádění textu na číslo.

Převzato od Pavla Koupila (https://gitlab.mff.cuni.cz/contosp/nprg030/-/blob/master/class09/preved_na_cislo_logovani.py) a upraveno.
"""


import logging

# set the logging level
# TODO: try experimenting with different values
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s [%(levelname)s] - %(message)s",
)


def convert_to_number(number_str: str) -> float | None:
    """Converts a string to a number. Returns None if the conversion fails."""
    try:
        number = float(number_str)
        logging.info(f"String '{number_str}' converted to number {number}")
        return number
    except ValueError as e:
        logging.error(f"Cannot convert string '{number_str}' to number: {e}")
        return None



number_strings = ["123", "456.7", "890,1", "retezec", "12l", "-342"]
for number_str in number_strings:
    logging.debug(f"Converting '{number_str}' to number...")

    number = convert_to_number(number_str)

    if number is not None:
        print(f"Number: {number}")
    else:
        logging.warning("Conversion to number failed.")
