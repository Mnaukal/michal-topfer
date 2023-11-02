import sys

print(f"Commandline arguments: \"{sys.argv}\"")

# print to stderr, stdout
print("Normální text")
print("ještě jeden řádek", file=sys.stdout)
print("Chyba", file=sys.stderr)
