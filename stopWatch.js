
let min=0;
let hr=0;
let sec=0;
let count=0;
let running=false;

    function start(){
        running=true;
        stopWatch(); 

    };


    function stop(){
        running=false;       

    };


    function reset(){
        running=false;
        min=0;
        hr=0;
        sec=0;
        count=0;

        document.getElementById("hr").innerHTML=hr;
        document.getElementById("min").innerHTML=min;
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("count").innerHTML=count;

    }

    
    function stopWatch(){
        
        if(running==true){
            count=count+1;
        

             if(count == 100){
                sec = sec + 1;
                count = 0;

                if(sec == 60){
                    min = min + 1;
                    sec = 0;

                    
                if(min == 60){
                hr = hr + 1;
                min = 0;
                sec = 0;
                }


                }
            }

           

        

            document.getElementById("hr").innerHTML=hr;
            document.getElementById("min").innerHTML=min; 
            document.getElementById("sec").innerHTML=sec;
            document.getElementById("count").innerHTML=count;


            setTimeout( "stopWatch()" , 10);
        }
    }

    

  
