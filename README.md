# Make A Post/Dev-Api

### Installation
1. Establish connection to a PostgreSQL database by saving a connection string
for a `DATABASE_URL` environment variable (perhaps in a .env file).
2. The variable must follow the following format:
    - `DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`
3. Install the app dependencies, build the app and run migrations
###### macOS/Linux:
```sh
npm ci && npm run build && npx prisma migrate deploy
```

###### Windows:
```sh
npm ci; npm run build; npx prisma migrate deploy
```

### Start the server
```sh
npm run start
```
