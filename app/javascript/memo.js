/*
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
    XHR.onload = () => {
      const formText = document.getElementById("content");
      const list = document.getElementById("list");
      const item = XHR.response.post;
      const html = `
        <div class="post">
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", html);
      formText.value = "";
    };
    //onloadプロパティとは、リクエストの送信が成功したときに呼び出されるプロパティ
  });
};

window.addEventListener('load', post);
*/

const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);