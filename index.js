// console.log('hI');
let a = confirm('DO YOU WANT TO START THE GAME 😄');

// if(a){
// console.log('Started');
let num = document.getElementById('input');
// console.log(num)
if(a){
var rand = Math.floor(((Math.random())*10+1)*2 -1 );
console.log(rand);
}
var cnt =5;  
let p=document.createElement('p');
// p.innerText="WON";
let pos =document.querySelector('.result');
pos.appendChild(p);   
const startGame = ()=>
{      let input = document.getElementById('input');
if(input.value > 20 || input.value < 1)
{
    alert('INVALID INPUT ');
    // window.location.reload();
}
    if(cnt <= 0)
    {
        
        setTimeout(() => {
          
            if(confirm(' LETS TRY AGAIN 😃'))
            {
                p.innerText = ' TRY AGAIN 😆,WANT MORE';
         window.location.reload();
    
            }
            else
            return;
               
           }, 2000);
            p.innerHTML=`YOU LOST  😏 BETTER LUCK NEXT TIME <br/> `;
           console.log('WON, Chance Remainning '+cnt);

    }
    console.log(rand);
  
        if(input.value == rand)
        {
           setTimeout(() => {
          
            if(confirm(' WANT MORE THILLING 😃'))
            {
                p.innerText = ' TRY AGAIN 😆,WANT MORE';
         window.location.reload();
    
            }
            else
            return;
               
           }, 2000);
            p.innerHTML=`Congratulation 🥳 Man You have Won The GAME ,<br/> Chance Remainning `+cnt;
           console.log('WON, Chance Remainning '+cnt);
        //    break;
        }
        else if(input.value < rand)
        {  cnt=cnt-1;
            if(cnt <= 0)
            {
                // p.innerText="LOSE, Chance Remainning "+cnt;
                setTimeout(() => {
                  
                    if(confirm(' LETS TRY AGAIN 😃'))
                    {
                        p.innerText = ' TRY AGAIN 😆,WANT MORE';
                 window.location.reload();
            
                    }
                    else
                    return;
                       
                   }, 2000);
                    p.innerHTML=`YOU LOST 😏 BETTER LUCK NEXT TIME <br/> `;
                   console.log('WON, Chance Remainning '+cnt);
        
            }
            else
            
           
            p.innerText="GO UP, Chance Remainning "+cnt;
           

            // break;
           
        }
        else
        {  cnt =cnt-1;
            if(cnt <= 0)
            {
                // p.innerText="LOSE, Chance Remainning "+cnt;
                setTimeout(() => {
                  
                    if(confirm(' LETS TRY AGAIN 😃'))
                    {
                        p.innerText = ' TRY AGAIN 😆,WANT MORE';
                 window.location.reload();
            
                    }
                    else
                    return;
                       
                   }, 2000);
                    p.innerHTML=`YOU LOST 😏 BETTER LUCK NEXT TIME <br/> `;
                   console.log('WON, Chance Remainning '+cnt);
        
            }
            else
           
            p.innerText="GO DOWN, Chance Remainning "+cnt;
           

            console.log(`Go DOWN ${cnt}`);
            // break;   
           
        }

    

}
