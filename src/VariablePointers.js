// primitive types = variable stores one bucket
// Objects and Arrays are two buckets, pointers are the first bucket and if changed will only change the pointer, not the variable. (Pointer == first bucket, Variable == second bucket)

// Dereferencing Array = create two new arrays and reference the original in the copied array through a loop or array method

// Dereferncing Obj == 

// Spread syntax for array == using spread operator for the copied array where you would put the contents of the first array. (the (...orginalArray) will output the original contents for the arraycopy)

// Spread Syntax for object == Object and arrays act in the same way with the spread sytax/operator

// Use spread syntax instead of the derefencing method where possible (Pretty much all the time)

// Deconstructing Assignment/Operator/Syntax:
// const { readFileSync, writeFileSync} means that you use (readFileSync or writeFileSync) alone without the fs.readFileSync or fs.writeFileSync because you have taken a part of the object out, just for readability

// api's are just to convey data for the most part. Mainly to use "get" to retrive data
