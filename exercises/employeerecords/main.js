var employees = [];
function Employee (name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full time";
    this.printEmployeeForm = function (){
        console.log(this);
    }
};

var bob = new Employee("Bob", "Instructor", "Loads");
bob.printEmployeeForm();
employees.push(bob);
var marcus = new Employee("Marcus", "Adjunct Instructor", "More than average");
marcus.status = "Part time";
marcus.printEmployeeForm();
employees.push(marcus);
var chris = new Employee("Chris", "Finance guy", "The most")
chris.printEmployeeForm();
employees.push(chris);
console.log(employees);