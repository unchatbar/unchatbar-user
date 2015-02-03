# Unchatbar - User
[![Build Status](https://travis-ci.org/unchatbar/unchatbar-user.svg?branch=master)](https://travis-ci.org/unchatbar/unchatbar-user)

Peer to peer chat application using WebRTC technologies

## Requirements
* Node.js 0.10+
* Chrome 26+ or Firefox 23+

## Installation
* Install Bower: `npm install -g bower`
* Install Gunt CLI: `npm install -g grunt-cli`
* Clone repository `git clone git://github.com/unchatbar/unchatbar.git`
* Run `npm install` to install required Node.js modules
* Run `bower install` to install required Bower components

## Dependencies
* angular
* json3
* es5-shim
* bootstrap-css-only
* ngstorage
* lodash

## Get Started
```javascript
angular.module('app', ['unchatbar-user'])
```

## Configure
* store Profile in local Storage
```javascript
ProfileProvider.setLocalStorage([TRUE/FALSE]);
```
## Usage
* get Profil Object
```js
Profile.get();
```

* set Profil Object
```js
Profile.get([ProfileObject]);
```


