import os

print(f'Operating system name: "{os.name}"')

# Execute command
if os.name == "posix":
    os.system("ls")
else:
    os.system("dir")

# current working directory = odkud jsem spustil program

print(f'\nCurrent working directory is "{os.getcwd()}"')

print("\nList directory")
print(os.listdir("."))

# path to current file

print("\nAktuální soubor")
current_file_path = os.path.realpath(__file__)
print(current_file_path)

# directory of current file

current_file_directory = os.path.dirname(current_file_path)
print(current_file_directory)

# change working directory

os.chdir(current_file_directory)
print(f'\nCurrent working directory is "{os.getcwd()}"')

# create folder

print('Make directory "foo"')
try:
    os.mkdir("foo")
except FileExistsError:
    print('"foo" already exists')

print("Make directory recursive")
os.makedirs("foo/bar", exist_ok=True)

# rename

print("Rename file or directory")
try:
    os.rename("foo", "bar")
except FileExistsError:
    print('"bar" already exists')

# remove

# os.removedirs("bar")
os.removedirs("bar/bar")
