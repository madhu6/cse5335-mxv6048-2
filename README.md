# CSE 5335 - Project 2

# External Data source

The data set was taken from the following link:
https://inventory.data.gov/dataset/tsca-inventory

> The data is about Chemicals dispensed from industries. Only required (100) number of data has been selected and used.
> MongoLabs add-on from Heroku has been used as the NoSQL database to store the inventory data.
> Primary key is - 'CASREGNO' which is a 5 digit number.
> Attribute used as a secondary query is - 'CASRN'.
> Fade In Animation is enabled when the new data arrives (i.e)when the 21st record is displayed  

# Server framework 

Server framework used to implement this project was Express.js

Express is a minimal and flexible open source Node.js web application framework that provides a robust set of features for web and mobile applications. It is designed for building single-page, multi-page, and hybrid web applications and is also the de facto standard server framework for node.js.

# Client framework

Client framework used to implement this project was jQuery

jQuery is a fast, small, and feature-rich open source JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

# Implementation easy

I found implementation of MongoDB very easy as I already had a good knowledge of NoSQL databases. I also found coding the html part of the application very easy which was displaying the table and animations, etc.

# Implemenation difficult

I found the scripting for 0.5 second intervals where each request load a single record from a NOSQL database a little difficult as it took a lot of time for the code to work properly. 

# Concerns of using the technology professionally

    My biggest concern would be, Unless a programmer is very well knowledged with JavaScript and Node js, it will impossible to face the professional projects. Because this project at an academic level provided some challenges so at a professional level, the knowledge about the technolgies is expected at a higher level.
   As well as, In a technical context, Node js's core is entirely built on top of the premise of asynchronous I/O. Being a single-threaded platform focused on I/O bound applications on top of a language that does not guarantee purity and has no support for co-routines.
   JavaScript doesn't really have any good primitive for concurrency so it could lead to a non-compositional code which may to difficult to reason about.



