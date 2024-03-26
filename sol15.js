try {
   
    const undefinedObject = undefined;
    console.log(undefinedObject.property); 
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Caught TypeError:", error.message);
      
        console.log("The object is undefined.");
    } else {
       
        console.log("An unexpected error occurred:", error.message);
    }
}
