var ans="";
var sum="";
var sum2=0;
var tre=0;
var opt;
var flag=1;
for(var i=0; i<18; i++){
document.querySelectorAll(".bigbox .third button")[i].addEventListener("click",function(event){
    if(this.innerHTML==="Del"){
        if(ans.length===1){
            ans="0";
             sum="0";
        }else{
        ans= ans.slice(0,-1);
             sum=sum.substring(0,sum.length-1);
        }
    }else if(this.innerHTML==="reset"){
        ans="0";
        sum="0";
    }else if(this.innerHTML==="="){
         switch(opt){
                case "/": 
                 ans=sum2/Number(sum); ans=ans.toFixed(6); 
                 console.log(ans);
                break;
                case "*":  ans=sum2*Number(sum); ans=ans.toFixed(6) ;
                break;
                case "+":    ans=sum2+Number(sum); ans=ans.toFixed(6);
                break;
                case "-":   ans=sum2-Number(sum); ans=ans.toFixed(6);
                break;
                deafult: tre="nan";
        }
        sum=ans;
        console.log(opt,sum,sum2);
    }
    else if(this.innerHTML==="X" || this.innerHTML==="/" || this.innerHTML==="+" || this.innerHTML==="-"){
       ans+=this.innerHTML;
         switch(this.innerHTML){
                case "/": opt="/" ;
                break;
                case "X": opt= "*" ;
                break;
                case "+": opt="+";
                break;
                case "-": opt="-";
                break;
        }
        sum2=Number(sum);
        sum="";
    }else{
        sum+=this.innerHTML;
         if(ans==="0"){
             ans=this.innerHTML;
         }else{
         ans=ans+ this.innerHTML;
         }
         }
    
    change(ans);
    ans=ans.toString();
    sum=sum.toString();
    
})
}
function change(a){
    document.querySelector(".bigbox .second input").value=a;
}


var cnt=1;
document.querySelector(".bigbox .first .togg").addEventListener("click",function(){
 cnt++;
        if(cnt<=3 && cnt===2){
           theme1();
        }else if(cnt<=3 && cnt==3) {theme2();}
        else {cnt=1; theme3();}
       

});


var x =window.matchMedia("(max-width: 600px)");
x.addEventListener("change", function() {
    if(x.matches){
        if(cnt==1){
            move6();
         }else if(cnt==2) {move4();}
         else {move5();}
    
    }else{
        
            if(cnt==1){
                move3();
            }else if(cnt==2) { move1();}
            else {move2();}
           
    }

  });





