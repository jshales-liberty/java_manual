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

## reference types
- reference types represent everything else in Java that is not a primitive type. Reference types refer to reference objects, meaning that they all inherit from the greater Object class.

## Classes / Instances
- A class is a blueprint or a template for creating different objects which
defines its properties and behaviors. Java class objects exhibit the properties
and behaviors defined by its class. A class can contain fields and methods to
describe the behavior of an object.

# The following is an example of a class.
- Local variables − Variables defined inside methods, constructors or
blocks are called local variables. The variable will be declared and initialized
within the method and the variable will be destroyed when the method has completed.

# In the below example, barking(), hungry() and sleeping() are methods.

```
public class Dog {
   String breed;
   int age;
   String color;

   void barking() {
   }

   void hungry() {
   }

   void sleeping() {
   }
}
```

# Instances
- The creation of an instance is called instantiation. In class-based programming, objects are created from classes by subroutines called constructors, and destroyed by destructors. An object is an instance of a class, and may be called a class instance or class object; instantiation is then also known as construction.

## Instance Fields or Instance variables −
- Instance variables are variables within a class but outside any method. These variables are initialized when the class is instantiated.
Instance variables can be accessed from inside any method, constructor or blocks of
that particular class.

## Instance method
- Are methods which require an object of its class to be created before it
can be called. To invoke a instance method, we have to create an Object of the class in within which it defined.

- Memory allocation: These methods themselves are stored in Permanent Generation space of  heap but the parameters (arguments passed to them) and their local variables and the value to be returned are allocated in stack. They can be called within the same class in which they reside or from the different classes defined either in the same package or other packages depend on the access type provided to the desired instance method.

- Important Points:

- Instance method(s) belong to the Object of the class not to the class i.e. they can be called after creating the Object of the class.
Every individual Object created from the class has its own copy of the instance method(s) of that class.
They can be overridden since they are resolved using dynamic binding at run time.

- Instance method can access the instance methods and instance variables directly.
- Instance method can access static variables and static methods directly.
- Static methods can access the static variables and static methods directly.
- Static methods can’t access instance methods and instance variables directly. They must use reference to object. And static method can’t use this keyword as there is no instance for ‘this’ to refer to.

## Example of accessing an instance Methods
```
// Example to illustrate accessing the instance method .
import java.io.*;

class Foo{

    String name = "";

    // Instance method to be called within the same class or
    // from a another class defined in the same package
    // or in different package.
    public void geek(String name){

        this.name = name;
    }
}

class GFG {
    public static void main (String[] args) {

        // create an instance of the class.
        Foo ob = new Foo();

        // calling an instance method in the class 'Foo'.
        ob.geek("GeeksforGeeks");
        System.out.println(ob.name);
    }
}
```

## Static Fields or Class Variables
- Variables declared within a class,outside any method, with the static keyword.
- A class can have any number of methods to access the value of various kinds of methods.
- Note: Static variables and their values (primitives or references) defined in the class are stored in PermGen space of memory.

## Static Methods
- Static methods are the methods in Java that can be called without creating an object of class. They are referenced by the class name itself or reference to the Object of that class.

- When to use static methods ??

- When you have code that can be shared across all instances of the same class, put that portion of code into static method.They are basically used to access static field(s) of the class.

https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html

# Example of Static Methods
```public static void geek(String name)
{
 // code to be executed....
}

// Must have static modifier in their declaration.
// Return type can be int, float, String or user defined data type.
```

# Memory Allocation (Static Methods):
- Static Methods are stored in Permanent Generation space of heap as they are associated to the class in which they reside not to the objects of that class. But their local variables and the passed argument(s) to them are stored in the stack. Since they belong to the class so they can be called to without creating the object of the class.

# Important Points:

- Static method(s) are associated to the class in which they reside i.e. they can be called even without creating an instance of the class i.e ClassName.methodName(args).
They are designed with aim to be shared among all Objects created from the same class.
Static methods can not be overridden. But can be overloaded since they are resolved using static binding by compiler at compile time.

## This
- 'this' is a keyword in Java which is used as a reference to the object of the current class, with in an instance method or a constructor. Using this you can refer the members of a class such as constructors, variables and methods.

- Note − The keyword this is used only within instance methods or constructors

- This in general, the keyword this is used to −Differentiate the instance variables
 from local variables if they have same names,
 within a constructor or a method.

