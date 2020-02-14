## 🐢 About

TerpScheduler is a web application built with 

* React.js
* Redux
* Gatsby
* GraphQL
* And other stuff

that combines the functionality of 

* Testudo's list of courses
* Review aggregators like PlanetTerp/RateMyProfessor
* and schedule makers like courseoff


## ⚡ Set up

1.  **Node.js and npm**

    [They be bundled unless you mess up really bad.](https://nodejs.org/en/)

1.  **Gatsby**

    Basically Gatsby takes care of making React react and making GraphQL graph.

    ```
    npm install -g gatsby-cli
    ```
    
1.  **Get all the stuff**
    
    ```
    git clone https://gitlab.com/taxidermied_potato/scheduler.git
    ```
    
    In the repo
    ```
    npm install
    ```

1.  **Develop**

    At project directory in terminal 
    ```
    npm run start
    ``` 
    or
    ```
    gatsby develop
    ``` 

    Site will be up at `http://localhost:8000`


## 🎓 tl;dr

Okay, so the front end is handled with React.js, which is a JavaScript library which bundles up JS and HTML into the object oriented abomination known as a .jsx file. Data are stored by Redux. Standard Bootstrap wrapper is used for styling.

I'm pulling all of the current info from [umd.io's](https://umd.io/) RESTful API, but data from PlanetTerp, RateMyProfessor, etc will be needed in the future. Back end will be started through GraphQL which I have no idea how to work yet.