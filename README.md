# json-check-app

The aim of this project is to create a simple app, that given a json file will output a sanitised version without duplicate objects given that the file used has any.

The app checks all the objects inside of the scenes array for the given JSON file for duplicates, the function removeDuplicates takes care of things here by using the object's key as a search parameter. *A deeper comparison could be made upon business requirements*.

Finally, checkSchemaHandler receives the request and calls another function to check for JSON validity *(to be implemented)*, checks for errors and passes data back to checkSchemHandler, where a sanitised version of the JSON file will be written to a desired location

#### Tools

VSCode

### Dependencies

Node.js

Typescript

Express.js

ajv

Jest

### Running the project

Important, *Node version used* **19** . Check node version with **nvm** if installed

Open a new terminal window at the root of the project and use the following commands

```bash
# check available node versions installed
nvm list
# select a different node version (19)
nvm use node-version
```

Install dependencies

```bash
# npm users
npm i
# if you prefer to use yarn
yarn install
```

Once all packages have been installed, the app can be used

There are three main scripts

```bash
# build a new version if there are any changes
npm run build
# yarn
yarn build

# run the app on port 3000 from dev environment
npm run start
# yarn
yarn start

# run the app from build environment
npm run start_build
# yarn
yarn start_build

# run available tests
npm run test
# yarn
yarn test
```

The project also includes a simple Thunderclient collection with a post request that can be imported and used.

The app has been deployed to heroku:

https://warm-harbor-94763.herokuapp.com/checkSchema

Testing can also be done with Thunderclient or Postman.

```bash
# request type
POST
# headers
Content-Type | application/json
# body
Type: JSON, add JSON
```

### Structure of the app

The app is composed by the following folder structure

**tests**: where all available tests should be placed. Provides a separate location to maintain and scale all future tests.

**helpers**: where all external functions will remain in an enclosed location. Having different functions in their own files will provide key to the scalability of the project by creating a less cluttered environment.

**mock**: here I would keep any data needed for testing or resulting.

**routes**: a folder destined to keep all of our API calls.

**schema**: could maintain a variety of schemas, easier to locate.

**types**: all typescript interfaces would be sotred here and then imported where necessary.

### Future changes

Implement a more in-depth testing (there plenty of factors not taken into account due to time constrains)

Uncomment the JSON validator function. This function will handle any possible errors regarding the validity of the JSON file

Create a small front-end to have a more user friendly approach

### Remarks

- Invested an all round of 3hrs. Main app functionality was achieved at an early stage. Implementing all the interfaces, creating the schema and tests is a more delicate process and I have gone a little over to implement a basic testing suit with typescript.

- Use environment variables to prevent plubilshing sensitive information.

- A linter would definitely be a must, code needs to be clean and it is of importance to blend into a specific style and guidelines.

Repo link: https://github.com/dr3nan/json-check-app
