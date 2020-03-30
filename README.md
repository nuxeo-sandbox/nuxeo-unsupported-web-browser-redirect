## Description
This plugin contains a custom web page which is displayed when trying to open the Nuxeo Platform Web UI with MS Internet Explorer

## Requirements
Building requires the following software:
- git
- maven
- node & npm

## How to build
```
git clone https://github.com/nuxeo-sandbox/nuxeo-unsupported-web-browser-redirect
cd nuxeo-unsupported-web-browser-redirect
mvn clean install
```

## Deploying on a nuxeo server
* Install the marketplace package from the admin center or using nuxeoctl

## Development

```
git clone https://github.com/nuxeo-sandbox/nuxeo-unsupported-web-browser-redirect
cd nuxeo-unsupported-web-browser-redirect/nuxeo-unsupported-web-browser-redirect-web
```

### Install dependencies:

```
npm install
```

If you are behind an http proxy, set the HTTPS_PROXY variable in the .env file. Below is an example

```
HTTPS_PROXY=http://proxydomain:8080
```

### Run the app locally

```
npm run serve
```
Open a browser window and go to http://localhost:8080/dist/

### Build the app locally

```
npm run build
```

