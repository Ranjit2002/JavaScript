while (n := int(input("Enter a Number: "))) != 0:
    print(n)
    print(n * 5)
    break



def Even_Odd():
    n = int(input("Enter a number: "))
    print("Even" if n % 2 == 0 else "Odd")

# Even_Odd()

fib = lambda n: n if n <= 1 else fib(n-1) + fib(n-2)
