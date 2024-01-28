function attachGradientEvents() {

const gradient=document.getElementById('gradient');

gradient.addEventListener('mousemove', gradientMove)

gradient.addEventListener('mouseout',gradientOut)


  function gradientMove (event){
    const gradienBoxWidth= event.target.clientWidth;
    const positionOfTheMouse=event.offsetX/ (gradienBoxWidth-1);
    const percantage = Math.trunc(positionOfTheMouse*100);
    document.getElementById('result').textContent=percantage+"%"
  }

  function gradientOut(event) {
    document.getElementById('result').textContent='';
  }
}