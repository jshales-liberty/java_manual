## values
- The types of values must be explicitly stated in Java, unlike in JS where you can specify a variable to store any kind (or number) of values. This means Java is "strongly typed." But more broadly values are referenced by variables. 
## operations 
- Operations in Java involve operators and operands. Operators are special characters that represent different functionality, while each operation employs operands and yields a result. A list of Java operators: -- Unary Operator,
-- Arithmetic Operator
-- shift Operator 
-- Relational Operator 
-- Bitwise Operator 
-- Logical Operator 
-- Ternary Operator 
-- Assignment Operator 
## variables
- There are a few types of variables in Java, I will define them below.
- Instance variables (non-static fields) These variables are take unique values based on an instance of a given class
- Class variables (static fields) These variables have only a single copy in existence shared by all instances of a given class. 
- Variables can also be local (only accessible to a given method or class) or global (accessible to all methods and classes)
- Parameter variables are passed into methods and used within the body of a method
## if else
- if else logic is similar in Java to other control flows we have covered in class. The if condition is surrounded by parentheses and must evaluate to true or false. There is no concept of truthiness in Java like there is in JS. The body (based on the true/false of the the conditional) is enclosed in {}.
```boolean x = false;
if (x)
{///do something}
else {//do something else}
```
## while
- a while loop runs over and over until the condition provided is no longer true. A while loop body will only execute after the while is evaluated to true, there is no guarantee it will ever run at all.
```while (x<3)
{System.out.println(x);
x++;}
```
## for
- a for loop allows iterating through a finite list of objects. for instance one could use a for loop to apply a method to each object in an array. 
```
for(int i=1; i<11; i++){
              System.out.println("Number is:  " + i);
```
## primitive types
- primitive types are the most basic data types in java: boolean, byte, char, short, int, long, float, double
# reference types
- reference types represent everything else in Java that is not a primitive type. Reference types refer to reference objects, meaning that they all inherit from the greater Object class.