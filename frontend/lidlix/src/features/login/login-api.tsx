
const LoginApi = (
  email : string, 
  password : string
  ) => {
  // const navigate = useNavigate()
  if(email === "admin@gmail.com" && password === "123"){
    return {
      isTrue : true,
      message : "Login Berhasil"
    }
  }
  else {
    return {
      isTrue : false,
      message : "Email atau Password Salah!"
    }
  }
}

export default LoginApi