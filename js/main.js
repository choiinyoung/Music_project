//패널 돌리기
const frame = document.querySelector("section");
const articleArr = frame.querySelectorAll("article");
const len = articleArr.length;
const deg = 360 /len;

console.log(articleArr);

const names = ["cardio","groove","happy","light","lily","limes","pop","swing"];

for(let i = 0;i<len; i++){
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`
  
  //사진 부분 일괄 적용
  const pic = articleArr[i].querySelector(".pic");
  pic.style.backgroundImage = `url("../img/${names[i]}.jpg")`;
}

// Prev Next 버튼 액션 처리
const prev = document.querySelector(".btnPrev");  
const next = document.querySelector(".btnNext");

let num = 0;  //값이 변해서 let으로 변수 선언 -> 회전각도 조절용
let active = 0;   //활성화 패널 위치 기억용
prev.addEventListener("click", function () {
  frame.style.transform = `rotate(${deg * ++num}deg)`;

  if (active === 0) {
    active = len - 1;
  } else {
    active--;
  }

  for (let el of articleArr) {
    el.classList.remove("on");
  }
  articleArr[active].classList.add("on");
});

next.addEventListener("click", function () {
  frame.style.transform = `rotate(${deg * --num}deg)`;

  if (active === len-1){
    active = 0;
  } else {
    active ++;
  }

  for (let el of articleArr) {
    el.classList.remove("on");
  }
  articleArr[active].classList.add("on")
});

