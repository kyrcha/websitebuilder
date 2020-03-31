# Websitebuilder demo

## Installation

Clone the repo:

```bash
git clone https://github.com/kyrcha/websitebuilder.git
```

Install the app dependencies:

```bash
npm install
```

Build the nginx Docker image:

```bash
cd nginx
docker build --tag webserver:latest .
```

## Running the app

First we are going to run the nginx webserver:

```bash
docker run --publish 8080:80 --detach --name webserver webserver:latest
```

and check with your browser that it works at http://localhost:8080/

run the app:

```bash
# development
$ npm run start
```

and check with your browser that is works at http://localhost:3000/

## Working the app

