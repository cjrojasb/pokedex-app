<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

### Running in dev
1. Clone this repository

2. Execute
```bash
npm install
```
3. Install Nest CLI
```bash
npm i -g @nestjs/cli
```
4. Up the database
```bash
docker-compose up -d
```
5. Create __.env__ file with __.env.template__ content

6. Running app server in dev mode
````
npm run start:dev
````


7. Load initial data
```bash
http://localhost:8000/api/v2/seed
```


## Dependencies
* NestJS
* MongoDB