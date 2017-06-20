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
