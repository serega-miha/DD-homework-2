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
            btnsUnActive();
            btn.classList.add('active');
            page.innerHTML = '';
            if (btn.id === 'projects'){
                page.insertAdjacentHTML("afterbegin", projectItem(projects));
            } else if (btn.id === 'tasks'){
                page.insertAdjacentHTML("afterbegin", taskItem(tasks));
                menuAdditionaly();
            } else if (btn.id === 'users'){
                page.insertAdjacentHTML("afterbegin", empty());
            }

        })
    })

    function btnsUnActive(){
        navBtn.forEach(item => {
            item.classList.remove('active');
            
        })
    }


    //===========================
    let btnUser = document.querySelector('.btn-user');
    let btnUserMenu = document.querySelector('.btn-user__menu');

    btnUser.addEventListener('click', ()=>{
    
       document.querySelector('.button-user').classList.toggle('_active');
       btnUserMenu.classList.toggle('show');
      
    })
    //==========================
    
    

    function menuAdditionaly(){
        let btnDots = document.querySelectorAll('.button-addittionaly');
        btnDots.forEach(btn =>{
            btn.addEventListener('click', (e)=>{
                let target = e.target;
                target.closest('a').nextElementSibling.classList.toggle('show');
            })
        })
    }
    menuAdditionaly();
   


};


initApp();
