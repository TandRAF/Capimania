import math
#////////////////////////////////////////////////
#Exercițiul 4

def An_Bisect(x):
    if x%4 == 0 and x%100 != 0 or x%400 == 0:
        return "este an Bisect"
    else:
        return "nu este an Biscet"
    
print(f"Exercițiul 4\n {An_Bisect(1900)}")
#////////////////////////////////////////////////
#Exercițiul 5

def Functie_De_Ramuri(x):
    if x < -3:
        return 2*x +1
    elif x == -3:
        return 0 
    elif x > -3: 
        return 3*x*x + 6*x - 5

print(f"Exercițiul 5\n x este {Functie_De_Ramuri(0)}")
#////////////////////////////////////////////////
#Exercițiul 6

def Interval(a,b,c):
    return c>=a and c<=b

print(f"Exercițiul 6\n {Interval(1,4,2)}")
#////////////////////////////////////////////////
#Exercițiul 7

def Sort(a,b,c):
    list = [a,b,c]
    nr1 = max(list)
    list.remove(nr1)
    nr2 = max(list)
    list.remove(nr2)
    nr3 = list[0]
    return nr1, nr2, nr3
print(f"Exercițiul 7\n {Sort(1,7,3)}")

#////////////////////////////////////////////////
#Exercițiul 9

def Cerc(r):
    lungimea = 2*math.pi*r
    aria = math.pi*r*r
    return "Aria este " + str(aria) + "S, si lungimea este " + str(lungimea)

print(f"Exercițiul 9\n {Cerc(5)}")