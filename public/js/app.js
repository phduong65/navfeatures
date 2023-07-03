const sections = document.querySelectorAll('section');
const sectionList = document.querySelectorAll('.slidebar ul li');

window.addEventListener('scroll',()=>{
 let current = '';
 sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= (sectionTop- sectionHeight /3)) {
        current = section.getAttribute('id')
    }
});
console.log(current);
 sectionList.forEach(li => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
        li.classList.add('active');
    }
 });
});

const title_header = document.querySelectorAll('.title-header');
title_header.forEach((element,index) => {
    element.addEventListener('click',function () {
        const svg = document.querySelectorAll('.main_content .content-feature .title-header svg')
        const title_content = document.querySelectorAll(' .main_content .content-feature .title-content');
        const img_content = document.querySelectorAll(' .main_content .content-feature .content-img');
        if (title_content[index].style.display == `block`) {
            title_content[index].style.display = `none`;
            img_content[index].style.display = `none`;
            svg[index].style.transform = `rotate(0deg)`;
        }
        else{
            title_content[index].style.display = `block`;
            img_content[index].style.display = `block`;
            svg[index].style.transform = `rotate(180deg)`;
        }
    })
});