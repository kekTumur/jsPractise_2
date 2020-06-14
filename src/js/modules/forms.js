// import checkNumInputs from './checkNumInputs';
import {postData} from '../services/requests';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          modal = document.querySelector('.popup_calc_end');

    // checkNumInputs('input[name="user_phone"]');
    
    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что то пошло не так',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/quiestion.php'
    };

    

    const clearInputs = () => inputs.forEach(item => item.value = '');

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.src = message.spinner;
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api;
            api = item.closest('.popup-design') ? path.designer : path.question;

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);
                statusImg.src = message.ok;
                textMessage.textContent = message.success;
            })
            .catch(() => {
                statusImg.src = message.fail;
                textMessage.textContent = message.failure
            })
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                    item.style.display = 'block';
                    item.classList.remove('fadeOutUp');
                    item.classList.remove('fadeInUp');
                }, 2000);
            });
        });
    });
};

export default forms;