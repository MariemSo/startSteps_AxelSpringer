interface Student {
  name: string;
  age: number;
}

interface UnderGraduateStudent extends Student {
  year: number;
}

interface GraduateStudent extends Student {
  degree: string;
}

class UnderGraduate implements UnderGraduateStudent {
  name: string;
  age: number;
  year: number;

  constructor(name: string, age: number, year: number) {
    this.name = name;
    this.age = age;
    this.year = year;
  }
}

class Graduate implements GraduateStudent {
  name: string;
  age: number;
  degree: string;

  constructor(name: string, age: number, degree: string) {
    this.name = name;
    this.age = age;
    this.degree = degree;
  }
}
