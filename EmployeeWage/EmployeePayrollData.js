console.log("UC-13");
//To create Employee Payroll Class

class EmployeePayrollData {
     id;
     salary;
     gender;
     startDate;

     constructor(...params) {
       this.id = params[0];
       this.name = params[1];
       this.salary = params[2];
       this.gender = params[3];
       this.startDate = params[4];
     }

     get name() {return this._name;}
     set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
           this._name = name;
        else throw 'Name is Incorrect!';
     }

     toString() {
        const options = {year: 'numeric' , month: 'long', day: 'numeric'};
        //const empDate = this.startDate==undefined ? "undefined" : this.startDate.toLocaleDateString("en-US",options);
        return "id = "+ this.id +", name = "+this.name+", salary = "+this.salary +
                  ", gender = "+ this.gender +", startDate = "+this.startDate;
     }
}
     const employeePayrolldata = new EmployeePayrollData(1, "Mark", 30000);
     console.log("Payroll Data: "+employeePayrolldata.toString());
     try{
     employeePayrolldata.name = 'john';
     console.log("After Replacement: "+employeePayrolldata.toString());
     } catch (e) {
       console.error(e);
     }
     const newemployeePayrolldata = new EmployeePayrollData(1, "Terrisa", 60000 ,"F", "2020-05-31");
     console.log("New Payroll Data: "+newemployeePayrolldata.toString());
