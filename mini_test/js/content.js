const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

for(let i =0; i<btns.length; i++) {
    btns[i].addEventListener('click', () => {
        boxs[i].classList.add('on');
        btns[i].classList.add('on');
    });
};
for(let i =0; i<btns.length; i++) {
    btns[i].addEventListener('mouseout', () => {
        boxs[i].classList.remove('on')
        btns[i].classList.remove('on')
    });
};