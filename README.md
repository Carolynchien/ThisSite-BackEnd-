![Logo](https://i.imgur.com/ozgtwMJ.jpg)
# .ThisSite

## Date: 08/07/2022

## Created By: Jacquelin Velasquez, Adama Doumbia, Carolyn Chien

### [Jacquelin's Github](https://github.com/v-jacx) | [Jacquelin's LinkedIn](https://www.linkedin.com/in/jacquelinvelasquez/) 
### [Adama's Github](https://github.com/apd5392/) | [Adama's LinkedIn](https://www.linkedin.com/in/adama-doumbia223/)
### [Carolyn's Github](https://github.com/Carolynchien) | [Carolyn's LinkedIn](https://www.linkedin.com/in/yin-ting-chien/)

---

# **_Description_**
.ThisSite is an app where a user can either book or post a location for events or vacations. Users will be able rate and comment on each location they have visited.

---
# **_Getting Started_**
[Trello](https://trello.com/b/P0VJlKtd/thissite)



[Heroku]()

#### **First time Setup**
* Node.js and NPM is required. [install here](https://nodejs.org/en/download/)
* Setup PSQL for the first time.
    * install postgres on your local machine and make sure it's running. [postgres docs](https://www.postgresql.org/download/)
  * open psql in your terminal:
    ```
    $ psql postgres
    psql (14.6 (Homebrew))
    Type "help" for help.

    postgres=#
    ``` 
  * create default user in postgres if this is your first time.
    ```
    postgres=# CREATE ROLE thissite_user WITH LOGIN PASSWORD 'bp5C9YcduKjUf8hvxM1K809FLpxKS1dI';
    ```
   * verify user is created in psql
        ```
        postgres=# \du
        ```  
    * exit psql and migrate the schema    

#### **Required Installs**

BackEnd:
* install npm dependencies for node server. TODO: install w/ --save-dev to save to package.json to reduce commands to get started.
    ```
    npm i
    npm i sequelize
    npm cors 
    npm express
    npm i body_parser
    npm i @ngneat/falso
    npm i cloudinary
    npm i nodemon
    npm i dotenv
    ```
* sequalize-cli must be installed globally to migrate the schema
    ```
    npm install -g sequelize-cli
    ```
* migrate the schema
    ```
    $ sequelize db:migrate

    Sequelize CLI [Node: 18.13.0, CLI: 6.6.0, ORM: 6.28.0]

    Loaded configuration file "config/config.js".
    Using environment "development".
    No migrations were executed, database schema was already up to date.

    ```
* start the server
```
$ npm run start
> thissite-backend-@1.0.0 start
> node server.js

Server Started On Port: 3001

```    
* test you can call the server
```
$ curl http://localhost:3001/
{"message":"Server Works"}%
```



FrontEnd:
* Make sure the back end server is running already.
* change to the client folder
```
$ cd client/
```
* first time setup. install global deps
```
$ npm i -g react-scripts
```
* install deps
```
$ npm install --save react-async-script-loader --legacy-peer-deps
$ npm i
$ npm i axios
$ npm i express
$ npm i react-router-dom
```
* Start the react-server
```
$ npm run start

Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.12.189:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```




---

## **Technology Used**
* React.js
* Sequelize.js
* JWT Auth
* Express
* Node


---

### **Images**


---

### **Diagrams**

#### **_ERD_**
![ERD](https://i.imgur.com/VVdnweT.png)

#### **_Component Hierarchy Diagram_**
![CHD](https://i.imgur.com/Ctiawha.png)

---

## **Future Updates**

* -
* -
* -

---

### **Credit**
