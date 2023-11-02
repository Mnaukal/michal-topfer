from pathlib import Path

working_directory = Path(".")  # kde jsem spustil program
print("Working directory:", working_directory)
print("Working directory (repr):", repr(working_directory))
print("Working directory (absolutní):", working_directory.resolve()) # převede na absolutní

current_file_path = Path(__file__)  # cesta k tomuto souboru
print("Tenhle soubor:", current_file_path)

current_file_directory = current_file_path.parent
print("Jeho složka:", current_file_directory)


print("\nVytvoříme nový soubor ve stejné složce.")

file_path = current_file_directory / "novy_soubor.txt"
# file_path = Path(__file__).parent / "novy_soubor.txt"
print(file_path)

with open(file_path, "w", encoding="utf8") as file:
    file.write("Hello, world!\n")


print("\nVytvoříme podsložku.")

# velmi snadno se tu prochází složky
subfolder_path = current_file_directory / "podslozka" / "dalsi_podslozka"
print(subfolder_path)
print(subfolder_path.resolve())

# cesta zatím neexistuje, ale můžeme ji vytvořit
subfolder_path.mkdir(parents=True, exist_ok=True)

# vytvoříme další soubor, tentokrát v podsložce
with open(subfolder_path / "dalsi_soubor.txt", "w", encoding="utf8") as file:
    file.write("Hello, world!\n")


print("\nPath properties")

def print_path_properties(path):
    print(f"path: {path}")
    print(f"drive: {path.drive}")
    print(f"parent: {path.parent}")
    print(f"parents: {[x for x in path.parents]}")
    print(f"name: {path.name}")
    print(f"suffix: {path.suffix}")
    print(f"stem: {path.stem}")
    print(f"possix: {path.as_posix()}")
    print(f"absolute: {path.is_absolute()}")
    print(f"exists: {path.exists()}")
    print(f"dir: {path.is_dir()}")
    print(f"file: {path.is_file()}")
    print()

print_path_properties(Path("."))
print_path_properties(Path(".").resolve())
print_path_properties(Path(__file__))
