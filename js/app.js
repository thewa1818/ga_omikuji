const kekka = ["大吉", "吉", "中吉", "凶", "大凶"];
const omikuji = $("#omikuji");
const btn = $("#btn");
const comment = $("#comment");

$(btn).on("click", function () {
  const random = kekka[Math.floor(Math.random() * kekka.length)];

  if (random.includes("吉")) {
    $(comment).html("やったね");
  } else if (random.includes("凶")) {
    $(comment).html("どんまい");
  }

  const html = `${random}です`;

  $(omikuji).html(html);
});

//クイズ

const quizItems = [
  [
    "すき家の期間限定メニューは？",
    "1,３種のチーズ牛丼",
    "2,明太高菜牛丼",
    "3,にんにくの芽牛丼",
    "3",
  ],

  ["カレーが一番おいしい牛丼屋は？", "1,松屋", "2,すき家", "3,吉野家", "1"],

  [
    "吉野家が最近力を入れているのは？",
    "1,ハンバーグ",
    "2,からあげ",
    "3,オムライス",
    "2",
  ],
];

const question = $("#question");
const ans1 = $("#ans1");
const ans2 = $("#ans2");
const ans3 = $("#ans3");
let count = 0;
let qizCount = 0;

function setQuiz() {
  question.html(quizItems[qizCount][0]);
  ans1.html(quizItems[qizCount][1]);
  ans2.html(quizItems[qizCount][2]);
  ans3.html(quizItems[qizCount][3]);
}

setQuiz();

function check(ans) {
  if (ans == quizItems[qizCount][4]) {
    alert("正解");
    count++;
  } else {
    alert("不正解");
  }
  qizCount++;

  if (qizCount === quizItems.length) {
    question.html(`正解数は${count}でした`);
    ans1.html("");
    ans2.html("");
    ans3.html("");
    $("#btn-box").hide();
    $("#btn4").css("display", "block");
  } else {
    setQuiz();
  }
}

$("#btn4").on("click", function () {
  window.location.reload();
});

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }

  const words = [
    "function",
    "const",
    "let",
    "typing",
    "dev",
    "react",
    "index",
    "javascript",
    "programming",
  ];
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById("target");
  const resetButton = document.getElementById("reset");

  resetButton.style.display = "none";

  document.addEventListener("click", () => {
    if (isPlaying === true) {
      return;
    }

    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== word[loc]) {
      return;
    }

    loc++;

    target.textContent = "_".repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById("result");
        const reset = document.getElementById("reset");
        result.textContent = `終了! ${elapsedTime} 秒かかりました!`;
        resetButton.style.display = "block";
        return;
      }

      setWord();
    }
  });
  resetButton.addEventListener("click", () => {
    window.location.reload();
  });
}
