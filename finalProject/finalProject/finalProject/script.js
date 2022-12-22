$(document).ready(function (){

    $(".fish").each(function(){

        swim($(this));
    });

    $("body").click(function(ev){
        $(".fish").each(function(){
            position(this,ev.clientX, ev.clientY)

            $(this).stop()
            $(this).animate({

                left: (ev.clientX - 37) + "px",
                top: (ev.clientY - 37) + "px"
            },
            Math.random() * 500 + 1000,
            () =>  {setTimeout(() => {swim(this)}, 1000 + 1000)} 
            )
        });
    });
});

function swim(fish){
    let newLeft = Math.random()*(window.innerWidth-375);
    let newTop = Math.random()*(window.innerHeight-85);

    position(fish, newLeft, newTop);

    $(fish).animate({
        left: newLeft+"px",
        top: newTop+"px"
    }, 
    Math.random() * 1000 + 1000,
    () => {setTimeout(() => (swim(fish)), Math.random() * 1000)}
    );
}

function position (fish,newLeft, newTop){
    if(
        newLeft>$(fish).position().left && ((newTop+105)>=$(fish).position().top && (newTop-105)<=$(fish).position().top)){
            $(fish).css("transform","scaleX(-1)");
    }
    else
        if (newLeft<$(fish).position().left && ((newTop+105)>=$(fish).position().top && (newTop-105)<=$(fish).position().top)){
            $(fish).css("transform","scaleX(1)"); 
        }
    else 
        if (newTop<$(fish).position().top && ((newLeft+105)>=$(fish).position().left && (newTop-105)<=(fish).position().left)){
            $(fish).css("transform","rotate(90deg)"); 
        }
    else 
        if (newTop>$(fish).position().top && ((newLeft+105)>=$(fish).position().left && (newTop-105)<=(fish).position().left)){
            $(fish).css("transform","rotate(270deg)"); 
        console.log(1);
        }
    else 
        if (newLeft<$(fish).position().left && newTop<=$(fish).position().top){
            $(fish).css("transform","rotate(45deg)"); 
        }
    else 
        if (newLeft>$(fish).position().left && newTop<=$(fish).position().top){
            $(fish).css("transform","rotate(135deg)"); 
        }
     else 
        if (newLeft<$(fish).position().left && newTop>=$(fish).position().top){
            $(fish).css("transform","rotate(315deg)"); 
        }
     else 
        if (newLeft>$(fish).position().left && newTop>=$(fish).position().top){
            $(fish).css("transform","rotate(235deg)"); 
        }
}