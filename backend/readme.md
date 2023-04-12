# Installation #
## Requirements ##
- Nodejs version >= 18
- [Pocketbase](https://pocketbase.io/docs/)
## Install ##
- Setup `.env` file
```
cp .env .env.example
-----------------------
DB_CONNECTION=<pocketbase url>
DB_USERNAME=<username>
DB_PASSWORD=<password>
END_POINT=
```
- Run command by order
```
node backend/migration/migrations.js
node backend/seeder/userSeeder.js
node backend/seeder/categorySeeder.js
node backend/seeder/productSeeder.js
backend/seeder/orderSeeder.js  
```