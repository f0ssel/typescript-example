FROM node:10-alpine
WORKDIR /app
RUN npm install -g -s --no-progress yarn
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build
CMD yarn start
