class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const yang = new Human("yang", 17, "femail");

const sayHi = (user: Human): string => {
  return `Hello ${user.name}, you are ${user.age}, you are a ${user.gender}`;
};
console.log(sayHi(yang));
export {};
