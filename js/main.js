console.log('conectado al html')

window.onscroll = () =>{
    if(window.scrollY > 10){
        document.querySelector('#subirBtn').classList.add('active')
    }else{
        document.querySelector('#subirBtn').classList.remove('active')
    }
}