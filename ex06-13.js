
 function ChangeImageAndBack(){
 
   imgback();
 
   ThreeSecChange2();
 
 }
 
  function ThreeSecChange2(){
   setTimeout("imgchange2()",3000); 
  }
  function imgchange28(){
    document.getelementById('img13').src = './image/josai.png';
  }
  
//function ThreeSecBack() {
//関数imgchange1()を3000ミリ秒間隔で呼び出す
// setInterval('img13').src = './image/josai1.png';
//}

function imgback() {
  document.getElementById('img13').src = './image/josai1.png';
}