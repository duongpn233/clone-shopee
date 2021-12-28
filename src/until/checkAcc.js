function checkExisted(users, email){
    let flag = false;
    users.forEach(user => {
        if(user.email === email){
            flag = true;
           
        }
    });
    return flag;
}

function checkLogin(users, email, pass){
    let flag = false;
    let currentUser = {};
    users.forEach(user => {
        if(user.email === email && user.pass === pass){
            flag = true;
            currentUser = user;
        }
    });
    return {
        flag: flag,
        currentUser: currentUser
    };
}

export default checkExisted;
export {checkLogin};