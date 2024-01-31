function printFilteredUsers(data, criteria) {
    let usersData = JSON.parse(data);
if(data==undefined || criteria==undefined){
    return
}
    let filteredUsers = usersData.filter(user=>hasRequiredCriteria(user,criteria));

for(let i=0;i<filteredUsers.length;i++){
    let userData=filteredUsers[i];
    console.log(`${i}. ${userData.first_name} ${userData.last_name} - ${userData.email}`)
}

    function hasRequiredCriteria(userData, criteria) {
        let [keyCriteria, valueCriteria] = criteria.split('-')
        return userData[keyCriteria] === valueCriteria;
    }
}




let data = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`

let criteria = 'gender-Female';
printFilteredUsers(data, criteria);

