import'./sass/style.scss';
import profile from './assets/img/logo-icon.png';

import { projects, tasks } from './js/database.js';



import navigation from './components/navigation';
import projectItem from './components/project-item';
import taskItem from './components/task-item';
import empty from './components/empty/empty';
import buttonsL3 from './components/buttons-L3';







import { putFetchProject,putXmlProject,putAxiosProject, putFetchTask,putXmlTask,putAxiosTask } from "./api-lesson3/put";
import { getFetchProject,getXmlProject,getAxiosProject, getFetchTask,getXmlTask,getAxiosTask } from "./api-lesson3/get";
import { deleteFetchProject,deleteXmlProject,deleteAxiosProject, deleteFetchTask,deleteXmlTask,deleteAxiosTask } from "./api-lesson3/delete";
import { createFetchProject,createXmlProject,createAxiosProject, createFetchTask,createXmlTask,createAxiosTask } from './api-lesson3/create';
import { getToken } from './api-lesson3';





function initApp(){
    //рендерим навигацию в хедер
    let header = document.getElementById('header');
    header.insertAdjacentHTML("afterbegin", navigation(profile));
    //рендерим первоначальную страницу
    let page = document.getElementById('page');

    page.insertAdjacentHTML("afterbegin", projectItem(projects));
    page.insertAdjacentHTML("afterbegin", buttonsL3('Project'));
   
    //следим за кнопками и  их id
    let navBtn = document.querySelectorAll('.button-nav');
    navBtn.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
           
            
            
            if (btn.id === 'projects' && !btn.classList.contains('active')){
                
                    page.innerHTML = '';
                   
                    page.insertAdjacentHTML("afterbegin", projectItem(projects));
                    page.insertAdjacentHTML("afterbegin", buttonsL3('Project'));
              

            } else if (btn.id === 'tasks'  && !btn.classList.contains('active')){
                page.innerHTML = '';
               
                page.insertAdjacentHTML("afterbegin", taskItem(tasks));
                page.insertAdjacentHTML("afterbegin", buttonsL3('Task'));
                             
            } else if (btn.id === 'users'  &&  !btn.classList.contains('active')){
                page.innerHTML = '';
                page.insertAdjacentHTML("afterbegin", empty());
             
            } 
            btnsUnActive();
            btn.classList.add('active');
        })
    })

    function btnsUnActive(){
        navBtn.forEach(item => {
            item.classList.remove('active');
            
        })
    }


    //===========================click navigation
    let btnUser = document.querySelector('.btn-user');
    let btnUserMenu = document.querySelector('.btn-user__menu');

    btnUser.addEventListener('click', (e)=>{
        document.addEventListener('click', (e) =>{
            let nowclick = e.composedPath().includes(btnUser);
            if(!nowclick){
                document.querySelector('.button-user').classList.remove('_active');
                btnUserMenu.classList.remove('show');
            }

        })

       document.querySelector('.button-user').classList.toggle('_active');
       btnUserMenu.classList.toggle('show');
      


      
    })


    //=========click additionaly menu

   document.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    
    
    if (target.classList.contains('clicker')){
        target.classList.add('_active');
        target.closest('a').nextElementSibling.classList.toggle('show');
    } else {
        document.querySelectorAll('.btn-update').forEach(item => {
            item.classList.remove('show');
            
        });
        document.querySelectorAll('.clicker').forEach(item => {
            item.classList.remove('_active');
            
        });
    }
    if (target.id === 'getToken'){
        getToken();      
    } else if (target.id === 'createFetchProject') {
        createFetchProject();
    } else if (target.id === 'putFetchProject') {
        putFetchProject();
    } else if (target.id === 'getFetchProject') {
        getFetchProject();
    } else if (target.id === 'deleteFetchProject') {
        deleteFetchProject();
    } else if (target.id === 'createXmlProject') {
        createXmlProject();
    } else if (target.id === 'putXmlProject') {
        putXmlProject();
    } else if (target.id === 'getXmlProject') {
        getXmlProject();
    } else if (target.id === 'deleteXmlProject') {
        deleteXmlProject();
    } else if (target.id === 'getAxiosProject') {
        getAxiosProject();
    } else if (target.id === 'createAxiosProject') {
        createAxiosProject();
    } else if (target.id === 'putAxiosProject') {
        putAxiosProject();
    } else if (target.id === 'deleteAxiosProject') {
        deleteAxiosProject();
    } else if (target.id === 'createFetchTask') {
        createFetchTask();
    } else if (target.id === 'putFetchTask') {
        putFetchTask();
    } else if (target.id === 'getFetchTask') {
        getFetchTask();
    } else if (target.id === 'deleteFetchTask') {
        deleteFetchTask();
    } else if (target.id === 'createXmlTask') {
        createXmlTask();
    } else if (target.id === 'putXmlTask') {
        putXmlTask();
    } else if (target.id === 'getXmlTask') {
        getXmlTask();
    } else if (target.id === 'deleteXmlTask') {
        deleteXmlTask();
    } else if (target.id === 'getAxiosTask') {
        getAxiosTask();
    } else if (target.id === 'createAxiosTask') {
        createAxiosTask();
    } else if (target.id === 'putAxiosTask') {
        putAxiosTask();
    } else if (target.id === 'deleteAxiosTask') {
        deleteAxiosTask();
    }
    

   })



};


initApp();
