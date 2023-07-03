function getUser(){
    setTimeout(function(){
        return{
            id: 1,
            nome: 'Landson',
            dataNascimento: newDate()
        }
    },100);
}

function getUserPhone(){
    setTimeout(function(){
        return{
            phone:'999966644',
            ddd: 81
        }
    }, 2000);
}

function getUserAdress(userID){

}

const user = getUser();
const phone = getUserPhone();
const adress = getUserAdress(user.id);

console.log('user', user);
console.log('phone', phone);