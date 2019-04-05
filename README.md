[![](https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg)](https://cloud.ibm.com)
[![Platform](https://img.shields.io/badge/platform-nodejs-lightgrey.svg?style=flat)](https://developer.ibm.com/?s=nodejs/)

# Deploy your website

Use this application to deploy your webiste on cloud. Besides that, it's possible to connect your `custom domain` (.com, .io, .dev, etc) into your website in order to available your content through your domain.

![](https://github.com/victorshinya/website-base/blob/master/doc/source/images/architecture.jpg)

## Components and technologies

* [Node.js](https://developer.ibm.com/?s=nodejs): Platform built on the Google Chrome JavaScript engine to easily build fast and scalable network applications.

## Deploy to the cloud

You can click the button below to deploy the server to the cloud. If you want to learn more, you can read the [blog](https://medium.com/ibmdeveloperbr/o-que-e-a-ibm-cloud-e-como-subir-a-sua-primeira-aplicacao-na-nuvem-41bfd260a2b7) about IBM Cloud.

[![Deploy to IBM Cloud](https://cloud.ibm.com/devops/setup/deploy/button.png)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/victorshinya/website-base)

## Run locally

To install and run the application, you need to install [Node.js](https://nodejs.org) and then you can follow the steps below:

### 1. Download the app

```sh
git clone https://github.com/victorshinya/website-base.git
cd website-base
```

### 2. Install all dependencies

```sh
npm install
```

### 3. Paste your code (HTML, CSS, and JS files) into `public` folder

### 4. Start the server running the command

```sh
npm start
```

### 5. Access the page on your browser: http://localhost:3000

## License

MIT License

Copyright (c) 2018 Victor Kazuyuki Shinya
