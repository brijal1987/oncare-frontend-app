FROM node:14.11.0-alpine3.11

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

# add app
COPY . ./
RUN npm run build

CMD ["npm", "start"]