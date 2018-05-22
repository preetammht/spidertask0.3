let x=["With the new day comes new strength and new thoughts It does not matter how slowly you go as long as you do not stop ",
      "The past cannot be changed. The future is yet in your power You can't cross the sea merely by standing and staring at the water",
      "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth"]
let st=x[ Math.floor((Math.random() * 10) )%3];
let z=  document.getElementById("reftxt")
  z.innerHTML = st;

let a=0;
let ct=0;
var h;
var c,d;

input.addEventListener("keypress", fun1);
function fun1(event)
{if(a===0)
	c = new Date();
if (String.fromCharCode(event.which) === st[a])
   {if(ct==1) input.value=h;
    if(event.which === 32)
    	input.value="";
    if(a==st.length-1)
    	{d= new Date();
    	 fun2();
    	 return;}   	 
    a++;
    ct=0;	 
    }
else{if(ct==0)
	h=input.value;
	input.value=h;
     ct=1;}
}
function fun2()
{document.getElementById("sped").innerHTML = "Time taken="+(d.getTime()-c.getTime())/1000 +" sec      So your typing speed="+st.length*1000/(d.getTime()-c.getTime())+" chars/sec";}