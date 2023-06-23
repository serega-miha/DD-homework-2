

const url = "http://45.12.239.156:8081/api";
const login = {
    login: "mikhailenko.s",
    password: "jc63fk"
}

//сохранение токена в localStorage
const saveTokenLocal = (token) => {
    localStorage.setItem("token", token);
  };
  
//сохранение id в localStorage
  const saveIdLocal = (id) => {
    localStorage.setItem("_id", id);
  };
  
  //получить токен из localStorage
  const getTokenLocal = () => {
    return `Bearer ${localStorage.getItem("token")}`;
  };
  
  //получить id из localStorage
  const getIdLocal = () => {
    return localStorage.getItem("_id");
  };
 
  //проверить res.ok
  const checkRes = (res) => {
    return res.ok ? res.json() : console.log(`Ошибка!: ${res.status}`);
  };


  //аоказать res
  const showRes = (data) => {
    // console.log(data);
    console.log(JSON.stringify(data));
  };
  
  //порлучаем токен по логину и паролю
  const getToken = () => {
    fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
     
      .then(checkRes)
      .then((json) => saveTokenLocal(json.token))
      .catch((err) => console.log(err));
  };






  export { url, saveTokenLocal, saveIdLocal,  getTokenLocal, getIdLocal, checkRes, showRes, getToken};
  