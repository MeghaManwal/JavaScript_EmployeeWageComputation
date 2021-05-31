const isParttime = 1;
const isFulltime =2;
const parttimeHrs = 4;
const fulltimeHrs = 8;
const wagePerHr   = 20;

function getWorkingHours(empCheck) {

  switch(empCheck) {
    case 1:
        return parttimeHrs;
        break;
    case 2:
        return fulltimeHrs;
        break;
    default:
        return 0;
  }
}

const maxHrsinMonth =120;
const numofWorkingDays =20;
let totalempHrs =0;
let totalWorkingdays =0;
let empHrs = 0;
while(totalempHrs <= maxHrsinMonth && totalWorkingdays < numofWorkingDays) {
totalWorkingdays++;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * wagePerHr;
console.log("Total Days: "+totalWorkingdays);
console.log("Total Hours: "+empHrs);
console.log("Employee Wage: "+empWage);