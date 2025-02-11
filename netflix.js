function add_swipe(direction) {
    const parent = document.querySelector('#films-container');
    const scrollableFilms = document.querySelector('#scrollable-film-suggestions');

    if (!document.querySelector(`#${direction}_swipe`)) {
        let Btn = document.createElement('BUTTON');
        Btn.classList.add('swipe-btn');
        Btn.id = `${direction}_swipe`;
        Btn.innerText = direction === 'left' ? '<' : '>';

        if (direction === 'left') {
            parent.insertBefore(Btn, scrollableFilms);
            scrollableFilms.style.marginLeft = '40px';
            swipe_to_left(Btn);
        } else {
            scrollableFilms.after(Btn);
            scrollableFilms.style.marginRight = '40px';
            swipe_to_right(Btn);
        }
    }
}

function del_swipe(direction) {
    let Btn = document.querySelector(`#${direction}_swipe`);
    const scrollableFilms = document.querySelector('#scrollable-film-suggestions');

    if (Btn) {
        Btn.remove();
        if (direction === 'left') {
            scrollableFilms.style.marginLeft = '0px';
        } else {
            scrollableFilms.style.marginRight = '0px';
        }
    }
}

function swipe_to_left(btn) {    
    btn.addEventListener('click', () => {
        parent_scroll.scrollTo({
            left: 0, 
            behavior: 'smooth'
        });
    });
}

function swipe_to_right(btn) {
    btn.addEventListener('click', () => {
        parent_scroll.scrollTo({
            left: parent_scroll.scrollWidth,
            behavior: 'smooth'
        });
    });
}

const parent_scroll = document.querySelector('#scrollable-film-suggestions');

function check_scroll_condition() {
    if (parent_scroll.scrollLeft === 0) {
        add_swipe('right');
        del_swipe('left');
    } else if (Math.abs(parent_scroll.scrollLeft + parent_scroll.clientWidth - parent_scroll.scrollWidth) < 1) {
        add_swipe('left');
        del_swipe('right');
    } else {
        add_swipe('left');
        add_swipe('right');
    }
}

parent_scroll.addEventListener('scroll', check_scroll_condition);
check_scroll_condition();
