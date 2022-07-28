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

<br> 현재까지 test 기능 users 와 stat 단방향 1:1 연결 users 가 stat 일방적 참조
<br> users 에서 stat이  cascade: true 인데 이것은 부모 테이블의 값이 수정이나 삭제가 발생하면
<br> 해당 값을 참조하고 있는 자식 테이블의 역시 종속적으로 수정 및 삭제가 일어나도록 하는 옵션이다.
<br> 유저가 생성될때 stat 도 디폴트로 자동 생성, stat 조회는 get /users/:id/stat 으로
<br> findStat() 메소드가 참조, findOne() 메소드는 쿼리문을 간편화해줌 쿼리 빌더로 조회해도 괜찮다.
<br> 현재 findOne({ where: {id:id}, relations: ["stat"] }) 로 되어있는데
<br> 이렇게 안 찾고 아까 cascade 옵션 설정하듯이 eager: true 로 해주면 find 에서 모두 조회되긴하는데 그러긴 싫어서 이렇게 해봤다. 어떤게 좋은건지는 몰?루
<br> 여기서 select: [] 로 원하는 속성만 추출 가능, where 은 조건?(잘 모르겠음, 맞을수도?)라 생각하고 사용함, relation 은 원하는 외부키를 넣어줘야한다.
<br> idBlock() 1:M relation 은 users 가 생성될때 Block 도 하나씩 생성해서 매칭했다. 그래서 userid 로 서칭하고 blockid의 user를 서칭해서 등록한다.
<br> 하지만 이렇게 하면 원하는 결과를 못 얻어서 N:M 관계로 설정해야할 것 같다. 지금하는 것들은 단순히 relation 연습이기때문에 에러케이스나 무결성과 같은 것들은 생각 안 했다.
