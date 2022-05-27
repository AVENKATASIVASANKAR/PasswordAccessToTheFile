var username=document.getElementById('username');
var password=document.getElementById('password');
var submit=document.getElementById('submit');
username.addEventListener('input', function(e){
    var currentVal=e.target.val;
   var currentval=e.target.value.toUpperCase();
   document.getElementById('password').value=currentval;
});
submit.addEventListener('click',function(e){
   
})