let employees = [{ "id": 1, "first_name": "Waylon", "email": "wkondratovich0@discuz.net", "gender": "Male", "salary": 51403.9 },
{ "id": 2, "first_name": "Braden", "email": "bberresford1@umich.edu", "gender": "Male", "salary": 93023.04 },
{ "id": 3, "first_name": "Gweneth", "email": "gcumpton2@indiegogo.com", "gender": "Female", "salary": 46949.18 },
{ "id": 4, "first_name": "Janey", "email": "jblazdell3@state.tx.us", "gender": "Female", "salary": 34916.5 },
{ "id": 5, "first_name": "Brynne", "email": "buzzell4@last.fm", "gender": "Female", "salary": 60564.97 },
{ "id": 6, "first_name": "Camille", "email": "cbaudic5@indiegogo.com", "gender": "Genderfluid", "salary": 41589.7 },
{ "id": 7, "first_name": "Bennie", "email": "bocosgra6@phpbb.com", "gender": "Male", "salary": 45817.06 },
{ "id": 8, "first_name": "Wadsworth", "email": "wgodin7@woothemes.com", "gender": "Male", "salary": 79252.09 },
{ "id": 9, "first_name": "Myca", "email": "mcockayme8@ftc.gov", "gender": "Bigender", "salary": 20134.93 },
{ "id": 10, "first_name": "Lorens", "email": "ljorry9@people.com.cn", "gender": "Male", "salary": 65089.8 }]

let f=employees.filter((employee)=>{
    return employee.gender == "Male" && employee.salary<=60000 
});
 f.forEach((a)=>{
    console.log( a.salary+ (2/100) *(a.salary))
    console.log(a.salary)
 });
console.log(f);
