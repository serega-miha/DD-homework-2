




function buttonsL3(name){
    return `
    <div class="lesson3">
        <div class="title">
            <h1>L3-Promise!  ${name}</h1>
            <div class="token-btn" >
                <a href="#" class="button" id="getToken">Получить токен</a>
            </div>
        </div>

        <div class="lesson3-container">
            <div class="lesson3-btns xml">
                <h2>XML</h2>
                <a href="#" class="button" id="createXml${name}">Создать</a>
                <a href="#" class="button" id="putXml${name}">Изменить</a>
                <a href="#" class="button" id="getXml${name}">Вывести</a>
                <a href="#" class="button" id="deleteXml${name}">Удалить</a>
            </div>
            <div class="lesson3-btns fetch">
                <h2>Fetch</h2>
                <a href="#" class="button" id="createFetch${name}">Создать</a>
                <a href="#" class="button" id="putFetch${name}">Изменить</a>
                <a href="#" class="button" id="getFetch${name}">Вывести</a>
                <a href="#" class="button" id="deleteFetch${name}">Удалить</a>
            </div>
            <div class="lesson3-btns axios">
                <h2>Axios</h2>
                <a href="#" class="button" id="createAxios${name}">Создать</a>
                <a href="#" class="button" id="putAxios${name}">Изменить</a>
                <a href="#" class="button" id="getAxios${name}">Вывести</a>
                <a href="#" class="button" id="deleteAxios${name}">Удалить</a>
            </div>
        </div>
        <hr>
       </div>
    `
}

export default buttonsL3;