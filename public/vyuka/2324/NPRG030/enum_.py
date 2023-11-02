"""
Funkce pro vypisování dnů v týdnu.
Předpokládejme, že někde v programu si ukládáme dny v týdnu a chceme je vypsat česky.
"""

# bez enum
print("Bez enum:")

def print_weekday_in_czech_1(weekday: str):
    if weekday == "monday":
        print("pondělí")
    if weekday == "tuesday":
        print("úterý")
    if weekday == "wednesday":
        print("středa")
    if weekday == "thursday":
        print("čtvrtek")
    if weekday == "friday":
        print("pátek")
    if weekday == "saturday":
        print("sobota")
    if weekday == "sunday":
        print("neděle")


print_weekday_in_czech_1("wednesday")
print_weekday_in_czech_1("wendsday")  # co se stane, když uděláme překlep?


# pomocí enum
print("\nPomocí enum:")

from enum import Enum

# definujeme si možné hodnoty dnů v týdnu
class Weekday(Enum):
    """Days of the week"""
    MONDAY = 1
    TUESDAY = 2
    WEDNESDAY = 3
    THURSDAY = 4
    FRIDAY = 5
    SATURDAY = 6
    SUNDAY = 7

def print_weekday_in_czech_2(weekday: Weekday):
    if weekday == Weekday.MONDAY:
        print("pondělí")
    if weekday == Weekday.TUESDAY:
        print("úterý")
    if weekday == Weekday.WEDNESDAY:
        print("středa")
    if weekday == Weekday.THURSDAY:
        print("čtvrtek")
    if weekday == Weekday.FRIDAY:
        print("pátek")
    if weekday == Weekday.SATURDAY:
        print("sobota")
    if weekday == Weekday.SUNDAY:
        print("neděle")

print_weekday_in_czech_2(Weekday.WEDNESDAY)  # používáme konstantu, nemůžeme udělat překlep
print_weekday_in_czech_2(Weekday.WENSDAY)    # když ho náhodou uděláme, vyhodí to výjimku (a IDE nás upozorňuje)
