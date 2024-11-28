
// ①部品を作る
function timetostring(millis) {
    const ms = millis % 1000;
    const s = Math.floor(millis / 1000) % 60;
    const m = Math.floor(millis / 1000 / 60) % 60;
    const h = Math.floor(millis / 1000 / 60 / 60) % 60;

    const formattedMs = ms.toString().slice(0, 1);
    const formattedS = s.toString().padStart(1,'0');
    const formattedM = m.toString().padStart(1,'0');
    const formattedH = h.toString().padStart(1,'0');

    return `${formattedH}:${formattedM}:${formattedS}:${formattedMs}`;
}

// ②部品を機能させる
// グローバルスコープ　
let timer = null;
let elapsedMs = 0;
const time = document.getElementById('time');

// ローカルスコープ
const start = document.getElementById('start');
start.addEventListener('click', () => {
    if (timer !== null) return; //timerがnullでなかったら何もしない
    console.log("start");
    let startMs = Date.now()- elapsedMs; //スタート時に経過時間を考慮
    timer = setInterval(() => {
        const nowMs = Date.now();
        elapsedMs = nowMs - startMs; //経過時間からo地点の時間を差分することで本来の経過時間定義
        time.textContent = timetostring(elapsedMs); //id(time)上に結果を表示
        console.log(elapsedMs);
    }, 100);
});

const stop = document.getElementById('stop');
stop.addEventListener('click', () => {
    clearInterval(timer);
    console.log("stop");
    timer = null; //タイマーIDをリセット
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    clearInterval(timer);
    elapsedMs = 0;
    time.textContent = timetostring(elapsedMs);
    console.log("reset");
    timer = null; //タイマーIDをリセット
});


// ●流れの解説
// ①関数(timetostring)において、0:0:0:0をh、m、s、msでそれぞれ定義し、変数(formatted)に文字化データに格納。
//  そして、テンプレートリテラルで時間：分：秒：ミリ秒をマージン
// ②関数(timetostring)を引数(elapsedMs)に渡して、指定したid(time)上で実装させている



