cd docker_db
docker build -t db .
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=users -v users:/var/lib/postgresql/data --name db db
npm i --save @nestjs/typeorm typeorm postgres
npm run start
