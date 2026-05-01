//おみくじの結果を配列で用意
const fortunes =[
    "大吉　素敵な出会いがあるかも！",
    "末吉　趣味を話すと話が合うかも！",
    "中吉　少し勇気を出すと良いことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう",
];
const button = document.getElementById("omikuji-bt");
const result = document.getElementById("result");

button.addEventListener("click",function () {


const randomNumber = Math.floor(Math.random() * fortunes.lengt);
const resultText =fortunes[(randomnumber)]

result.textContent = fortunes[(randomNumber)];

if (resultText.includes("大吉")) {
     result.style.color = "red";
}else if(resultText.includes("中吉")) {
     result.style.color = "green" ;
}else {
  (result .style.color = "black")
}});