import axios from 'axios';

import { getIdLocal ,url, getTokenLocal, checkRes, showRes} from './index.js';

//put project изменяем проект по id

const putFetchProject = () =>{
    const projectPut = {
        _id: getIdLocal(),
        name: "new change name",
        code: 'changed code',
      };

    fetch(`${url}/projects`, {
      method: "PUT",
      headers: {
        authorization: getTokenLocal(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectPut),
    })
      .then(checkRes)
    //       .then((res) => res.json())
    //   .then((json) => console.log(json))
      .then((res) => showRes(res))
      .catch((err) => console.log(err));
  };

  const putXmlProject = () => {
    const projectPut = {
        _id: getIdLocal(),
        name: "new change name",
        code: 'changed code',
      };
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `${url}/projects`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", getTokenLocal());
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.response);
      } else {
        console.log("Ошибка!:", xhr.status);
      }
    };
    xhr.send(JSON.stringify(projectPut));
  };



  const putAxiosProject = () => {
    const projectPut = {
        _id: getIdLocal(),
        name: "new change name",
        code: 'changed code',
      };
    axios
        .put(`${url}/projects`, projectPut, {
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


//put task изменяем проект по id

const putFetchTask = () =>{
    const taskPut = {
        _id: getIdLocal(),
        name: "mikhailenko.s",
        description: "some description",
        projectId: "6495884dee9f515ec4443a7a",
 
      };

    fetch(`${url}/tasks`, {
      method: "PUT",
      headers: {
        authorization: getTokenLocal(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskPut),
    })
      .then(checkRes)
    //       .then((res) => res.json())
    //   .then((json) => console.log(json))
      .then((res) => showRes(res))
      .catch((err) => console.log(err));
  };

  const putXmlTask = () => {
    const taskPut = {
        _id: getIdLocal(),
        name: "mikhailenko.s",
        description: "some description",
        projectId: "6495884dee9f515ec4443a7a",
        
      };
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `${url}/tasks`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", getTokenLocal());
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.response);
      } else {
        console.log("Ошибка!:", xhr.status);
      }
    };
    xhr.send(JSON.stringify(taskPut));
  };



  const putAxiosTask = () => {
    const taskPut = {
        _id: getIdLocal(),
        name: "mikhailenko.s",
        description: "some description",
        projectId: "6495884dee9f515ec4443a7a",
       
      };
    axios
        .put(`${url}/tasks`, taskPut, {
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



  export { putFetchProject, putXmlProject,putAxiosProject, putFetchTask, putXmlTask,putAxiosTask};