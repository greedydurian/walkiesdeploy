FROM node:alpine
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
RUN npm run build
CMD ["npm", "run", "start"]