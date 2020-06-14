const changeModalState = (target, state) => {
    let options = target.querySelectorAll('option');
        options.forEach(item => {
            if (target.value && item.value === target.value) {
                    state[target.id] = item.textContent;
            }
        });
        console.log(state);
};

export default changeModalState;