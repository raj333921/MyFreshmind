# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command


#Delete Tables of postgresql
4. select 'drop table if exists "' || tablename || '" cascade;' from pg_tables where schemaname = 'public';
