# type assertion / type narrowing

# 2.1 type assertion: if the developer can declare better type than typescript the it is called type assertion

- developer set up the type using (... as typeName)

# - 2.2 interface: developer an declare type in object using type alias or interface

- whenever using type in primitive we can use type alias only
- in object developer can use both
- type extend
- use inter section to extend type, use type alias
- use extends to extend interface
- interface can be made by extending type
- interface can be used with object, array, function

- note(recommended): use type alias to declare array and function
- note(recommended): use interface / type alias to declare object

# 2.3 when we can generalize the type and use dynamically and reusable is called generic

- generic with type alias
- can use type dynamically by T
- generic tuple

# 2.4 using generic as interface

- generic with interface

# 2.5 generic with function

-

# 2.6 constraints: to force

- use constraints by extending data

# 2.7 generic constraints with key of operator:

-

# 2.8 custom promise, declaring types in async function,

# 2.9 conditional type

# 2.10 mapped type

- maps over a selected type using [key in keyOf TypeName]: string
- look up type

# 2.11 utility types
- pick
- omit
- required
- partial
- readonly
- record