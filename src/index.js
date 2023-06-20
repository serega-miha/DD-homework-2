import'./sass/style.scss';
import profile from './assets/img/logo-icon.png';

import { projects, tasks } from './js/database.js';



import navigation from './components/navigation';
import projectItem from './components/project-item';
import taskItem from './components/task-item';
import empty from './components/empty/empty';





function initApp(){
    //рендерим навигацию в хедер
    let header = document.getElementById('header');
    header.insertAdjacentHTML("afterbegin", navigation(profile));
    //рендерим первоначальную страницу
    let page = document.getElementById('page');
    page.insertAdjacentHTML("afterbegin", projectItem(projects));

    //следим за кнопками и  их id
    let navBtn = document.querySelectorAll('.button-nav');
    navBtn.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
           
            
            
            if (btn.id === 'projects' && !btn.classList.contains('active')){
                
                    page.innerHTML = '';
                    page.insertAdjacentHTML("afterbegin", projectItem(projects));
              

            } else if (btn.id === 'tasks'  && !btn.classList.contains('active')){
                page.innerHTML = '';
                page.insertAdjacentHTML("afterbegin", taskItem(tasks));
                             
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
    console.log(target);
    
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


   })


};


initApp();
