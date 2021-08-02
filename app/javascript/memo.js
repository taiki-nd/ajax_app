function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    //new FormData(フォームの要素);のように記述することでオブジェクトを生成し、引数にフォームの要素を渡すことで、そのフォームに入力された値を取得
    const XHR = new XMLHttpRequest();
    //new XMLHttpRequest」と記述することで、新しくオブジェクトを生成
    XHR.open("POST", "/posts", true);
    //非同期で投稿したメモをデータベースに保存したいので、HTTPメソッドにはPOST
    //第一引数にはHTTPメソッド、第二引数にはパス、第三引数には非同期通信であるかをtrueかfalse
    XHR.responseType = "json";
    XHR.send(formData);
    //フォームに入力された内容をサーバー側に送信
  });
};

window.addEventListener('load', post);