count=0;
let countEl=document.getElementById('count');
let saveEl=document.getElementById('saveValues');

function increment(){

    count +=1;
    countEl.textContent=count;
    
    
};


function Restart(){
    let newStr = "Previous Saved Values : ";
    countEl.textContent=0;
    saveEl.textContent = newStr;
}

function save(){

    let countsr=" "+ count + "   ,"; 
    saveEl.textContent +=countsr;
    countEl.textContent=0;
    count=0;


    console.log("count");
}