# Example of This Keyword:
 - Here is an example that uses this keyword to access the members of a class

 ```
 Public class This_Example {
   // Instance variable num
   int num = 10;

   This_Example() {
      System.out.println("This is an example program on keyword this");
   }

   This_Example(int num) {
      // Invoking the default constructor
      this();

      // Assigning the local variable num to the instance variable num
      this.num = num;
   }

   public void greet() {
      System.out.println("Hi Welcome to Tutorialspoint");
   }

   public void print() {
      // Local variable num
      int num = 20;

      // Printing the local variable
      System.out.println("value of local variable num is : "+num);

      // Printing the instance variable
      System.out.println("value of instance variable num is : "+this.num);

      // Invoking the greet method of a class
      this.greet();
   }

   public static void main(String[] args) {
      // Instantiating the class
      This_Example obj1 = new This_Example();

      // Invoking the print method
      obj1.print();

      // Passing a new value to the num variable through parametrized constructor
      This_Example obj2 = new This_Example(30);

      // Invoking the print method again
      obj2.print();
   }
}
```

## Constructors
Every class has a constructor. If we do not explicitly write a constructor for a class,
the Java compiler builds a default constructor for that class. Each time a new object is
created, at least one constructor will be invoked. The main rule of constructors is that
they should have the same name as the class. A class can have more than one constructor.

# The following is an example of a constructor
```
public class Puppy {
   public Puppy() {
   }

   public Puppy(String name) {
      // This constructor has one parameter, name.
   }
}
```

## Java also supports Singleton Classes where you would be able to create only one instance of a class.

# Creating an Object
A class provides the blueprints for objects. So basically, an object is created from a class.
In Java, the new keyword is used to create new objects (New instance of an object).

# There are three steps when creating an object from a class −

- Declaration − A variable declaration with a variable name with an object type.

- Instantiation − The 'new' keyword is used to create the object.

- Initialization − The 'new' keyword is followed by a call to a constructor.
                  This call initializes the new object.

# Following is an example of creating an object −
```
public class Puppy {
   public Puppy(String name) {
      // This constructor has one parameter, name.
      System.out.println("Passed Name is :" + name );
   }

   public static void main(String []args) {
      // Following statement would create an object myPuppy
      Puppy myPuppy = new Puppy( "tommy" );
   }
}
```


## Inheritance

- In the Java language, classes can be derived from other classes, thereby inheriting fields and methods from those classes which have already been written and tested. The class from which the subclass is derived is called a superclass or parent class. The "extends" keyword is what you use to tell java that one class inhertits from another.

```
public class Shape {
    public double area ()
    {
        return 0;     
    }

class Circle extends Shape {                    
    private static final double PI = Math.PI;   
    private double diameter;                    
    public double area () {
        double radius = diameter / 2.0;
        return PI * radius * radius;
    }
}    
```

## Super

- Super is a keyword. It is used inside a sub-class method definition to call a method defined in the super class. Private methods of the super-class cannot be called. Only public and protected methods can be called by the super keyword. It is also used by class constructors to invoke constructors of its parent class.

```
//Parent class or Superclass
class Parentclass
{
   int num=100;
}
//Child class or subclass
class Subclass extends Parentclass
{
   int num=110;
   void printNumber(){
      //Super.variable_name
      System.out.println(super.num);
   }
   public static void main(String args[]){
      Subclass obj= new Subclass();
      obj.printNumber();
   }
}
```

## Overloading

- Method Overloading is a feature that allows a class to have two or more methods having same name, if their argument lists are different. The argument lists could differ in:
  - Number of parameters
  - Data type of parameters
  - Sequence of data type parameters

```
public class Calculation {
   void sum(int a,int b){System.out.println(a+b);}
   void sum(int a,int b,int c){System.out.println(a+b+c);}
```

## Overriding

- The ability of a subclass to override a method allows a class to inherit behavior from a super or parent class and then to modify behavior as needed for the subclass. The overriding method in the subclass has the same name, number and type of parameters, and return type as the method that it overrides from the parent class.

```
class Human{
   public void eat()
   {
      System.out.println("Human is eating");
   }
}
class Boy extends Human{
   public void eat(){
      System.out.println("Boy is eating");
   }
   public static void main( String args[]) {
      Boy obj = new Boy();
      obj.eat();
   }
}
```

## Packages

- A package is a namespace that organizes a set of related classes and interfaces. Conceptually you can think of packages as being similar to different folders on your computer.  
- For example if a package name is college.staff.cse, then there are three directories, college, staff and cse such that cse is present in staff and staff is present college.
- It is a good practice to use names of packages with lower case letters to avoid any conflicts with the names of classes and interfaces.

```
import java.util.*;
// util is a subpackage created inside java package
```

## Interfaces

- An interface is a reference type in Java. It is similar to class except a java interface can only contain method signatures and fields, but not implementation details.  A class implements an interface, thereby inheriting the abstract methods of the interface. Along with abstract methods, an interface may also contain constants, default methods, static methods, and nested types.

