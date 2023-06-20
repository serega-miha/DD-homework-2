
function taskItemCard(title,user,idArticle,authorCreate,authorUpdate, statusText, statusClass) {
    return `
    <div class="project-item">
    <div class="project-item__main">
        <div class="project-item__title task-item__title">
            <p title="${title}">${title}</p>
            <a href="#" class="project-item__avatar"><img  class="menu-profile-img avatar-img" src=${user} alt="no"></a>
        </div>
       
        <div class="project-item__body">
            <div class="project-item__body-id"><p title="${idArticle}">${idArticle}</p></div>
            
            <div class="project-item__body-create task-item__body-create"><p>${authorCreate}</p>  <a class="status ${statusClass}">${statusText}</a></div>
            <div class="project-item__body-update"><p>${authorUpdate}</p></div>
            <div class="project-item__body-dotts"></div>
        </div>
    </div>
    <div class="btn-addittionaly">
    <a class="button-addittionaly project-item__addittionaly">
            <svg class="clicker">
            <use xlink:href="#dots"/>
            </svg>
    </a>
    <div class="btn-update">
            <ul class="update-menu__list">
                <li class="update-menu__item">
                    <a href="#" class="update-menu__link">Редактировать</a>
                </li>
                <li class="update-menu__item">
                    <a href="#" class="update-menu__link update-menu__link-r">Удалить</a>
                </li>
            </ul>

        </div>
    
    </div>
</div>
    `

}

function taskItem(cards) {
    let itemCard = '';
    cards.forEach(card =>{
        itemCard+= taskItemCard(card.title, card.user, card.idArticle, card.authorCreate, card.authorUpdate, card.statusText, card.statusClass)
    })

    return `
    <div class="project-items">
    <div class="project-items-container">
         ${itemCard}
    </div>
</div>

    `
}


export default taskItem;