Draggable.create(".dr1",{
    type:"x", 
     bounds:".dragable", 
     inertia:true})


     function overlap(){
        var drg = document.querySelector(".dr1"); 
        var targett = document.querySelector(".dr2"); 
        var dr = drg.getBoundingClientRect(); 
        var trvalue  = targett.getBoundingClientRect();
        if(dr.right > trvalue.left){
          document.querySelector("#video1").style.opacity = 0;
        }
        else{
            document.querySelector("#video1").style.opacity =1;
        }
     }
     window.addEventListener("mousemove",overlap);

  