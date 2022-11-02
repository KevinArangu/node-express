# NODE-EXPRESS API EXAMPLE
## _By Kevin Arangú_

This project is an example API with node.js & Express.js

## Enviroment & Dependencies

- [Node.js] - Server environment.
- [Express] - Fast node.js network app framework.
- [@hapi/boom] - HTTP-friendly error objects.
- [Cors] - Connect/Express middleware to enable CORS.
- [Dotenv] - Loads environment variables from a .env file.
- [Faker.js 5.5.2] - Generate massive amounts of fake data .
- [Joi] - Schema description language and data validator for JavaScript

## Installation

This project requires [Node.js] v12.22.12+ to run.

Clone this repo

```sh
git clone https://github.com/KevinArangu/node-express.git
```

Install the dependencies and devDependencies

```sh
cd node-express
npm i
```

## Start development server

```sh
npm run dev
```

## Start production server

Create .env file in root directory

_Example of .env file in root directory_
```sh
NODE_ENV=production
```

and
```sh
npm run start
```

## Test endpoints

- Download and install [Insomnia.rest].
- Download "insomnia" file from "docs" folder
- Open insomnia
- Import "insomnia" file to Insomnia App
- Test endpoints yourself

[node.js]: <http://nodejs.org>
[express]: <http://expressjs.com>
[@hapi/boom]: <https://www.npmjs.com/package/@hapi/boom>
[cors]: <https://www.npmjs.com/package/cors>
[dotenv]: <https://www.npmjs.com/package/dotenv>
[faker.js 5.5.2]: <https://www.npmjs.com/package/faker/v/5.5.2>
[joi]: <https://www.npmjs.com/package/joi>
[insomnia.rest]: <https://insomnia.rest/>
