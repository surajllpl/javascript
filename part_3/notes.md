
# synchronous programming vs asynchronous programming
01  synchronous programming
    - javascript is synchronous programming single threaded
    - asynchronous programming multi threaded
    - asynchronous programming is faster than synchronous programming

   # setTimeout
    - setTimeout provided and handle by web browser.
    - setTimeout is used to execute a function after a specified time period

   # example 
    - Fetching backend data having some time so it can be blocking code.
    - so we used asynchronous in javascript.

02 setInterval
    - setInterval is used to execute a function at specified time interval.
    - it is used to create a loop in javascript.
    - it handle by web API provided by Browser.

   # Example
   - changing background color of body and stop changing button can stop it.
   - take a random color code and set interval for changing the background color. 

03 callback -
    - callback is used to pass a function as an argument to another function. 
    - It is used to execute a function after a certain task is completed. 
    - It is used to handle asynchronous operations.

  # callbackHell - 
- function call function and dom pyramind
  
# 04 Promise -
 it is feature of browser
 it is used to handle asynchronous operation
 it is used to handle error and success both
 it is used to handle promise chain
 function can return promise.
 promise resolve and chaining.


# function return promise
# promise resolve and promise chaining
- then() - then method always return Promise
- if not return it then it return "undefined"