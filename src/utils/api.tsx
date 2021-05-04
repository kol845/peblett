
import apiConst from "../constants/apiConstants"

const reqLogin = async (uname, passwd, callback) =>{
    const reqURL = apiConst.URL + apiConst.API_VERSION + apiConst.USER_URN + apiConst.LOGIN
    const body = {'uname':uname, 'password':passwd}
    await fetch(reqURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(body),
      }).then(res=>res.json())
      .then(data=>{ callback(data)})
}
const reqRegister = async (uname, passwd, email, callback) =>{
    const reqURL = apiConst.URL + apiConst.API_VERSION + apiConst.USER_URN + apiConst.REGISTER
    const body = {'uname':uname, 'password':passwd, 'email':email}
    await fetch(reqURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(body),
      }).then(res=>res.json())
      .then(data=>{ callback(data)})
}

export default{
    reqLogin,
    reqRegister
}