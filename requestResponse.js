/* 
    How do we serve the files and how do we request them
    Every time you browse the website and do something
    eg. ask for data Client -> (req) -> Server

    Protocol come in place: HTTP 
    communication is done in intermediately agreed upon rules (protocol, follow rules understood by both)

    Socket (channel in which information can be sent)
    Information can be sent in different protocols to structure data & info being sent
        opened in the middle of two computers, data is structured in different protocols
        HTTP, FTP etc. -> Language has to be chosen
        depending on what is communicated, data is structured differently
        
        Structure of the data:
            FTP -> File transfer ptotocol
            HTTP -> WebSites
        
        Way of being saved:
            TCP -> splits the data into small sections (packets) and sends them through socket 

        Node.js gives an information to communicate and send response 

        Ports are there to expose Node.js apps to the requests
            rooting of requests to node.js
*/

