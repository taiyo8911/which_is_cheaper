//入力フォームで最大桁の数値が入力されたら自動フォーカスする
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

    //入力したB量の値を取得
    var b_amount = document.myForm.b_amount.value;
    //入力したB金額の値を取得
    var b_price = document.myForm.b_price.value;
    //Bの単価を計算
    var b_unit_price = b_price / b_amount;

    //判定の文字列を格納する変数
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

    //表示するhtmlを作成
    var html = "<dl>";
    html += "<dd>" + result + "</dd>";
    html += "</dl>";

    //idがresultの部分にhtmlを表示
    document.getElementById("result").innerHTML = html;
}