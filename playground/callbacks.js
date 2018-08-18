let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Joey'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);  
};

getUser(30, (userObject) => {
  console.log(userObject);
});