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

## Running the app

First we are going to run the nginx webserver:

```bash
docker run --name webserver -d -p 8080:80 nginx
```

and check with your browser that it works at http://localhost:8080/

run the app:

```bash
# development
$ npm run start
```

and check with your browser that is works at http://localhost:3000/

## Working the app

Checkout this [blog post](https://medium.com/@kyrcha/a-simple-diy-website-builder-2c38855b2d90?sk=7398337ad55bbcd609d9c97babafe291) on Medium.
