# Description
This plugin contains a custom web page which is displayed when trying to open the Nuxeo Platform Web UI with MS Internet Explorer

# Requirements
Building requires the following software:
- git
- maven
- node & npm

# How to build
```
git clone https://github.com/nuxeo-sandbox/nuxeo-unsupported-web-browser-redirect
cd nuxeo-unsupported-web-browser-redirect
mvn clean install
```

# Deploying on a nuxeo server
* Install the marketplace package from the admin center or using nuxeoctl

# Development

```
git clone https://github.com/nuxeo-sandbox/nuxeo-unsupported-web-browser-redirect
cd nuxeo-unsupported-web-browser-redirect/nuxeo-unsupported-web-browser-redirect-web
```

## Install dependencies:

```
npm install
```

If you are behind an http proxy, set the HTTPS_PROXY variable in the .env file. Below is an example

```
HTTPS_PROXY=http://proxydomain:8080
```

## Run the app locally

```
npm run serve
```
Open a browser window and go to http://localhost:8080/dist/

## Build the app locally

```
npm run build
```

# Support

**These features are not part of the Nuxeo Production platform.**

These solutions are provided for inspiration and we encourage customers to use them as code samples and learning resources.

This is a moving project (no API maintenance, no deprecation process, etc.) If any of these solutions are found to be useful for the Nuxeo Platform in general, they will be integrated directly into platform, not maintained here.

# Nuxeo Marketplace
This plugin is published on the [marketplace](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-unsupported-web-browser-redirect)

# License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

# About Nuxeo

Nuxeo Platform is an open source Content Services platform, written in Java. Data can be stored in both SQL & NoSQL databases.

The development of the Nuxeo Platform is mostly done by Nuxeo employees with an open development model.

The source code, documentation, roadmap, issue tracker, testing, benchmarks are all public.

Typically, Nuxeo users build different types of information management solutions for [document management](https://www.nuxeo.com/solutions/document-management/), [case management](https://www.nuxeo.com/solutions/case-management/), and [digital asset management](https://www.nuxeo.com/solutions/dam-digital-asset-management/), use cases. It uses schema-flexible metadata & content models that allows content to be repurposed to fulfill future use cases.

More information is available at [www.nuxeo.com](https://www.nuxeo.com).


