from argparse import ArgumentParser

parser = ArgumentParser(prog="argparse_test.py", description='Sample argument parsing program.')

# Add positional argument
parser.add_argument("foo", type=str,
                    default="Default foo value",
                    help="provide some string as foo argument")

# Add optional argument
parser.add_argument("-b", "--bar", type=int,
                    default=123, help="Provide value for optional numeric bar argument")

# Add required argument
parser.add_argument("--required", required=True, action="store_true",
                    help="This argument must be passed")

# Add boolean argument
parser.add_argument("-v", "--verbose", action="store_true",
                    help="Specify to make output more verbose")

# Add choice argument
parser.add_argument("--choice", choices=["yes", "no"], required=True,
                    help="Choose \"yes\" or \"no\"")


# Example usage
# args = parser.parse_args("FOO_VAL --bar 888 --required -v --choice yes".split())
# args = parser.parse_args(["-h"])

# Real usage, parse program arguments (this will use sys.argv)
args = parser.parse_args()

print("Parsed arguments:")
print(f"foo: {args.foo}")
print(f"bar: {args.bar}")
print(f"required: {args.required}")
print(f"verbose: {args.verbose}")
print(f"choice: {args.choice}")
