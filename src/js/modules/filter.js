const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          no = document.querySelector('.portfolio-no'),
          markAll = wrapper.querySelectorAll('.all');

    const typeFilter = (markType) => {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(item => {
                item.style.display = 'block';
                item.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    const bindElems = (selector, available = true) => {
        const btn = menu.querySelector(selector),
              mark = wrapper.querySelectorAll(selector);
        btn.addEventListener('click', () => typeFilter(available ? mark : ''));
    };

    menu.addEventListener('click', e => {
        let target = e.target;
        if (target && target.tagName == 'LI'){
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });

    bindElems('.all');
    bindElems('.chef');
    bindElems('.lovers');
    bindElems('.girl');
    bindElems('.guy');
    bindElems('.grandmother', false);
    bindElems('.granddad', false);
};

export default filter;