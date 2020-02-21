var car1 ={
    brand :"Mercedes",
    mileage : 176346,
    year : 2008

};

var car2 ={
    brand :"Toyota",
    mileage : 146000,
    year : 2009
};

function car(brand, mileage, year){
    this.brand =brand; 
    this.mileage =mileage;
    this.year = year;
};

var car3 = new car("Honda", 90000, 2010);
console.log(car3);

function Employee (Name, ID, SSN, Salary){
    this.Name = Name;
    this.ID = ID;
    this.SSN = SSN;
    this.Salary = Salary; 
}

var kamil = new Employee("Kamil", 1, 3747, 98000); 
var bakkal = new Employee("Erdal", 2, 1223, 1000)

console.log(kamil);
console.log(bakkal);

console.log(kamil.Name);
console.log(bakkal["Name"]);

