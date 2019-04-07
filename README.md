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

## Run your website

You need to install locally, paste/move your websit into `public` folder and then run the deploy script.

### 1. Download the app

```sh
git clone https://github.com/victorshinya/website-base.git
cd website-base
```

### 2. Paste your code (HTML, CSS, and JS files) into `public` folder

### 3. Run the `deploy` script to deploy your website (if you're using Linux or Mac, use `sudo` in the beginning)

```sh
chmod -R 0755 ./deploy.sh && ./deploy.sh
```

### BONUS: If you want to test locally before, you can run the commands below. After that, access the link on http://localhost:3000

```sh
npm install
npm start
```

## License

MIT License

Copyright (c) 2018 Victor Kazuyuki Shinya
