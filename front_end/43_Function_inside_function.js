// Function inside function

const app = () =>{
    const myfunc = () =>{
        console.log("Hello from myfunc");
    }  

    const addno = (no1,no2)=>{
        return no1+no2;
    } 
    console.log("Inside app");
    myfunc();
    console.log(addno(10,20));
   
}
app();