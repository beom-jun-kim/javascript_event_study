// 1 구글에서 이벤트 검색법, console.dir()로찾기,addEventListener 쓰는이유
// const title = document.querySelector('.box h1');

// function handleEvent(){
//     title.style.color = 'blue';
// }
// function handleMouseEnter(){
//     title.innerText = '마우스 여기있다';
// }
// function handleMouseLeave(){
//     title.innerText = '마우스 떠났다';
// }
// function handleMouseResize(){
//     document.body.style.backgroundColor = 'tomato';
// }
// function handleMouseCopy(){
//     alert('복사됨');
// }
// title.addEventListener('click', handleEvent);
// title.addEventListener('mouseenter',handleMouseEnter);
// title.addEventListener('mouseleave',handleMouseLeave);
// window.addEventListener('resize',handleMouseResize);
// window.addEventListener('copy',handleMouseCopy);


// // 2 getter,setter 개념과 쓰는이유 간단하게
// const title = document.querySelector('.box h1');

// function handleEvent(){
//     const currentColor = title.style.color; /* getter */
//     let newColor; /* setter */
//     if(currentColor === 'blue') {
//         newColor = 'tomato';
//     } else{
//         newColor = 'blue';
//     }
//     title.style.color = newColor;
// }
// title.addEventListener('click', handleEvent);

// // 3 raw string 가 나오면
// const title = document.querySelector('.box h1');

// function handleEvent(){
//     const changeColorClass = 'active';
//     if(title.className === changeColorClass){
//         title.className = '';
//     }else {
//         title.className = changeColorClass;
//     }
// }
// title.addEventListener('click', handleEvent);


// // 4 contains(),remove(),add()
// const title = document.querySelector('.box h1');

// function handleEvent() {
//     const changeColorClass = 'active';
//     if(title.classList.contains(changeColorClass)){
//         title.classList.remove(changeColorClass);
//     }else {
//         title.classList.add(changeColorClass);
//     }
// }

// title.addEventListener('click', handleEvent);

// 5 toggle() - 최종 간소화 코드
const title = document.querySelector('.box h1');

function handleEvent(){
    title.classList.toggle('active');
}

title.addEventListener('click', handleEvent);
