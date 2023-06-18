


function status(text, statusClass) {
    return `
    <div class="statuses">
            <ul class="status__list">
                <li class="status__item">
                    <a class="status bronze">Черновик</a>
                </li>
                <li class="status__item">
                    <a class="status blue">Завершена</a>
                </li>
                <li class="status__item">
                    <a class="status red">Удалена</a>
                </li>
                <li class="status__item">
                    <a class="status blue">Активен</a>
                </li>
                <li class="status__item">
                    <a class="status disable">Не активен</a>
                </li>
                <li class="status__item">
                    <a class="status bronze">В работе</a>
                </li>

            </ul>
        </div>
    `

}


export default status;