const request = new XMLHttpRequest();
const checkwebb = document.querySelector('.checkweb')
checkwebb.addEventListener('click', () => {
   request.addEventListener('readystatechange', ()=>{
    if(request.readyState ===4 && request.status ===200){
        console.log(request.status);
    }
 });
  request.open('GET', 'http://www.google.com');
})