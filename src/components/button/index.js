import '@/js/register.js';


function buttons() {
    return `
    <div class="btns">
        <button class="button">button</button>
        <br>
        <button class="button button-cancel">cancel</button>
        <br>    
        <button class="button button-disable">disable</button>
        <br>
        <a class="button-addittionaly">
            
                <svg>
                <use xlink:href="#dots"/>
                </svg>
             
        </a>
    </div>
    `
}

export default buttons;