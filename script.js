//maxLengthで指定した桁数まで入力されたら、フォーカスを移動する
function setNextFocus(obj) {
    if (obj.value.length >= obj.maxLength) {
        var es = document.myForm.elements;
        for (var i = 0; i < es.length; i++) {
            if (es[i] == obj) {
                es[i + 1].focus();
                break;
            }
        }
    }
}

//単価を計算して表示する
function calc() {
    //入力したA量の値を取得
    var a_amount = document.myForm.a_amount.value;
    //入力したA値段の値を取得
    var a_price = document.myForm.a_price.value;
    //Aの単価を計算
    var a_unit_price = a_price / a_amount;
    a_unit_price = a_unit_price * 1000;
    a_unit_price = Math.round(a_unit_price);
    a_unit_price = a_unit_price / 1000;

    //入力したB量の値を取得
    var b_amount = document.myForm.b_amount.value;
    //入力したB金額の値を取得
    var b_price = document.myForm.b_price.value;
    //Bの単価を計算
    var b_unit_price = b_price / b_amount;
    b_unit_price = b_unit_price * 1000;
    b_unit_price = Math.round(b_unit_price);
    b_unit_price = b_unit_price / 1000;

    //判定を格納する変数
    var result;

    //どちらが安いか判定
    if (a_unit_price == b_unit_price) {
        result = "どちらも同じ値段です。";
    }
    else if (a_unit_price < b_unit_price) {
        result = "A商品のほうが安いです。";
    }
    else {
        result = "B商品のほうが安いです。";
    }

    //ボタンが押されたら、画像を表示する。
	const img1 = document.getElementById("img1");

	if(img1.style.display=="none"){
		// noneで非表示
		img1.style.display ="none";
	}else{
		// blockで表示
		img1.style.display ="block";
	}

    //結果を代入する
    a_unit_price = "A商品の単価は" + a_unit_price + "円。";
    b_unit_price = "B商品の単価は" + b_unit_price + "円。";

    //idがa_unit_priceの部分に結果を表示
    document.getElementById("a_unit_price").innerHTML = a_unit_price;

    //idがb_unit_priceの部分に結果を表示
    document.getElementById("b_unit_price").innerHTML = b_unit_price;

    //idがresultの部分に判定結果を表示
    document.getElementById("result").innerHTML = result;
}