```
interface Bicycle {
    void speedUp(int increment);
    void applyBrakes(int decrement);
}

class ACMEBicycle implements Bicycle {
    int speed = 0;

   // The compiler will now require that methods
   // speedUp and applyBrakes are implemented

    void speedUp(int increment) {
         speed = speed + increment;   
    }

    void applyBrakes(int decrement) {
         speed = speed - decrement;
    }
}
```

## Casting

- Taking an Object of one particular type and turning it into another Object type.
The cast can be to its own class type or to one of its subclass or superclass types or interfaces. There are compile-time rules and runtime rules for casting in java.

```
Object obj; // may be an integer
if (obj instanceof Integer) {
	Integer objAsInt = (Integer) obj;
	// do something with 'objAsInt'
}
```

## Instanceof operator

- The java instanceof operator is used to test whether the object is an instance of the specified type (class or subclass or interface). The instanceof in java is also known as type comparison operator because it compares the instance with type. It returns either true or false.

```
class Animal{}  
class Dog1 extends Animal{//Dog inherits Animal  

 public static void main(String args[]){  
 Dog1 d=new Dog1();  
 System.out.println(d instanceof Animal);//true  
 }  
}  
```

## Arrays
- a container for data with an index.  Arrays are created with a fixed size and can hold a range of types, from primitives to objects.  The value of a given cell in the array can be accessed via the index.  There are classes that are similar to an array, such as ArrayList, that provide methods for things like sorting as well as being able to change size as required (to add more elements, for example).

## the uses of . [] {} ;
- . the dot operator is used to access the property or method of an object.
- [] the brackets operator is used when accessing the index of an array.
- {} the braces operator is used to enclose a block of logic (class or method definition, loop).
- ; the semi-colon operator is used to end a statement, such as a line of code within a method or the counter initialization in a For loop.

## access modifiers (public, private, protected)
- Public - can be called by code outside the class.
- Private - can only be called by code within the class - for example, an object has access to its own private methods.
- Protected - can only be called within the class or its descendants - for example, in a Pet < Cat inheritance tree, if there were also Owners that did not inherit, a Protected method in Pet could be called by objects of type Pet or Cat but not by objects of type Owner.

## Exceptions
- Thrown during runtime when an unexpected condition occurs, they are either part of the class definition or can be added by the developer.  Ideally they are not used to control flow but may have to be relied on in specific cases, such as when deserializing objects from a file to determine when the end of the file has been reached.  In the case when something throws more than one type of error, ideally each would be handled separately, or they would at least be grouped logically and handled that way rather than just handling the basic exception.  Anything that is defined as being able to throw an exception needs to be wrapped in a try / catch block, where the try portion holds the code that could throw an exception and the catch portion is where the exception would be handled should it be thrown.

## Generics
- This is used when a type should be specified at implementation, an example is an ArrayList.  ArrayLists can contain any type of object and may handle some operations differently based on what it contains, so the type operator (the less than, greater than signs) are used to declare the type when implementing:
'ArrayList<String> names = new ArrayList<String>();

## abstract classes, abstract methods
- An abstract class may not be instantiated.  Abstract methods are not implemented (but do have the parameters and return type defined).  The implementation occurs in the subclasses.  This is used in inheritance to ensure that a set of child classes have the same method calls even though those classes may differ in how those methods are implemented - a common verb but no common way to handle that verb.

## Enums
- An enum allows you to define a set of related constants, such as days of the week, or specializations for physicians, so that you can limit the values used in your program to that specific set.

## anonymous inner classes, lambdas
- An anonymous inner class is used when you only need to use a class once, frequently occurring when working with GUIs - the class is implemented without giving it a name.  A lambda is a way to express an anonymous inner class with only one method.
This is an example of a lambda from oracle.com:
```
13 public class ListenerTest {
14   public static void main(String[] args) {
15         
16     JButton testButton = new JButton("Test Button");
17     testButton.addActionListener(new ActionListener(){
18     @Override public void actionPerformed(ActionEvent ae){
19         System.out.println("Click Detected by Anon Class");
20       }
21     });
22     
23     testButton.addActionListener(e -> System.out.println("Click Detected by Lambda Listener"));
24     
25     // Swing stuff
26     JFrame frame = new JFrame("Listener Test");
27     frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
28     frame.add(testButton, BorderLayout.CENTER);
29     frame.pack();
30     frame.setVisible(true);
31     
32   }
33 }
```
## important classes of the standard library
- From stackoverflow, these are some of the important sets of classes:
    - java.lang:  all the basic classes (e.g. String, Integer)
    - java.util:  more complex classes (e.g. Date, ArrayList)
    - java.io:  working with files
    - java.math:  numeric operations including exponents, trig, & logs
    - java.net:  the classes for implementing networking (sockets, cookies, URIs, URLs)
    - java.swing:  GUI, replaces AWT, but more likely to use a web interface
    - java.sql:  the classes for working with a DB
