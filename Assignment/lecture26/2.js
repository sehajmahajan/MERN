// Create an object named employee with keys employee_name, dept, and join_year
// ->Print object 
// ->Print dept of the employee
// ->delete join_year
// ->replace employee_name with your own name

let employee = {
    employee_name : "ABC",
    dept : "Development",
    join_year : 2025
}

// ->Print object 
console.log(employee);

// ->Print dept of the employee
console.log(employee.dept);

// ->delete join_year
delete employee.join_year;

// ->replace employee_name with your own name
employee.employee_name = "Sehaj Mahajan";

console.log(employee);