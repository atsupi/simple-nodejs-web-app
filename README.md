# simple-nodejs-web-app

## Build container image
```
docker build . -t web-app
```

## Start web app container
```
docker run -d -p 3000:3000 --name node-web-app web-app
```

## How to test web app
```
curl http://localhost:3000
```
