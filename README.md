# homepage
The Solid Network Bank Homepage

## Create React App

### Quick Overview
```sh
npx create-react-app my-app
cd my-app
npm start
```

### To create a new app.

```sh
 npx create-react-app homepage
```

### Starts the development server.

 ```sh   
npm start
```

### Bundles the app into static files for production.

```sh
npm run build
```

### Starts the test runner.

```sh
npm test
```

## Make React API Calls

```sh
npm install axios
```

### API and Microservices

### Virtual Credit Cards:

- **list-virtual-credit-cards-service**

```sh
LIST - 'GET /virtual-credit-cards' - LIST ALL CREDIT CARDS (ACTIVATED STATUS)
```
```sh
READ - 'GET /virtual-credit-cards/{id}' - READ A CREDIT CARD
```
- **manage-virtual-credit-cards-service**

```sh
CREATE - 'POST /virtual-credit-cards' - ADD VIRTUAL CREDIT CARD
```
```sh
UPDATE - 'PUT /virtual-credit-cards/{id}' - UPDATE A CREDIT CARD
```
```sh
DELETE - 'DELETE /virtual-credit-cards/{id}' - HIDE A CREDIT CARD (DISACTIVATED STATUS)
```