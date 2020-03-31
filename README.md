# Websitebuilder demo

Laconically: Through a form that accepts data and images served by a web app, produce dynamically static websites through 11ty and served via NGINX running in docker on different subdomains.

Checkout this [blog post](https://medium.com/@kyrcha/a-simple-diy-website-builder-2c38855b2d90?sk=7398337ad55bbcd609d9c97babafe291) on Medium for more details.

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

First run an NGINX webserver:

```bash
docker run --name webserver -d -p 8080:80 nginx
```

and check with your browser that it works at http://localhost:8080/

run the app:

```bash
$ npm run start
```

and check with your browser that is works at http://localhost:3000/

## Working the app

1. Submit the form.
2. Alter your hosts file to check it locally. More details on how to do that in the [post](https://medium.com/@kyrcha/a-simple-diy-website-builder-2c38855b2d90?sk=7398337ad55bbcd609d9c97babafe291).
3. Check it locally by going with your browser to: http://<entered-slug>.example.com
  
Be careful, there is no validation so enter a standard slug.



