
for(let i=0;i<18;i++){
    $("#container").html($("#container").html()+'<img src="img/p.png" alt="" class="card">');
   
}

$(".card").slideUp(0);
let num =0;
let cards =  $(".card");
let timer = setInterval(function(){
    $(cards).eq(num).slideDown(200);
    if(num==19) clearInterval(timer);
num++;
},100);

// let timer = setInterval(function(){
//     $(cards).eq(num).slideDown(0);
//     if(num==19) clearInterval(timer);
// num++;
// },10);

//Добавление карт в массив

let cardsPath = [
   {path:"img/7.png"},{path:"img/6.png"},
    {path:"img/1.png"},{path:"img/4.png"},
    {path:"img/2.png"},{path:"img/2.png"},
    {path:"img/5.png"},{path:"img/1.png"},
    {path:"img/8.png"},{path:"img/4.png"},
    {path:"img/9.png"},{path:"img/5.png"},
    {path:"img/6.png"},{path:"img/7.png"},
    {path:"img/3.png"},{path:"img/8.png"},
    {path:"img/3.png"},{path:"img/9.png"},
    
]

// Открытие всех карт для запоминания
setTimeout(function(){
        opening("all");
        
},2000);




//Функция открытия карт, имеет два ключа - ивент в случае нажатия на конкретную карту и all 
//для открытия всех карт для запоминания

let firstC=-1,secondC=-1,count=0;

let allCards =0;

function opening(key){
        if(key == "all"){
            mix();
                    for(let i=0;i<18;i++){
                    
                            $(cards[i]).css("transform","rotateY(-90deg)");
                            setTimeout(function(){
                                $(cards[i]).attr("src",cardsPath[i].path);
                                
                            },400);
                            setTimeout(function(){
                                $(cards[i]).css("transform","rotateY(0deg)");
                                
                            },400);

                    }

                    setTimeout(function(){

                        $(".card").css("transform","rotateY(-90deg)");
                        setTimeout(function(){
                            $(".card").attr("src","img/p.png");
                            
                        },400);
                        setTimeout(function(){
                            $(".card").css("transform","rotateY(-180deg)");
                            
                        },400);
                    },3500);



        } else {

            // Тут начинается функция нажатия на одиночную карту
            // firstC и secondC это первая и вторая нажатая карта

            // currentCard это карта по которой нажали только что

                let currentCard = key.target;
                $(currentCard).css("transform","rotateY(-90deg)");
                setTimeout(function(){
                    $(currentCard).attr("src",cardsPath[$(currentCard).index()].path);
                    
                },400);
                setTimeout(function(){
                    $(currentCard).css("transform","rotateY(0deg)");
                    
                },400);

                        setTimeout(()=>{

                                if(firstC==-1&&secondC==-1){
                                    firstC=$(currentCard).index();
                                
                                } else if(firstC!=-1&&secondC==-1){

                                    secondC=$(currentCard).index();
                                    

                                    //Сравнение путей двух выбранных карт, если совпадают то они обе пропадают. Если же нет, то они обратно закрываются.

                                        if(cardsPath[firstC].path==cardsPath[secondC].path){
                                            setTimeout(()=>{
                                            $(cards[firstC]).animate({opacity:"0"},300);
                                            $(cards[secondC]).animate({opacity:"0"},300);


                                               
                                                // for(let i=0;i<18;i++){
                                                //     if(cards[i].css("opacity")=="0") allCards++;

                                                //     if(allCards==18) clearInterval(seconds);
                                                // }

                                                allCards++;
                                                console.log(allCards);
                                                if(allCards==9){
                                                    clearInterval(seconds)
                                                    $("#tablo_time").css("color","yellow");
                                                };

                                            firstC=-1;
                                            secondC=-1;
                                            count++;
                                            $("#tablo_count").html("Count: "+count);
                                        },400);
                                        
                                    
                                            // console.log(firstC);
                                            // console.log(cardsPath[firstC].path+" : "+cardsPath[secondC].path);
                                            // console.log(secondC);
                                            // setTimeout(()=>{
                                        
                                        // },300);
                                    
                                        } else if(cardsPath[firstC].path!=cardsPath[secondC].path){


                                            //////////////////////////
                                            //////////////////////////
                                            //////////////////////////

                                            setTimeout(()=>{
                                                    $(cards[secondC]).css("transform","rotateY(-90deg)");   
                                                    $(cards[firstC]).css("transform","rotateY(-90deg)");
                                                
                                                },400)
                                                let s= setTimeout(()=>{
                                                        $(cards[firstC]).attr("src","img/p.png");
                                                        $(cards[secondC]).attr("src","img/p.png");
                                                    },800);
                                                    let m =setTimeout(()=>{
                                                        $(cards[firstC]).css("transform","rotateY(0deg)");
                                                        $(cards[secondC]).css("transform","rotateY(0deg)");
                                                    

                                                        // console.log(firstC);
                                                        // console.log(cardsPath[firstC].path+" : "+cardsPath[secondC].path);
                                                        // console.log(secondC);


                                                        firstC=-1;
                                                        secondC=-1;
                                                        count++;
                                                        $("#tablo_count").html("Count: "+count);
                                                    },800);
                                    
                                            //////////////////////////
                                            //////////////////////////
                                            //////////////////////////

                                        
                                                

                                                

                                        }
                            
                        }
                    },500);
        }
}


//Отложенное присваивание кликов по картам для предотвращения клика по картам в момент анимаций

setTimeout(function(){
        $(".card").on("click",function(event){
            opening(event)
        })
        
        secondomer();


},6200);


// Перемешивание масива с путями для карт

let temp ="", n1,n2;

function mix(){
    for(let i=0;i<159;i++){
        n1 = Math.floor(Math.random()*18);
        n2 = Math.floor(Math.random()*18);
    temp = cardsPath[n1];
    cardsPath[n1]=cardsPath[n2];
    cardsPath[n2]=temp;
    }
}


// Секундомер

let seconds;
function secondomer(){
    let secs=0,mins =0,mil=0,secs_out,mins_out,mil_out;


    seconds = setInterval(function(){
        mil+=10;
        if(mil==100){secs++;mil=0};
        if(secs==60){mins++;secs=0};
        if(mil==0) mil_out="0"+mil; else mil_out=mil;
        if(secs<10)secs_out="0"+secs; else secs_out=secs;
        if(mins<10)mins_out="0"+mins; else mins_out=mins;
        $("#tablo_time").html("");
        $("#tablo_time").html(mins_out+":"+secs_out+":"+mil_out);
    },100);

}


// Кнопка рестарта игры

$('#restart').click(function() {
    location.reload();
});