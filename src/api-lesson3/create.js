import axios from "axios";

import { url, getTokenLocal, checkRes, saveIdLocal, showRes} from './index.js';


//create project
const project = {
    name: 'mikhailenko.s',
    code: 'new code',
  }




const createFetchProject = () =>{
    fetch(`${url}/projects`, {
    method: 'POST',
    headers: {
    authorization: getTokenLocal(),
    "Content-Type": "application/json",
  },
  body: JSON.stringify(project),
   
  })
  .then(checkRes)
  .then((json) => {
    showRes(json);
    saveIdLocal(json._id)
  })
  .catch((err) => console.log(err))
  
  };


  const createXmlProject = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${url}/projects`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", getTokenLocal());
    xhr.onload = () => {
      if (xhr.status === 200) {
        saveIdLocal(JSON.parse(xhr.response)._id);
        console.log(xhr.response);
      } else {
        console.log("Ошибка!:", xhr.status);
      }
    };
    xhr.send(JSON.stringify(project));
  };

  const createAxiosProject = () => {
    axios
        .post(`${url}/projects`, project, {
            headers: {
                
                "Content-Type": "application/json",
                authorization: getTokenLocal(),
              }
        })
            .then(function(response){
               showRes(response.data);
                saveIdLocal(response.data._id)
            })
            .catch((err) => console.log(err));
}



//create task
const task = {
    name: "mikhailenko.s",
    description: "some description",
    projectId: "6495884dee9f515ec4443a7a",
    
}




const createFetchTask = () =>{
    fetch(`${url}/tasks`, {
        method: 'POST',
        headers: {
        authorization: getTokenLocal(),
        "Content-Type": "application/json",
  },
  body: JSON.stringify(task),
   
  })
  .then(checkRes)
  .then((json) => {
    showRes(json);
    saveIdLocal(json._id)
  })
  .catch((err) => console.log(err))
  
  };


  const createXmlTask = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${url}/tasks`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", getTokenLocal());
    xhr.onload = () => {
      if (xhr.status === 200) {
        saveIdLocal(JSON.parse(xhr.response)._id);
        console.log(xhr.response);
      } else {
        console.log("Ошибка!:", xhr.status);
      }
    };
    xhr.send(JSON.stringify(task));
  };

  const createAxiosTask = () => {
    axios
        .post(`${url}/tasks`, task, {
            headers: {
                
                "Content-Type": "application/json",
                authorization: getTokenLocal(),
              }
        })
            .then(function(response){
               showRes(response.data);
                saveIdLocal(response.data._id)
            })
            .catch((err) => console.log(err));
}

  export { createFetchProject, createXmlProject,createAxiosProject,createFetchTask, createXmlTask,createAxiosTask };