##inheritance

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

##super

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

##overloading

- Method Overloading is a feature that allows a class to have two or more methods having same name, if their argument lists are different. The argument lists could differ in:
  - Number of parameters
  - Data type of parameters
  - Sequence of data type parameters

```
public class Calculation {
   void sum(int a,int b){System.out.println(a+b);}
   void sum(int a,int b,int c){System.out.println(a+b+c);}
```

##overriding

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

##packages

- A package is a namespace that organizes a set of related classes and interfaces. Conceptually you can think of packages as being similar to different folders on your computer.  
- For example if a package name is college.staff.cse, then there are three directories, college, staff and cse such that cse is present in staff and staff is present college.
- It is a good practice to use names of packages with lower case letters to avoid any conflicts with the names of classes and interfaces.

```
import java.util.*;
// util is a subpackage created inside java package
```

##interfaces

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

##casting

- Taking an Object of one particular type and turning it into another Object type.
The cast can be to its own class type or to one of its subclass or superclass types or interfaces. There are compile-time rules and runtime rules for casting in java.

```
Object obj; // may be an integer
if (obj instanceof Integer) {
	Integer objAsInt = (Integer) obj;
	// do something with 'objAsInt'
}
```

##instanceof operator

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
