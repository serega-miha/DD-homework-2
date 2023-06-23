

import axios from 'axios';
import { url, getTokenLocal, checkRes, showRes} from './index.js';

//получить страницы
const projectSearch = {
    'page': 1,
    'limit': 10,
  //   "filter": {
  //     // "authorEdited": "648af2967287972ce8676f5a",
  //     "name": "borisiannis",
     
  //  },
  }

const getFetchProject = () =>{
    fetch(`${url}/projects/search`, {
      method: "POST",
      headers: {
        authorization: getTokenLocal(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectSearch),
    })
      .then(checkRes)
      .then((res) => showRes(res))
      .catch((err) => console.log(err));
   
  };


const getXmlProject = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${url}/projects/search`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", getTokenLocal());
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.response);
      } else {
        console.log("Ошибка!:", xhr.status);
      }
    };
    xhr.send(JSON.stringify(projectSearch));
  };


const getAxiosProject = () => {
    axios
        .post(`${url}/projects/search`, projectSearch, {
            headers: {
                
                "Content-Type": "application/json",
                authorization: getTokenLocal(),
              }
        })
            .then(function(response){
                showRes(response.data);
            })
            .catch((err) => console.log(err));
}


//получить tasks
const taskSearch = {
    'page': 1,
    'limit': 10,

  }

const getFetchTask = () =>{
    fetch(`${url}/tasks/search`, {
      method: "POST",
      headers: {
        authorization: getTokenLocal(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskSearch),
    })
      .then(checkRes)
      .then((res) => showRes(res))
      .catch((err) => console.log(err));
   
  };


const getXmlTask = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${url}/tasks/search`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", getTokenLocal());
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.response);
      } else {
        console.log("Ошибка!:", xhr.status);
      }
    };
    xhr.send(JSON.stringify(taskSearch));
  };


const getAxiosTask = () => {
    axios
        .post(`${url}/tasks/search`, taskSearch, {
            headers: {
                
                "Content-Type": "application/json",
                authorization: getTokenLocal(),
              }
        })
            .then(function(response){
                showRes(response.data);
            })
            .catch((err) => console.log(err));
}


  export { getFetchProject, getXmlProject, getAxiosProject,getFetchTask, getXmlTask, getAxiosTask};