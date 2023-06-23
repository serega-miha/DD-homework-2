import axios from 'axios';

import { getIdLocal ,url, getTokenLocal, checkRes, showRes} from './index.js';

//delete project удалем проект по id

const deleteFetchProject =()=> {
    fetch(`${url}/projects/${getIdLocal()}`, {
      method: "DELETE",
      headers: {
        authorization: getTokenLocal(),
        "Content-Type": "application/json",
      },
      
    })
      .then(checkRes)
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
      .then((res) => showRes(res))
      .catch((err) => console.log(err));
  };

  const deleteXmlProject = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `${url}/projects/${getIdLocal()}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", getTokenLocal());
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        
        console.log("Ошибка!:", xhr.status);
      }
    };
    xhr.send();
  };

  const deleteAxiosProject = () => {

    axios
        .delete(`${url}/projects/${getIdLocal()}`, {
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


//delete task удалем проект по id

const deleteFetchTask =()=> {
    fetch(`${url}/tasks/${getIdLocal()}`, {
      method: "DELETE",
      headers: {
        authorization: getTokenLocal(),
        "Content-Type": "application/json",
      },
      
    })
      .then(checkRes)
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
      .then((res) => showRes(res))
      .catch((err) => console.log(err));
  };

  const deleteXmlTask = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `${url}/tasks/${getIdLocal()}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", getTokenLocal());
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        
        console.log("Ошибка!:", xhr.status);
      }
    };
    xhr.send();
  };

  const deleteAxiosTask = () => {

    axios
        .delete(`${url}/tasks/${getIdLocal()}`, {
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



  export { deleteFetchProject, deleteXmlProject,deleteAxiosProject, deleteFetchTask, deleteXmlTask,deleteAxiosTask};