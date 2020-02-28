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

### Testing
```sh
# install jest
npm install --save-dev jest

# install eslint
npm install --save-dev eslint
mpx eslint --init
```
