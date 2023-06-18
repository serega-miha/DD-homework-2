import '../../js/register.js';



function navigation(profile) {
    return `
    <nav class="menu">
    <ul class="menu__list">
        <li class="menu__item">
            
            <button class="button button-nav active" id="projects">Проекты</button>
        </li>
        <li class="menu__item">
            <button class="button button-nav" id="tasks">Задачи</button>
        
        </li>
        <li class="menu__item">
            <button class="button button-nav" id="users">Пользователи</button>
        
        </li>
      
       
    </ul>


    <div class="btn-user">
        <a class="button button-user"> 
            <img class="menu-profile-avatar avatar-img" src=${profile} alt="img profile">
            <svg>
            <use xlink:href="#drop-down" />
            </svg>
        </a> 
    <div class="btn-user__menu">
        <ul class="user__menu-list">
            <li class="user__menu-item">
                <a href="#" class="user__menu">Профиль</a>
            </li>
            <li class="user__menu-item">
                <a href="#" class="user__menu">Выход</a>
            </li>
        </ul>
      
        
    </div>
   
</nav>  
    `
}

export default navigation;