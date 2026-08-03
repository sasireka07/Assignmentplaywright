console.log("Employee Name\tBasic salary\t Experience \t Rating");
let hikepercentage:number=0;
  let vp = 0;
    let bonus = 0;
  

  let hikeperc = (emp.basicSalary * vp / 100) + bonus;

let empDetails=[
    
        {empName:"Alice Johnson",basicSalary:75000.0,experience:5.1,rating:4.2},
      {empName:"Bob Smith",basicSalary:68000.0,experience:3.2,rating:3.8},
          {empName:"Carol Davis",basicSalary:82000.0,experience:7.1,rating:4.5},
              {empName:"David Brown",basicSalary:90000.0,experience:10.2,rating:2.5},
                  {empName:"Eva Green",basicSalary:60000.0,experience:2.4,rating:3.5}];

                  for (let emp of empDetails){
                   console.log(`${emp.empName}\t\t${emp.basicSalary}\t${emp.experience}\t\t${emp.rating}`);
                  }
    for (let reward of empDetails) {
    if (reward.experience > 5) { 
        reward.basicSalary+=5000;
      console.log(`empName:${reward.empName} - BasicSalary: ${reward.basicSalary} years - Experience: ${emp.experience}` );
        
    }   
}
console.log("Rating\t% of base Salary as variable pay\t Bonus");


let hikeDetails=[
    
        {rating:">=4.0",vp:15.0,bonus:1500},
                {rating:">=3 && < 4",vp:10.0,bonus:1200},
                        {rating: "< 3.0",vp:3.0,bonus:300}
      ];

                  for (let hike of hikeDetails){
                   console.log(`${hike.rating}\t${hike.vp}\t${hike.bonus}\t\t\t\t\t\t\t\t\t}`);
}

               
//hikepercentage=hikepercentage/basicSalary[emp];