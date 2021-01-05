    var wordlist2 = ["abuse","abstract","absurd","exhibit","expose...to~","reveal","reward","prejudice","burden",
    "defect","obstacle","be an abstract to ...","threat"];//13

    var jaword2 = ["虐待","抽象的","不合理な","を展示する","を(危険に)さらす","を明らかにする","に報いる","偏見",
    "重荷","欠点","障害物","...の障害になる","脅かすもの"];



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
         random = Math.floor( Math.random() * wordlist2.length );
         word.innerHTML = wordlist2[random];//->英単語
         japanese.innerHTML =jaword2[random];//英単語(打ち込む用)
         charInsort();
     }

     function charInsort(){
         word_char = wordlist2[random].charAt(char_num);
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
 if(e.keyCode == 190){
    keyStr = ".";
}else if(e.keyCode == 222){
    keyStr = "~";
}else{
    var keyStr = String.fromCharCode(e.keyCode);
    keyStr = keyStr.toLowerCase();
 }
    if(keyStr == word_char){
        word.innerHTML="<span style='color:blue;'>"+wordlist2[random].substr(0,char_num+1)+"</span>"+wordlist2[random].substr(char_num+1,wordlist2[random].length);
        char_num++;
        correct++;
        charInsort();
       }else{
        mistake++;
       }
    if(char_num == wordlist2[random].length){
        char_num = 0;
        wordDisplay();
       }
};

