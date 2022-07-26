<br>cd docker_db
<br>docker build -t db .
<br>docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=users -v users:/var/lib/postgresql/data --name db db
<br>npm i --save @nestjs/typeorm typeorm postgres
<br>npm run start
