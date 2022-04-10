import highway from '@dogstudio/highway';
import{Timelinelite} from 'gsap'; 


class fade extends highway.Transition{
    in({from,to,done}){
        const t1 = new Timelinelite();
        ti.fromTo(to,0.5,{left:"-100%",top: "50%" },{left: "0%"})
        .fromTo(to,0.5,{hight:"2vh"},{hight: "90vh", top:  "10%", onComplete:function(){ 
            from.remove();
        done();
            
        }}
    );



    }
    out(from,done){
        done();
    }

}


    
