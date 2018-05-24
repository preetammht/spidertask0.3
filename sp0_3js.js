let x=["With the new day comes new strength and new thoughts It does not matter how slowly you go as long as you do not stop ",
      "The past cannot be changed. The future is yet in your power You can't cross the sea merely by standing and staring at the water",
      "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth"]
let st=x[ Math.floor((Math.random() * 10) )%3];
let z=  document.getElementById("nothg");
  z.innerHTML = st;

let cur= document.getElementById("corr");
let wng= document.getElementById("wrng") ;
var cu="";
var wn="";
var noth="";

let a=0;
let ct=0;
var h;
var c,d;

input.addEventListener("keypress", fun1);
function fun1(event)
{if(a===0)
	c = new Date();
if (String.fromCharCode(event.which) === st[a])
   {
   	for(let i=0;i<=a;i++)
       cu=cu+st[i];
    for(let j=a+1;j<st.length;j++)
       noth=noth+st[j];   
    cur.innerHTML=cu;
    wng.innerHTML="";
    z.innerHTML=noth;
    cu="";
    noth=""; 

   	if(ct==1) input.value=h;
    if(event.which === 32)
    	input.value="";
    if(a==st.length-1)
    	{d= new Date();
    	 fun2();
    	 return;}   	 
    a++;
    ct=0;	 
    }
else{
     wn=st[a];
     for(let v=a+1;v<st.length;v++)
       noth=noth+st[v];
       wng.innerHTML=wn;
       z.innerHTML=noth;
       noth="";    
	
	if(ct==0)
	h=input.value;
	input.value=h;
     ct=1;}
}
function fun2()
{document.getElementById("sped").innerHTML = "Time taken=  "+(d.getTime()-c.getTime())/1000 +" sec";
document.getElementById("sped1").innerHTML = " So your typing speed=  "+st.length*1000/(d.getTime()-c.getTime())+" chars/sec";}