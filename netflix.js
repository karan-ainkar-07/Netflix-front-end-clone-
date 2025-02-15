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

function addEvent_to_faq()
{
    const btns=document.querySelectorAll('.faq-button');
    btns.forEach((btn) => {
        btn.addEventListener('click',plus_cross_event)
    });
}
let another_active=''
function plus_cross_event(e)
{
    let clicked_btn=e.currentTarget.children[0];
    if(clicked_btn.style.transform==='rotate(45deg)')
    {
        clicked_btn.style.transform='rotate(0deg)'
        del_content_faq(e.currentTarget);
        another_active='';
    }
    else
    {
        is_another_active(another_active);
        clicked_btn.style.transform='rotate(45deg)';
        add_content_faq(e.currentTarget);
        another_active=e.currentTarget.id;
    }
}
function is_another_active(id)
{
    let element=document.getElementById(id);
    if(element)
    {
        element.children[0].style.transform='rotate(0deg)';
        del_content_faq(element);
    }
}
function add_content_faq(sibling)
{
    const content=document.createElement('div');
    content.classList.add('faq-content');
    content.innerText=add_text_to_content(sibling.id);
    sibling.after(content);
}
function del_content_faq(sibling)
{
    let content=sibling.nextElementSibling;
    if(content.classList.contains('faq-content'))
    {
        content.remove();
    }
}
function add_text_to_content(id)
{
    let return_val;
    switch(id)
    {
        case 'faq1':
            return_val='Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There\'s always something new to discover, and new TV shows and movies are added every week!';
            break;
        case 'faq2':
            return_val='Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.';
            break;
        case 'faq3':
            return_val='Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.';
            break;
        case 'faq4':
            return_val='Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.';
            break;
        case 'faq5':
            return_val='Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.';
            break;
        case 'faq6':
            return_val='The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.';
            break;
        default:
            return_val='cancel';
    }
    return return_val;
}
addEvent_to_faq();
parent_scroll.addEventListener('scroll', check_scroll_condition);
check_scroll_condition();
