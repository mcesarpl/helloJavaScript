#Lets see how to look at type of objects in python :

#int
a=8
b=-1

#float
c=2.0

#string
d='hello'
print(a,b,c)
print(type(a),type(b),type(c))
print(d)
print(type(d))

#This is how complex numbers are written in python
e=3+5j
print(e)
print(type(e))

#Binary
f=0b1010
print(f)
print(type(f))

#Hexadeciamal
g=0xFF
print(g)
print(type(g))

#Boolean
h=True
print(h)
print(type(h))
i=False
print(i)
print(type(i))

#Convert

#to float type in int we can use int function
print(int(c))
print(type(int(c)))

#string to float
j=float("22.1")
print(j)
print(type(j))

#int to binary
print(bin(10))


#Slicing a string

s="Hello Python World!"
print(s)
print(s[0])
print(s[1])
print(s[0:5])
print(s[0:])
print(s[:8])
print(s[-3:-1])
print(s[0:18:2]) #s[primeiro:ultimo:passo]
print(s[18::-1])

#String Methods

print(s.find("Wor",0,18)) #returns the position in the string wherer it were found
print(s.count("o"))
print(s.replace("Python","UpsideDown"))

#int
great = 10
age = 20.54
positive = True
morningFrase = "I am the best"

print(great, age, positive, morningFrase)
