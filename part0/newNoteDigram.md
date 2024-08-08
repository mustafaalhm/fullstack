sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
	
	
    activate server
    server-->>browser: The server responds with HTTP status code 201
    deactivate server

    

    Note right of browser: The browser did not load page it update the new one added only without refresh

 

