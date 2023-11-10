FROM cypress/factory

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

CMD ["npm", "run", "cy:cloud"]