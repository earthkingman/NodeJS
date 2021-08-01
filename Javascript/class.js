class Polygon {
    constructor() {
      this.name = 'Polygon';
    }
  }
  
  const poly1 = new Polygon();
  
  console.log(poly1.name);
  // expected output: "Polygon"
  
  class Square extends Polygon {
    constructor(length) {
      // length로 다각형의 넓이와 높이를 정의하기 위해 부모클래스의 생성자를 호출합니다.
      super(length, length);
      // Note: 파생 클래스에서, 'this'를 사용하기 전에는 반드시 super()를
      // 호출하여야 합니다. 그렇지 않을 경우 참조에러가 발생합니다.
      this.name = 'Square';
    }
  
    get area() {
      return this.height * this.width;
    }
  
    set area(value) {
      this.area = value;
    }
  }
  const sq = new Square();
  co