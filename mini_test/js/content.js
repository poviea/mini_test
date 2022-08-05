const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        for (let j = 0; j < btns.length; j++) {
            boxs[j].classList.remove('on');
            btns[j].classList.remove('on');
        }
        boxs[i].classList.add('on');
        btns[i].classList.add('on');
    });
};
