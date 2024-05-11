FROM node:20.11.0-alpine
WORKDIR /server
COPY package*.json .
RUN npm i
CMD ["npm", "start"]