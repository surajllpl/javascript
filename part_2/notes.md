
# ------ JavaScript -------------

# How JavaScrtipt Work?
    - Compile code
        - Lexing : small part of code
        - Parsing : AST (executable code)
        - Code Generation 
     1. Early error checking
     2. Determine approprite Scope of varible

    # javascript is Synchronous programming language : line by line execution of code. first line execution copleted then second line execution start.
    # Asynchronous provide browser
    # Single Threded 

    - Execute code
        - Global Execution Context(GEC) : added in stack 
        - creation phase (Global memory)
            - Global Object
            - variable initilization
        - create ececution phase (CEP)
            - code execution
            - function call
            - function execution context (FEC)
                - function code execution
# Closures :
    - functon can return function
    - returned function can access outer function scope
    - returned function can modify outer function scope
    - returned function can be called multiple times
    - returned function can be called with different arguments
        