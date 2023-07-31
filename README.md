
***Example of .env file structure described in .env.dev file***

`Endpoints:` 
*NOTE: Endpoints that have * need to have Bearer token. Can get in by fetching Sign in endpoint password for all populated users - test.
1. Sign up (POST): http://localhost:3000/auth/sign-up
2. Sign in (POST): http://localhost:3000/auth/sign-in
3. Get users (GET)*: http://localhost:3000/user
4. Update user boss (PUT)*: http://localhost:3000/user

Launch sequence:
  1. fill .env file
  2. npm i 
  3. npm run migration:run
  4. npm start

Commands: 
  1. npm run migration:run - run migrations + populate database
  2. npm run migration:generate --name=`migration_name` - generate migration
  3. npm run migration:create --name=`migration_name` - create migration
  4. npm start - launch project 