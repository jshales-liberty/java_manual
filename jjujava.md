## Arrays
- a container for data with an index.  Arrays are created with a fixed size and can hold a range of types, from primitives to objects.  The value of a given cell in the array can be accessed via the index.  There are classes that are similar to an array, such as ArrayList, that provide methods for things like sorting as well as being able to change size as required (to add more elements, for example).
## the uses of . [] {} ;
- definition
## access modifiers (public, private, protected)
- Public - can be called by code outside the class.
- Private - can only be called by code within the class - for example, an object has access to its own private methods.
- Protected - can only be called within the class or its descendants - for example, in a Pet < Cat inheritance tree, if there were also Owners that did not inherit, a Protected method in Pet could be called by objects of type Pet or Cat but not by objects of type Owner.
## Exceptions
- Thrown during runtime when an unexpected condition occurs, they are either part of the class definition or can be added by the developer.  Ideally they are not used to control flow but may have to be relied on in specific cases, such as when deserializing objects from a file to determine when the end of the file has been reached.  In the case when something throws more than one type of error, ideally each would be handled separately, or they would at least be grouped logically and handled that way rather than just handling the basic exception.  Anything that is defined as being able to throw an exception needs to be wrapped in a try / catch block, where the try portion holds the code that could throw an exception and the catch portion is where the exception would be handled should it be thrown.
## Generics
- definition
## abstract classes, abstract methods
- definition
## Enums
- An enum allows you to define a set of related constants, such as days of the week, or specializations for physicians, so that you can limit the values used in your program to that specific set.
## anonymous inner classes, lambdas
- definition
## important classes of the standard library
- definition
