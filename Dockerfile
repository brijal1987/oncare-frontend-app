FROM node:14.11.0-alpine3.11

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# add app
COPY . ./

CMD ["npm", "run-script", "build"]

EXPOSE 5000

# start app
CMD ["npm", "start"]