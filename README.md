# Make A Post/Dev-Api
### Make A Post is a Work In Progress
Therefore, only a very basic front-end application has been developed to accompany it's presentation: [Click here](https://github.com/Geezgus/INFOMARKET-make-a-post-website)

### Installation
1. Establish connection to a PostgreSQL database by saving a connection string
for a `DATABASE_URL` environment variable (perhaps in a .env file).
2. The variable must follow the following format:
    - `DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`
3. Install the app dependencies, build the app and run migrations
###### macOS/Linux:
```sh
npm ci && npm run build && npx prisma migrate dev
```

###### Windows:
```sh
npm ci; npm run build; npx prisma migrate dev
```

### Start the server
```sh
npm run start
```
