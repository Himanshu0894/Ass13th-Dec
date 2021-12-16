let counter = [];
let cb = function () {
    counter++;
    document.getElementById('tim').innerText = counter;
}
let id1 =setInterval(cb,1000);
let stop_timer = document.getElementById('stop');
stop_timer.addEventListener('click',function(){
       clearInterval(id1);
});
let resume_timer = document.getElementById('resume');
resume_timer.addEventListener('click',function(){
    id1 = setInterval(cb,1000);
   // resume_timer.innerText = "Resume";
});
let reset_timer = document.getElementById('reset');
reset_timer.addEventListener('click',function(){
    clearInterval(id1);
    counter = 0;
    document.getElementById('tim').innerText = counter;
});
let restart_timer = document.getElementById("restart");
restart_timer.addEventListener('click',function(){
    counter = 0;
    document.getElementById('tim').innerText = counter;
})