# Oncare-Frontend-App
``` bash
Technology stack: docker , node.js , react , sequelize.js

Based on the technology stack you are required to implement a simple application that
manages users. The requirements for this exercises are as follows
1. Register User UI + functionality
2. Login User + functionality
3. User dashboard ( a data table that has a list of all users )
4. Edit User
5. Delete User
6. This docker container should be called doc_container_1
```

## Clone Repo
`git clone https://github.com/brijal1987/oncare-frontend-app.git`

## Load .env file
`cp .env-example .env`

# Building by docker compose

## Start Server - Building docker image
`npm run docker-up`

## Check API running on
`http://localhost:5000/`

## Stop Server
`npm run docker-stop`


