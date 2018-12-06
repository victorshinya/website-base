[![](https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg)](https://bluemix.net)
[![Platform](https://img.shields.io/badge/platform-nodejs-lightgrey.svg?style=flat)](https://developer.ibm.com/node/)

# Suba seu site na IBM Cloud | Cloud Foudry Web Server com Node.js

Use esta aplicação para subir o seu site na IBM Cloud utilizando o serviço de SDK for Node.js disponível gratuitamente no plano Lite. Além disso, é possível linkar o seu domínio customizado (.com, .com.br, .io, etc) com o seu site para que o seu conteúdo esteja disponível através do seu domínio.

![](https://github.com/victorshinya/cf-web-server/blob/master/doc/source/images/architecture.jpg)

## Componentes e tecnologias usadas

* [SDK for Node.js](https://cloud.ibm.com/catalog/starters/sdk-for-nodejs): Desenvolva e suba soluções na nuvem utilizando Javascript server-side na Cloud Foundry.
* [Node.js](https://developer.ibm.com/node): plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis.

## Como subir na nuvem - IBM Cloud

Para subir na IBM Cloud, basta ter uma conta na IBM Cloud e clicar no botão abaixo. Caso ainda não conheça, acesse o blog no Medium da [IBM Developer Brasil](https://medium.com/ibmdeveloperbr/o-que-e-a-ibm-cloud-e-como-subir-a-sua-primeira-aplicacao-na-nuvem-41bfd260a2b7) para entender mais.

[![Deploy to IBM Cloud](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/victorshinya/cf-web-server)

## Como instalar e configurar localmente

Para instalar e executar a aplicação, é necessário ter o [Node.js](https://nodejs.org) instalado no seu computador e siga o passo a passo abaixo.

### 1. Baixe a aplicação

```sh
git clone https://github.com/victorshinya/cf-web-server.git
cd cf-web-server
```

### 2. Instale todas as dependências

```sh
npm install
```

### 3. Inicie o servidor utilizando o comando abaixo

```sh
npm start
```

### 4. Acesse a página no link: http://localhost:3000

## License

MIT License

Copyright (c) 2018 Victor Kazuyuki Shinya
