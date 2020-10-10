$(function(){
  //一度結果を非表示にする
  $(".result").hide();
  //ボタンがクリックされた時
  $("button").click(function(){


    //問題数を取得
    var qNum = $("ul li").length;

    if( $("ul li input:checked").length < qNum ){
      //全てチェックしていなかったらアラートを出す
      alert("未回答の問題があります");
    } else {
      //チェックされているinputの数を取得
      var typeANum = $(".typeA:checked").length,
      typeBNum = $(".typeB:checked").length,
      typeCNum =$(".typeC:checked").length,
      typeDNum =$(".typeD:checked").length,
      typeENum =$(".typeE:checked").length,
      typeFNum =$(".typeF:checked").length,
      typeGNum =$(".typeG:checked").length,
      typeHNum =$(".typeH:checked").length,
      typeINum =$(".typeI:checked").length,
      typeJNum =$(".typeJ:checked").length,
      yesNum =$(".yes:checked").length,
      noNum =$(".no:checked").length;
      pr1Num =$(".pr1:checked").length;
      pr2Num =$(".pr2:checked").length;



      if(yesNum == 5 || pr1Num >= 1 && pr2Num >= 1) {
        $(".resultD").fadeIn();
      }else if (typeANum || typeINum) {
        $(".resultA").fadeIn();
      }else if (typeCNum && typeENum) {
        $(".resultB").fadeIn();
      }else if (typeGNum) {
        $(".resultC").fadeIn();
      }else if (typeENum){
        $(".resultE").fadeIn();
      }

    }
  });
});
