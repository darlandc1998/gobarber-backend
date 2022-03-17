# Gobarber

Project backend of course Rocketseat

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement. Also, you must have PostgreSQL, Mongodb and Redis databases.

## Steps to get started

1 - Create an ```.env ```  file based on ```.env.example``` and fill in its variables.

2 - Create a ```ormconfig.json``` file based on ```ormconfig.example.json``` and fill in its variables.

## Install all dependencies

Use the package manager [yarn](https://yarnpkg.com/) to install dependencies.

```bash
yarn add
```

## Run mode development

```bash
yarn dev:server
```

## Run mode production

Production mode requires that the path and extensions present in the ```ormconfig.json``` file be changed from ```./src``` to ```./dist``` and ```.ts``` to ```.js```, respectively.

```bash
yarn build
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
