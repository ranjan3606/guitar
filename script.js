function guitar(e){
    const audio =  document.querySelector(`audio[data-key="${e.keyCode}"]`); //create variable to and add queryselector to call auto keycode function
    const key =  document.querySelector(`.key[data-key="${e.keyCode}"]`); //create variable key name inwhich i call document querySeletor to key class and caall data-key pass e parameter with keycode

    if(!audio) return; // stop all function 
    audio.currentTime = 0; // start here again
    audio.play() //call play function
    key.classList.add('playing'); 
}

   function removesound(e){
       if(e.propertyName !== 'transform') return; // here property name not transform 
        this.classList.remove('playing'); //it is not work and remove click 
   }



const keys = document.querySelectorAll('.key')  //here use keys variable to all key class selector 
keys.forEach(key => key.addEventListener('transtioned', removesound)) // and foreach function run keys variable
window.addEventListener('keydown', guitar); // and call keydown and guitar function 

