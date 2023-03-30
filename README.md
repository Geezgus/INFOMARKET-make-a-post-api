# Make A Post/Dev-Api
### Make A Post is a Work In Progress
Therefore, no front-end application has been developed to accompany it's presentation, yet

> Some theoretical designs have been though of, though

![image](https://user-images.githubusercontent.com/15215540/227666774-dcfdf15b-ba6e-41a3-8e2f-e8fe1573e018.png)
![image](https://user-images.githubusercontent.com/15215540/227666864-0011741e-c6f9-4198-9c51-7ee2240f8a1c.png)

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
