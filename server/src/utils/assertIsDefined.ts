export function assertIsDefined<T>(val: T):asserts val is NonNullable<T>{ // generic types, the T allows us to pass any type into this function, 
    // why dont we use :any ? because we want to get the non-nullable type back 

    if(!val){
        throw Error("Expected 'val' to be defined, but recieved " + val);
    }

    

}