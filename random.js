var r=Math.ceil(Math.random()*100);
console.log(r)
var c=0;
document.getElementById("check").onclick=function()
{
    var number=parseInt(document.getElementById("input").value);
    if(number==r){
        document.getElementById("message").innerHTML=" Conguralations..!you got it in "+c+" tries"
        document.querySelector(".box").style.backgroundColor = 'green';
        
    }
    else if(number>r){
        document.getElementById("message").innerHTML="your number is high.Hang in there. "
        c++;
        document.querySelector(".box").style.backgroundColor = 'red';
    }
    else    {
    document.getElementById("message").innerHTML="your number is low.you're getting there."
    c++;
    document.querySelector(".box").style.backgroundColor = 'red';
    }
}