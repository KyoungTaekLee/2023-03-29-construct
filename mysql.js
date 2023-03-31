const mysql = require('mysql');

// 클래스 정의
class Pokemon {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  // getter 메서드는 문장을 만드는 기능을 한다.
  get info() {
    return `이름: ${this._name}, 타입: ${this._type}, 레벨: ${this._level}`;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      console.log("이름은 문자열로 입력해주세요.");
    }
  }

  set type(value) {
    if (typeof value === 'string') {
      this._type = value;
    } else {
      console.log("타입은 문자열로 입력해주세요.");
    }
  }

  set level(value) {
    if (typeof value === 'number') {
      this._level = value;
    } else {
      console.log("레벨은 숫자로 입력해주세요.");
    }
  }

}
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'kids0302',
  database: 'taek',
  port: 3306, //Mysql 포트
  connectionLimit: 5, //동시에 db에 접속가능한 클라이언트 수
  waitForConnections: true //클라이언트가 연결을 요청할 때 대기 여부
};

function convertPokemonToJSON(pokemon) {
  return JSON.stringify({
    name: pokemon._name,
    type: pokemon._type,
    level: pokemon._level
  })
}

function savePokemonJSONToDatabase(pokemonJSON) {
  //데이터 베이스 연결 생성
  const connection = mysql.createConnection(dbConfig);
  //연결시작
  connection.connect((err) => {
    if (err) {
      console.error('연결실패', err);
      return;
    }
    console.log('3306 포트로 연결 성공');

    //json 데이터 파싱하여 결과적으로 다시 객체가 된다.
    const pokemonData = JSON.parse(pokemonJSON);

    //포켓몬 정보 삽입 쿼리
    const query = 'insert into pokemon (name, type, level) values (?,?,?)';
    // 이때 ?는 값이 아니라 값의 위치를 의미한다. 매개변수와 같은 의미이다.

    const values = [pokemonData.name, pokemonData.type, pokemonData.level];

    //쿼리 실행
    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('쿼리실행 실패', err);
        return;
      }
      console.log('결과물 확인', results);

      connection.end();
    })
  })
}
const pikachu = new Pokemon('피카츄', '전기', 10);
const pikachuJSON = convertPokemonToJSON(pikachu);
savePokemonJSONToDatabase(pikachuJSON);
