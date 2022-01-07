<h1 align=center>Messages manager</h1>
<h3 align=center>
<a href="https://whimsical.com/WgFJD3Fiavvhq4t6oJ6oJD">Flowchart</a>
</h3>
<h4>Libraries:</h4>
For Cryptography: <a href="https://www.npmjs.com/package/bcrypt">Bcrypt</a>
<br>
For Database ORM: <a href="https://www.npmjs.com/package/typeorm">Typeorm</a>
,
<a href="https://www.npmjs.com/package/@nestjs/typeorm">Typeorm Module<a/>
,
<a href="https://www.npmjs.com/package/pg">PG</a>
<br>
For Authenticate and Strategy: <a href="https://www.npmjs.com/package/passport">Passport</a>
,
<a href="https://www.npmjs.com/package/passport">Passport Module</a>
,
<a href="https://www.npmjs.com/package/passport-local">Passport Local</a>
,
<a href="https://www.npmjs.com/package/passport-jwt">Passport Jwt</a>
<br>
For Tests: <a href="https://www.npmjs.com/package/jest">Jest</a>
and
<a href="https://www.npmjs.com/package/supertest">Supertest</a>
<br><br><br><br>
<h2 align=center>Start</h2>
<h4 align=center>First install dependecies</h4>
<p>If you use NPM

```shell
npm install
```
<p>If you use Yarn

```shell
yarn
```
<br>
<h4>Run docker-compose</h4>

```shell
docker-compose up
```
<br>
<h4>Start the project from the script</h4>
NPM

```shell
npm start
```
Yarn
```shell
yarn start
```

<h2 align=center>Test yourself</h2>
<h4 align=center>Create a new user</h4>
Send a request to route /user containing an application/json {"name","email","password"} with the POST method like this:

```shell
curl -X POST http://localhost:3000/user -d '{"name":"example","email": "example@gmail.com", "password": "1234"}' -H "Content-Type: application/json"
```
<br><br>
<h4 align=center>Generate new token</h4>
Send a request to route /login containing an application/json {"email","password"} with the POST method like this:

```shell
curl -X POST http://localhost:3000/login -d '{"email": "example@gmail.com", "password": "1234"}' -H "Content-Type: application/json"
```
<br><br>
<h4 align=center>Get Emails</h4>
Send a request to route /email containing token Bearer with GET method:

```shell
curl -X GET http://localhost:3000/email -H Authorization: Bearer [token]"
```
<br><br>
<h4 align=center>Send email</h4>
Send a request to route /email/send containing an application/json {"to","content"}, Bearer token with POST method:

```shell
curl -X POST http://localhost:3000/email/send -d '{"to":"example@gmail.com","content":"hello world"}' -H "Cobtebt-type: application/json" -H "Authorization: Bearer [token]"
```

<br><br><br>
<h2 align=center>If you want adapt project for you</h2>
Edit <b>ormconfig.json</b> file for you

<a href="https://typeorm.io/#/using-ormconfig">More information about ormconfig.json click here</a>

Edit Typeorm Module in <b>app.module.ts</b> file for configurations equal your ormconfig.json file

<a href="https://docs.nestjs.com/recipes/sql-typeorm">More information about TypeormModule click here</a>

