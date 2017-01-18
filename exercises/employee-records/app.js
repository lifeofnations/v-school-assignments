var employees = [];

function Employee(name, job, salary, status) {
    this.name = name;
    this.jobTitle = job;
    this.salary = salary;
    this.status = status || "Full Time";
    this.printEmployeeForm = function () {
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
    };
}


var bill = new Employee("Bill", "Nap Instructor", "$5/hour");
var sally = new Employee("Sally", "Lead Designer", "$1,000,000,000/does it matter?", "Part Time");
var greg = new Employee("Greg", "Mail Room", "$20/hour");

//sally.status = "Part Time";

bill.printEmployeeForm();
sally.printEmployeeForm();
greg.printEmployeeForm();

employees.push(bill, sally, greg);