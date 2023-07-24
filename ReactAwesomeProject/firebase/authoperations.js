import db from '../../ReactAwesomeProject/firebase/config'

const signUpUser = async (dispatch,getSatte) => {
try{
const user = db.auth().createUser
}catch(error){
console.log('error',error)
console.log('error message',error.message)
}
}