FROM node:22.14-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]