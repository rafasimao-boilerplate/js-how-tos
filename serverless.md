# How To Create a Serverless app for AWS

## Setup

### Installing Serverless
```sh
# to install in your system
npm install -g serverless

# to install locally
npm install --save-dev serverless

# to upgrade
npm update -g serverless
```

### Creating project
```sh
# To generate an empty basic aws nodejs serverless project
serverless create --template aws-nodejs --path <project-path>

# To crete a package.json
npm init -y
```

### Serverless-Offline (to run on dev environment)

Install serverless-offline to be able to run serverless locally
```sh
npm install serverless-offline --save-dev
```

Then add an entry to the `serverless.yml` file:
```yml
plugins:
  - serverless-offline
```

Run the server locally by running:
```sh
serverless offline
```

### Testing
```sh
# install jest
npm install --save-dev jest

# install eslint
npm install --save-dev eslint
mpx eslint --init
```

### Creating a Dockerfile
Add on package.json:
```json
"scripts": {
   "test": "eslint . && NODE_ENV=test jest",
   "lint": "eslint .",
   "dev": "NODE_ENV=development serverless offline start --host 0.0.0.0 --port 3000",
   "serverless": "serverless"
 },
```

Create a Dockerfile
```sh
FROM node:12.16 #depends on the version you installed

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN mv ./post-up.sh /usr/bin/setup

CMD setup
```

with a `post-up.sh` script:
```sh
#!/bin/bash

npm install
npm run dev
```

in the docker-compose:
```yml
serverless.local:
    container_name: serverless
    build:
      context: ./serverless
    ports:
      - "3000:3000"
    env_file:
      - ./config/serverless.env
    volumes:
      - ./apps/serverless:/app
```
