    var wordlist = ["context","consent","contract","contemporary","conpromise","companion","compete with",
                    "accompany","be accompany","correspond to","sufficient","stable","modest"];

    var jaword = ["文脈","同意","契約","同時代の(人)","妥協","仲間","...と競争する","に同行する","...が伴う",
    "…と一致する","十分な","安定した","控えめな"]//13

     var time_limit = 30;
     var readytime = 3;
     var score;
     var correct;
     var mistake;
     var char_num = 0;
     var word_char;
     var random;

     function ready(){
         readytime = 3;
         scoredis.innerHTML="";
         start_button.style.visibility ="hidden";
         var readytimer = setInterval(function(){
             count.innerHTML=readytime;
             readytime--;
             if(readytime < 0){
                clearInterval(readytimer);
                 gameStart();
                }
         },1000);
     }

     function gameStart(){
         score = 0.0;
         mistake = 0;
         correct = 0;
         wordDisplay();
         var time_remaining = time_limit;
         var gametimer = setInterval(function(){
            count.innerHTML="残り時間：" + time_remaining;
             time_remaining--;
             if(time_remaining <= 0){
             clearInterval(gametimer);
                 finish();
         }
         },1000);
     }

     function wordDisplay(){
         random = Math.floor( Math.random() * wordlist.length );
         word.innerHTML = wordlist[random];//->英単語
         japanese.innerHTML =jaword[random];//英単語(打ち込む用)
         charInsort();
     }

     function charInsort(){
         word_char = wordlist[random].charAt(char_num);
     }

     function finish(){
         score = Math.floor(Math.pow(correct,2) * Math.pow((correct/(correct+mistake)),5));
         scoredis.innerHTML = "スコア:" + score + "点<br>" + "正タイプ数:" + correct + "<br>ミスタイプ数:"+mistake+
                            "<br>startでリトライ";
         count.innerHTML="";
         word.innerHTML="";
         japanese.innerHTML="";
         start_button.style.visibility ="visible";
         word_char = 0;
         char_num = 0;
     }

document.onkeydown = function(e) {
 var keyStr = String.fromCharCode(e.keyCode);
    keyStr = keyStr.toLowerCase();
    if(keyStr == word_char){
        word.innerHTML="<span style='color:blue;'>"+wordlist[random].substr(0,char_num+1)+"</span>"+wordlist[random].substr(char_num+1,wordlist[random].length);
        char_num++;
        correct++;
        charInsort();
       }else{
        mistake++;
       }
    if(char_num == wordlist[random].length){
        char_num = 0;
        wordDisplay();
       }
};
