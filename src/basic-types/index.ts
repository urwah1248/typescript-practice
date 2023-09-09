console.log(`
**********************************************************
`);

//Number
let id: number = 5;

//String
let username: string = "User";

//Boolean
let isActive: boolean = true;

//Exclusive type Array
let numbers: number[] = [1, 2, 3, 4];

//Non Exclusive Array
let anyArray: any[] = [1, "2", {number:"three"}, [1, 2, 3]];

//Tuple
let tuple: [number, string, boolean] = [1, "urwah", true];

//Tuple Array
let people: [number, string][] = [
  [5, "hamza"],
  [21, "urwah"],
];

//Union
let uid: number | string = 22;
uid = "BSE19S001"; //Can be set to string or number

//Enum
//Enums are readonly datatypes. Good for storing constants.
enum Position {
  X,
  Y,
  Z,
}
//String Enum
enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//Object
type User = { id: number; username: string; isActive: boolean }; //Declaring User type
let user: User = {
  id: 1,
  username: "Urwah",
  isActive: true,
};

//Interface
interface UserInterface { //Declaring Interface
  readonly id:number; //readonly
  username:string;
  isActive:boolean;
  age?:number; // Optional
}

const user1:UserInterface = { //Using interface as object type
  id:1,
  username: 'User1',
  isActive: true,
  age: 15
}

//Extending Interface
interface Admin extends UserInterface{
  adminLevel: number
}

const newAdmin:Admin = {
  id:5,
  username: "Admin",
  isActive: false,
  adminLevel: 5
}

//Type Assertion
let cid:any = 1
let asserted = <number>cid //Method 1
let asserted2 = cid as number //Method 2

//Const assertion
let readonly = [5] as const //sets a variable to readonly
// readonly = [4] //will not work

//Any assertion
let country:string = 'Pakistan'
let assertedCountry = country as any; //Creating a new variable with the same value but any type
assertedCountry = 5;

//Function
const newFunc = (a:number, b:number):number => {
  return a + b
}

//Function With no return Type
const log = (value:any):void => {
  console.log(value)
}
log('Hello World')

//Unknown
//Useful for unknown parameter types
let a:unknown;

//Class
class Person {
  age: number
  name: string

  constructor(age:number, name:string){
    this.age = age;
    this.name = name;
  }

  work() {
    console.log(`${this.name} is now working`);
  }
}

const mike = new Person(10, 'Mike')