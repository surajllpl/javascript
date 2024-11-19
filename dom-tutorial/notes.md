# Webpage using HTML & CSS
# Async vs defer
    1.  - Declared script in head tag
        - Browser can read line by line code parsing
        - when it rached a script tag, it will stop reading the code and load/execute the script
            - in script we have used body like div,header,button content then it will be gives error
            - because the script is loaded before the body content is loaded

    2.  - we declared Script last line inside body
        - it will be executed after the body content is loaded
        - it will not give any error
        - it process take times execute one by one

    3.  - Using Async :
        - Browser are parssing html file code 
        - when it reached a script tag, it will loading script and parssing html symentiously.   
        - it will not stop the parsing of html code
        - script loading is completed then broswer can stop parssing
            - possiblity may be not complete html code parrsing or half parssing
            - it will block the parsing of the HTML document

    4.  - Using Defer :
        - Browser are parssing html file code 
        - when it reached a script tag, it will loading script and parssing html symentiously.   
        - it will not stop the parsing of html code

        
        - script loading is completed then broswer can continuesly parssing all html code
        - it will not block the parsing of the HTML document


        
# this is best way to linking javascript file into the html file