function theme1(){
       document.querySelector("body").style.backgroundColor="hsl(0, 0%, 90%)";
       document.querySelector(".bigbox .third").style.backgroundColor="hsl(0, 5%, 81%)";
       document.querySelector(".bigbox .first .togg").style.backgroundColor="hsl(0, 5%, 81%)";
       document.querySelector(".bigbox .second input").style.backgroundColor=" hsl(0, 0%, 93%)";
       document.querySelector(".bigbox .third .g").style.backgroundColor=" hsl(45, 7%, 89%)";
       document.querySelector(".bigbox .third button").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .one").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .two").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .three").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .four").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .five").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .six").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .sev").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .eight").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .nine").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .zero").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .plus").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .sub").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .div").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 document.querySelector(".bigbox .third .X").style.boxShadow=" 3px 3px hsl(35, 11%, 61%)";
 
       document.querySelector(".bigbox .third .Del").style.backgroundColor="hsl(185, 58%, 25%)";
       document.querySelector(".bigbox .third .Del").style.boxShadow="4px 4px hsl(185, 42%, 37%)";
       document.querySelector(".bigbox .third .reset").style.boxShadow="4px 4px  hsl(185, 42%, 37%)";
       document.querySelector(".bigbox .third .equal").style.backgroundColor=" hsl(25, 98%, 40%)";
       document.querySelector(".bigbox .third .reset").style.backgroundColor=" hsl(185, 58%, 25%)";
       document.querySelector(".bigbox .first").style.color=" hsl(60, 10%, 19%)";
       
       document.querySelector(".bigbox .third .g").style.color="  hsl(60, 10%, 19%)";
       document.querySelector(".bigbox .second input").style.color="hsl(60, 10%, 19%)";
       document.querySelector(".bigbox .third .reset").style.color=" hsl(35, 11%, 61%)";
       document.querySelector(".bigbox .third .equal").style.color=" hsl(35, 11%, 61%)";
       document.querySelector(".bigbox .third .equal").style.boxShadow="4px 4px hsl(25, 99%, 27%)";
      document.querySelector(".bigbox .third .Del").style.color=" hsl(35, 11%, 61%)";
     if(x.matches) move4();
     else move1();
      
    }      




    function theme2(){
        document.querySelector("body").style.backgroundColor=" hsl(268, 75%, 9%)";
        document.querySelector(".bigbox .third").style.backgroundColor="hsl(268, 75%, 9%)";
        document.querySelector(".bigbox .first .togg").style.backgroundColor="hsl(268, 75%, 9%)";
        document.querySelector(".bigbox .second input").style.backgroundColor="hsl(268, 71%, 12%)";
        document.querySelector(".bigbox .third .g").style.backgroundColor=" hsl(281, 89%, 26%)";
        document.querySelector(".bigbox .third button").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .one").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .two").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .three").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .four").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .five").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .six").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .sev").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .eight").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .nine").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .zero").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .plus").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .sub").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .div").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  document.querySelector(".bigbox .third .X").style.boxShadow=" 3px 3px hsl(290, 70%, 36%)";
  
        document.querySelector(".bigbox .third .Del").style.backgroundColor="hsl(285, 91%, 52%)";
        document.querySelector(".bigbox .third .Del").style.boxShadow="4px 4px hsl(281, 89%, 26%)";
        document.querySelector(".bigbox .third .reset").style.boxShadow="4px 4px hsl(281, 89%, 26%)";
        document.querySelector(".bigbox .third .equal").style.backgroundColor=" hsl(176, 100%, 44%)";
        document.querySelector(".bigbox .third .reset").style.backgroundColor=" hsl(285, 91%, 52%)";
        document.querySelector(".bigbox .second input").style.color="white";

        document.querySelector(".bigbox .first").style.color="  hsl(52, 100%, 62%)";
        document.querySelector(".bigbox .third .g").style.color="  hsl(52, 100%, 62%)";
        document.querySelector(".bigbox .third .reset").style.color=" hsl(198, 20%, 13%)";
        document.querySelector(".bigbox .third .equal").style.color=" hsl(198, 20%, 13%)";
        document.querySelector(".bigbox .third .equal").style.boxShadow="4px 4px (177, 92%, 70%)";
        document.querySelector(".bigbox .third .Del").style.color=" hsl(198, 20%, 13%)";
        if(x.matches) move5();
        else move2();
       
     } 


     

    function move1(){
        let id=null;
        const elem=document.getElementById("mover");
        clearInterval(id);
        let pos=646;
        setInterval(frame,25);
        function frame(){
            if(pos==671){
             clearInterval(id);
            }else{
                pos++;
                elem.style.left=pos+"px";
            }
        }
      }


      function move4(){
        let id=null;
        const elem=document.getElementById("mover");
        clearInterval(id);
        let pos=294;
        setInterval(frame,25);
        function frame(){
            if(pos==312){
             clearInterval(id);
            }else{
                pos++;
                elem.style.left=pos+"px";
            }
        }
      }

      function move2(){
        let id=null;
        const elem=document.getElementById("mover");
        clearInterval(id);
        let pos=671;
        setInterval(frame,25);
        function frame(){
            if(pos==702){
             clearInterval(id);
            }else{
                pos++;
                elem.style.left=pos+"px";
            }
        }
      }
      
      function move5(){
        let id=null;
        const elem=document.getElementById("mover");
        clearInterval(id);
        let pos=312;
        setInterval(frame,25);
        function frame(){
            if(pos==326){
             clearInterval(id);
            }else{
                pos++;
                elem.style.left=pos+"px";
            }
        }
      }


      function move3(){
        let id=null;
        const elem=document.getElementById("mover");
        clearInterval(id);
        let pos=702;
        setInterval(frame,15);
        function frame(){
            if(pos==646){
             clearInterval(id);
            }else{
                --pos;
                elem.style.left=pos+"px";
            }
        }
      }


      function move6(){
        let id=null;
        const elem=document.getElementById("mover");
        clearInterval(id);
        let pos=324;
        setInterval(frame,15);
        function frame(){
            if(pos==294){
             clearInterval(id);
            }else{
                --pos;
                elem.style.left=pos+"px";
            }
        }
      }

    function theme3(){
      document.querySelector("body").style.backgroundColor="hsl(222, 26%, 31%)";
      document.querySelector(".bigbox .third").style.backgroundColor="hsl(223, 31%, 20%)";
      document.querySelector(".bigbox .first .togg").style.backgroundColor="hsl(223, 31%, 20%)";
      document.querySelector(".bigbox .second input").style.backgroundColor=" hsl(223, 31%, 20%)";
      document.querySelector(".bigbox .third .g").style.backgroundColor=" hsl(30, 25%, 89%)";
      document.querySelector(".bigbox .third button").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .one").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .two").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .three").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .four").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .five").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .six").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .sev").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .eight").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .nine").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .zero").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .plus").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .sub").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .div").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";
document.querySelector(".bigbox .third .X").style.boxShadow=" 3px 3px hsl(28, 16%, 65%)";

      document.querySelector(".bigbox .third .Del").style.backgroundColor="hsl(225, 21%, 49%)";
      document.querySelector(".bigbox .third .Del").style.boxShadow="4px 4px  hsl(224, 28%, 35%)";
      document.querySelector(".bigbox .third .reset").style.boxShadow="4px 4px  hsl(224, 28%, 35%)      ";
      document.querySelector(".bigbox .third .equal").style.backgroundColor=" hsl(6, 63%, 50%)";
      document.querySelector(".bigbox .third .reset").style.backgroundColor=" hsl(225, 21%, 49%)";
      document.querySelector(".bigbox .first").style.color=" white";
      document.querySelector(".bigbox .second input").style.color="white";

      document.querySelector(".bigbox .third .g").style.color="  hsl(221, 14%, 31%)";
      
      document.querySelector(".bigbox .third .reset").style.color="hsl(0, 0%, 100%)";
      document.querySelector(".bigbox .third .equal").style.color="hsl(0, 0%, 100%)";
      document.querySelector(".bigbox .third .equal").style.boxShadow="4px 4px  hsl(6, 70%, 34%)";
     document.querySelector(".bigbox .third .Del").style.color="hsl(0, 0%, 100%)";
     if(x.matches) move6();
     else move3();
    }