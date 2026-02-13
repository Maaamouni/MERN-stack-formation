# Project Overview :

In this project, I tried to build an entire application that deploy training programme to its clients.

I used MERN Stack (MongoDB - Express - React - Node.js)

And also the best practices of DevSecOps to deploy the application in a asecure environement.

## Backend Archi

```
- Backend
|- config
|-- db.js
|- controllers
|- models
|- routes
|- middlewares
|- utils
|-- createToken.js
|- index.js
``` 

## Devsecops 
Dev → GitHub → Jenkins CI → Tests + SAST → Build Docker → Scan image → Push Registry → Deploy

