class EmployeePayrollData {

    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get id() {return this._id;}
    set id(id) {
        let pattern1 = RegExp('^[1-9][0-9]*$');
        if(pattern1.test(id))
        this._id = id;
        else throw 'Id is incorrect!';
    }

    get name() {return this._name;}
    set name(name) {
        let pattern2 = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(pattern2.test(name))
        this._name = name;
        else throw 'Name is incorrect !';
    }
  
    get salary() {return this._salary;}
    set salary(salary) {
        let pattern3 = RegExp('^[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*$');
        if(pattern3.test(salary))
        this._salary = salary;
        else throw 'Salary is incorrect !';
    }

    get gender() {return this._gender;}
    set gender(gender) {
        let pattern4 = RegExp('^[M F m f]{1}$');
        if(pattern4.test(gender))
        this._gender = gender;
        else throw 'Gender is incorrect!';
    }

    toString() {
     return "id = "+ this.id +", name = "+this.name+", salary = "+this.salary +
               ", gender = "+ this.gender +", startDate = "+this.startDate;
    }
}

    const employeePayrolldata = new EmployeePayrollData(1, "Mark", 60000, "M", "2020-04-30");
    console.log("Payroll Data: "+employeePayrolldata.toString());

    //To validate Id using Regex pattern
    try{
       employeePayrolldata.id =-0;
       console.log(employeePayrolldata.toString())
    }catch(e){
       console.error(e);
    }
  
    try{
       employeePayrolldata.id = 2;
       console.log(employeePayrolldata.toString())
    }catch(e){
       console.error(e);
    }
  
    //To validate Name using Regex pattern
    try{
       employeePayrolldata.name = "john";
       console.log(employeePayrolldata.toString())
    }catch(e){
       console.error(e);
    }

    try{
       employeePayrolldata.name = "John";
       console.log(employeePayrolldata.toString())
    }catch(e){
       console.error(e);
    }

    //To validate Salary using Regex pattern
    try{
       employeePayrolldata.salary = -55000;
       console.log(employeePayrolldata.toString())
    }catch(e){
       console.error(e);
    }
 
    try{
       employeePayrolldata.salary = 55000;
       console.log(employeePayrolldata.toString())
    }catch(e){
       console.error(e);
    }
   
    
    //To validate Gender using Regex pattern
    try{
       employeePayrolldata.gender = "P";
       console.log(employeePayrolldata.toString())
    }catch(e){
       console.error(e);
    }
   
    try{
       employeePayrolldata.gender = "m";
       console.log(employeePayrolldata.toString())
    }catch(e){
       console.error(e);
    }

    const newemployeePayrolldata = new EmployeePayrollData(1, "Terrisa", 55000 ,"F", "2020-04-21");
    console.log("New Payroll Data: "+newemployeePayrolldata.toString());