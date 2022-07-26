<br>cd docker_db
<br>docker build -t db .
<br>docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=users -v users:/var/lib/postgresql/data --name db db
<br>npm i --save @nestjs/typeorm typeorm postgres
<br>npm run start
<br>만약 id 가 1부터가 아니라면 docker의 volume 들을 삭제하면 된다.

<br>post msg 예제
<br>header : Content-Type : application/json; charset=utf-8 (기존 content-type 은 체크해제) 
<br>body : raw
<br>{
<br>    "firstName" : "aa",
<br>    "lastName" : "now",
<br>    "isActive" : true
<br>}
