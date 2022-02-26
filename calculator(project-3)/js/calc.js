let keys=document.querySelectorAll('.btn')
for(let x of keys){
    x.addEventListener('click',function(){
      let value=this.innerHTML
      
       if(value=='AC'){
           document.querySelector('#screen').innerHTML='';
       }


       else if(value=='C'){
          let a=document.querySelector('#screen').innerHTML
          a=a.slice(0,-1)
          document.querySelector('#screen').innerHTML=a;
        }
        
        else if(value=='='){
           let result=document.querySelector('#screen').innerHTML
           result=eval(result)
           document.querySelector('#screen').innerHTML=result
       }

       
       else{
        document.querySelector('#screen').innerHTML+=value
       }

    })
}
