## Classes / Instances
--A class is a blueprint or a template for creating different objects which
defines its properties and behaviors. Java class objects exhibit the properties
and behaviors defined by its class. A class can contain fields and methods to
describe the behavior of an object.

## The following is an example of a class.
--Local variables − Variables defined inside methods, constructors or
blocks are called local variables. The variable will be declared and initialized
within the method and the variable will be destroyed when the method has completed.



## In the below example, barking(), hungry() and sleeping() are methods.


`public class Dog {
   String breed;
   int age;
   String color;

   void barking() {
   }

   void hungry() {
   }

   void sleeping() {
   }
}`

## Instances
--The creation of an instance is called instantiation. In class-based programming, objects are created from classes by subroutines called constructors, and destroyed by destructors. An object is an instance of a class, and may be called a class instance or class object; instantiation is then also known as construction.

## Instance Fields or Instance variables −
--Instance variables are variables within a class but outside any method. These variables are initialized when the class is instantiated.
Instance variables can be accessed from inside any method, constructor or blocks of
that particular class.

## Instance method
--Are methods which require an object of its class to be created before it
can be called. To invoke a instance method, we have to create an Object of the class in within which it defined.

--Memory allocation: These methods themselves are stored in Permanent Generation space of     heap but the parameters (arguments passed to them) and their local variables and the value to be returned are allocated in stack. They can be called within the same class in which they reside or from the different classes defined either in the same package or other packages depend on the access type provided to the desired instance method.

--Important Points:

--Instance method(s) belong to the Object of the class not to the class i.e. they can be called after creating the Object of the class.
Every individual Object created from the class has its own copy of the instance method(s) of that class.
They can be overridden since they are resolved using dynamic binding at run time.

--Instance method can access the instance methods and instance variables directly.
--Instance method can access static variables and static methods directly.
--Static methods can access the static variables and static methods directly.
--Static methods can’t access instance methods and instance variables directly. They must use reference to object. And static method can’t use this keyword as there is no instance for ‘this’ to refer to.

## Example of accessing an instance Methods
`// Example to illustrate accessing the instance method .
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
}`

## Static Fields or Class Variables
--Variables declared within a class,outside any method, with the static keyword.
--A class can have any number of methods to access the value of various kinds of methods.
--Note: Static variables and their values (primitives or references) defined in the class are stored in PermGen space of memory.

## Static Methods
--Static methods are the methods in Java that can be called without creating an object of class. They are referenced by the class name itself or reference to the Object of that class.

--When to use static methods ??

--When you have code that can be shared across all instances of the same class, put that portion of code into static method.They are basically used to access static field(s) of the class.

https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html

## Example of Static Methods
`public static void geek(String name)
{
 // code to be executed....
}

// Must have static modifier in their declaration.
// Return type can be int, float, String or user defined data type.`

## Memory Allocation (Static Methods):
--Static Methods are stored in Permanent Generation space of heap as they are associated to the class in which they reside not to the objects of that class. But their local variables and the passed argument(s) to them are stored in the stack. Since they belong to the class so they can be called to without creating the object of the class.

## Important Points:

--Static method(s) are associated to the class in which they reside i.e. they can be called even without creating an instance of the class i.e ClassName.methodName(args).
They are designed with aim to be shared among all Objects created from the same class.
Static methods can not be overridden. But can be overloaded since they are resolved using static binding by compiler at compile time.

## This
-- 'this' is a keyword in Java which is used as a reference to the object of the current class, with in an instance method or a constructor. Using this you can refer the members of a class such as constructors, variables and methods.

--Note − The keyword this is used only within instance methods or constructors

--This in general, the keyword this is used to −Differentiate the instance variables
 from local variables if they have same names,
 within a constructor or a method.

 ## Example of This Keyword:

 --Here is an example that uses this keyword to access the members of a class

 `Public class This_Example {
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
}`

## Constructors
Every class has a constructor. If we do not explicitly write a constructor for a class,
the Java compiler builds a default constructor for that class. Each time a new object is
created, at least one constructor will be invoked. The main rule of constructors is that
they should have the same name as the class. A class can have more than one constructor.

## The following is an example of a constructor
```public class Puppy {
   public Puppy() {
   }

   public Puppy(String name) {
      // This constructor has one parameter, name.
   }
}```

## Java also supports Singleton Classes where you would be able to create only one
instance of a class.


## Creating an Object
A class provides the blueprints for objects. So basically, an object is created from a class.
In Java, the new keyword is used to create new objects (New instance of an object).

## There are three steps when creating an object from a class −

--Declaration − A variable declaration with a variable name with an object type.

--Instantiation − The 'new' keyword is used to create the object.

--Initialization − The 'new' keyword is followed by a call to a constructor.
                  This call initializes the new object.

## Following is an example of creating an object −
```public class Puppy {
   public Puppy(String name) {
      // This constructor has one parameter, name.
      System.out.println("Passed Name is :" + name );
   }

   public static void main(String []args) {
      // Following statement would create an object myPuppy
      Puppy myPuppy = new Puppy( "tommy" );
   }
}```
