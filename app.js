// class

// class worker {
//     constructor(name, role, nat, lang) {
//       this.name = name;
//       this.role = role;
//       this.nat = nat;
//       this.lang = lang;
//     }
//     work() {}
//     getSalary() {}
//   }
//   let user = new worker("Asrorbek", "developer", "uzbek", "english");
//   console.log(user);
//   class Admin extends worker {
//     constructor(name, role, nat, lang, office) {
//       super(name, role, nat, lang);
//       this.office = office;
//     }
//     control() {}
//   }
//   let user1 = new Admin(
//     "Abdujabbor",
//     "developer",
//     "uzbek",
//     "english",
//     "Farg'ona"
//   );
//   console.log(user1);

//   HOMEWORK

// 1

// class person {
//     constructor(name, age, nat) {
//       this.name = name;
//       this.age = age;
//       this.nat = nat;
//     }
//     work() {}
//     getSalary() {}
//   }
//   let user1 = new person("Asrorbek", "21", "uzbek");
//   let user2 = new person("Sherzod", "18", "uzbek");
//   console.log(user1);
//   console.log(user2);

// 2

// class rectangle {
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }
//     peremetr(){
//         return 2*(this.a + this.b);
//     }
//     yuzi(a,b){
//         return this.a*this.b
//     }
// }
// let tortburchak1 = new rectangle(5, 6);
// console.log(tortburchak1.peremetr());
// console.log(tortburchak1.yuzi());

// 3

// class Vehicle{
//     constructor(marka, model, year){
//         this.marka = marka
//         this.model = model
//         this.year = year
//     }
//     desc(){};

// }
// class car extends Vehicle{
//     constructor(marka, model, year, door_count){
//         super(marka, model, year);
//         this.door_count = door_count;
//     }
// }
// let car1 = new car("Chevrolet", "Malibu", 2015, 4);
// console.log(car1);

// 4

// class BankAcount{
//     constructor(balance){
//         this.balance = balance;
//     }
//     pulAdd(a){
//         this.balance += a;
//         return this.balance
//     };
//     pulMinus(b){
//         this.balance -= b;
//         return this.balance
//     };
// }

// let BankAcount1 = new BankAcount(20)
// console.log(BankAcount1.pulAdd(50));
// console.log(BankAcount1.pulMinus(10));

// 5 

// class Shape{
//     constructor(){
//     }
//     desc(){};

// }
// class doira extends Shape{
//     constructor(){
//         super();
//         this. = ;
//     }
// }
// class uchburchak extends Shape{
//     constructor(){
//         super();
//         this. = ;
//     }
// }
// let doira1 = new doira();
// console.log(doira1);

// 6

// class Xodim{
//     constructor(name, salary){
//         this.name = name;
//         this.salary = salary;
//     }
// }
// class menejer extends Xodim{
//     constructor(name, salary, mulkAdd){
//         super(name, salary);
//         this.mulkAdd = mulkAdd;
//     }
//     bonus(bonus){
//         this.salary += bonus;
//         return this.salary
//     }
// }

// let menejer1 = new menejer("Asrorbek", 20)
// let menejer2 = new menejer("Sher", 15)
// console.log(menejer1.bonus(50));
// console.log(menejer2.bonus(70));

// 7 

// class Kitob{
//     constructor(sarlavha, muallif, nashrYili){
//         this.sarlavha = sarlavha;
//         this.muallif = muallif;
//         this.nashrYili = nashrYili;
//     }
//     desc(){
//     }
// }
// class Ebook extends Kitob{
//     constructor(sarlavha, muallif, nashrYili, narxi){
//         super(sarlavha, muallif, nashrYili);
//         this.narxi = narxi;
//     }
// }

// let Kitob1 = new Ebook("Dasturlash asoslari", "Asrorbek", 2023, 60000);
// console.log(Kitob1);

// 8

// class Animal{
//     constructor(tur, tovush){
//         this.tur = tur;
//         this.tovush = tovush;
//     }
//     ovoz(){}

// }
// class it extends Animal{
//     constructor(tur, tovush, rang){
//         super(tur, tovush);
//         this.rang = rang;
//     }
// }

// let it1 = new it("Afchalka", "Vov-vov", "oq");