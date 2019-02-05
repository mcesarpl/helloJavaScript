#Lets first make a empty list
lst = []
print(lst)

#Puting diferent type of data in a list
lst2 = [10, 20, 'Hello', -1, 1.5]
print(lst2)

#Using index, slicing and repetition 
print(lst2[3]) #index
print(lst2[0:2]) #slicing
print(lst2*3) #repetition

#We can use length function like before
print(len(lst2))

#Using append, remove, del

lst2.append(40) #add a element to the list
lst2.remove('Hello') #find and remove the element passed
del(lst2[1]) #delete element by index
print(lst2)

#Max and Min

print(max(lst2))
print(min(lst2))

#Insert
#insert(index, value)
lst2.insert(3, 99)
print(lst2)

#Sort
lst2.sort()
print(lst2)

lst2.sort(reverse=True)
print(lst2)

#Removing all elements of the list
lst2.clear()
print(lst2)


