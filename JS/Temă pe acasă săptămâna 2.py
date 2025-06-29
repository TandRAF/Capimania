#////////////////////////////////////////////////
#Exercițiul 3
import operator
def f(x):
    return x + 5
def g(x):
    return x + 3

def Operatii_Cu_Functii(f,g,operator = 0):
    if operator == 0: 
        return (lambda x : f(x) + g(x))
    else: 
        return (lambda x : operator(f(x),g(x)))

print(Operatii_Cu_Functii(f,g,operator.mul)(5))
#////////////////////////////////////////////////
#Exercițiul 4
print((lambda n : n + 15)(10))