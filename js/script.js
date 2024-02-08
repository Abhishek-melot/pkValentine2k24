// Modal code.
const modal = document.getElementById("modal");

function showDialog() {
  // document.body.style.overflow="hidden"
  modal.showModal();
}

function closeDialog() {
  modal.close();
  // document.body.style.overflow="auto"
}

// User and talent tabs switching code.

const tabs = document.querySelectorAll(".tab-btns > button");
let content = document.querySelectorAll(".tab-content");
// console.log(tabs);
tabs.forEach((tab, i) => {
  // console.log(tab);
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("active");
    });

    content.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
    tab.classList.add("active");
  });
});

// Reward Round button switching

const roundBtns = document.querySelectorAll(".reward-round-btns button");
const talentRewards = document.querySelectorAll(".talent-rewards");
// console.log(roundBtns);
roundBtns.forEach((tab, i) => {
  // console.log(tab);
  tab.addEventListener("click", () => {
    roundBtns.forEach((t) => {
      t.classList.remove("active");
    });

    talentRewards.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
    tab.classList.add("active");
  });
});

// User rewards

let rewardData = [
  "User receives 25% of total beans pot",
  "User receives 20% of total beans pot",
  "User receives 15% of total beans pot",
  "User receives 10% of total beans pot",
  "User receives 5% of total beans pot ",
];
let ranks = ["TOP 1", "TOP 2", "TOP 3", "TOP 4", "TOP 5-10"];

let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let rewardText = document.querySelector(".reward-text");

let prizes = document.querySelectorAll(".prizes-1");
let rewardContainer = document.querySelector(".rewards");
let currentId = +rewardContainer.getAttribute("data-current");
let rank = document.querySelector(".reward-top span");
// console.log(currentId);

// console.log(prizes);
rightArrow.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizes-1.active");
  let rank = document.querySelector(".reward-top span");
  if (
    currentPrize.nextElementSibling &&
    currentPrize.nextElementSibling.classList.contains("prizes-1")
  ) {
    currentPrize.nextElementSibling.classList.add("active");
    currentId += 1;
    rank.innerHTML = ranks[currentId];
  } else {
    prizes[0].classList.add("active");
    currentId = 0;
    rank.innerHTML = ranks[currentId];
  }
  currentPrize.classList.remove("active");
  rewardContainer.setAttribute("data-current", currentId);
  rewardText.innerHTML = rewardData[currentId];
});

leftArrow.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizes-1.active");

  if (
    currentPrize.previousElementSibling &&
    currentPrize.previousElementSibling.classList.contains("prizes-1")
  ) {
    // console.log(currentPrize.previousElementSibling);
    currentPrize.previousElementSibling.classList.add("active");
    currentId -= 1;
    rank.innerHTML = ranks[currentId];
  } else {
    prizes[prizes.length - 1].classList.add("active");
    currentId = prizes.length - 1;
    rank.innerHTML = ranks[currentId];
    // console.log(currentId);
  }
  currentPrize.classList.remove("active");
  rewardContainer.setAttribute("data-current", currentId);
  rewardText.innerHTML = rewardData[currentId];
});

//  Talent Rewards Round-1

const TalentRewardR1 = [
  "10 Days Audio Room theme + Profile Frame",
  "5 Days Audio Room theme ",
  "3 Days Audio Room theme ",
  "1 Days Audio Room theme ",
];

const TalentRanks1 = [
  "05 Million & Above Gems ",
  "03 - 05 Million Gems  ",
  "01 - 03 Million Gems  ",
  "500K – 1 Million Gems ",
];

let prizesR1 = document.querySelectorAll(".prizesR1");
let leftArrow1 = document.querySelector(".left-1 ");
let rightArrow1 = document.querySelector(".right-1 ");
let rewardText1 = document.querySelector(".reward-text-1");
let rewardContainer1 = document.querySelector(".r1");
let currentId1 = +rewardContainer1.getAttribute("data-current");
let rank1 = document.querySelector(".reward-top1 span");
// console.log(prizesR1)

rightArrow1.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizesR1.active");

  if (
    currentPrize.nextElementSibling &&
    currentPrize.nextElementSibling.classList.contains("prizesR1")
  ) {
    currentPrize.nextElementSibling.classList.add("active");
    currentId1 += 1;
    rank1.innerHTML = TalentRanks1[currentId1];
  } else {
    prizesR1[0].classList.add("active");
    currentId1 = 0;
    rank1.innerHTML = TalentRanks1[currentId1];
  }
  currentPrize.classList.remove("active");
  rewardContainer1.setAttribute("data-current", currentId1);
  rewardText1.innerHTML = TalentRewardR1[currentId1];
});

// console.log(prizesR1.length);

leftArrow1.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizesR1.active");

  if (
    currentPrize.previousElementSibling &&
    currentPrize.previousElementSibling.classList.contains("prizesR1")
  ) {
    // console.log(currentPrize.previousElementSibling);
    currentPrize.previousElementSibling.classList.add("active");
    currentId1 -= 1;
    rank1.innerHTML = TalentRanks1[currentId1];
  } else {
    prizesR1[prizesR1.length - 1].classList.add("active");
    currentId1 = prizesR1.length - 1;
    rank1.innerHTML = TalentRanks1[currentId1];
    console.log(currentId1);
  }
  currentPrize.classList.remove("active");
  rewardContainer1.setAttribute("data-current", currentId1);
  rewardText1.innerHTML = TalentRewardR1[currentId1];
});

// Talent Rewards Round-2
const TalentRewardR2 = [
  "15 days PK SUPER STAR BADGE + <br/> Audio theme of PK SuperStar + <br/> PK SUperStar Profile Frame",
  "10 days Audio theme of PK SuperStar + <br/> PK SUperStar Profile Frame",
  "07 days Audio theme of PK SuperStar ",
  "5 days Audio theme of PK SuperStar ",
];
const TalentRanks2 = [
  "10 Million & Above Gems  ",
  "05- 10 Million Gems",
  "03- 05 Million Gems",
  "01- 03 Million Gems",
];

let prizesR2 = document.querySelectorAll(".prizesR2");
let leftArrow2 = document.querySelector(".left-2 ");
let rightArrow2 = document.querySelector(".right-2 ");
let rewardText2 = document.querySelector(".reward-text-2");
let rewardContainer2 = document.querySelector(".r2");
let currentId2 = +rewardContainer2.getAttribute("data-current");
let rank2 = document.querySelector(".reward-top2 span");
// console.log(prizesR2)

rightArrow2.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizesR2.active");

  if (
    currentPrize.nextElementSibling &&
    currentPrize.nextElementSibling.classList.contains("prizesR2")
  ) {
    // console.log(currentPrize.nextElementSibling);
    currentPrize.nextElementSibling.classList.add("active");
    currentId2 += 1;
    rank2.innerHTML = TalentRanks2[currentId2];
  } else {
    prizesR2[0].classList.add("active");
    currentId2 = 0;
    rank2.innerHTML = TalentRanks2[currentId2];
  }
  currentPrize.classList.remove("active");
  rewardContainer2.setAttribute("data-current", currentId2);
  rewardText2.innerHTML = TalentRewardR2[currentId2];
});

// console.log(prizesR2.length);

leftArrow2.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizesR2.active");

  if (
    currentPrize.previousElementSibling &&
    currentPrize.previousElementSibling.classList.contains("prizesR2")
  ) {
    // console.log(currentPrize.previousElementSibling);
    currentPrize.previousElementSibling.classList.add("active");
    currentId2 -= 1;
    rank2.innerHTML = TalentRanks2[currentId2];
  } else {
    prizesR2[prizesR2.length - 1].classList.add("active");
    currentId2 = prizesR2.length - 1;
    rank2.innerHTML = TalentRanks2[currentId2];
    console.log(currentId2);
  }
  currentPrize.classList.remove("active");
  rewardContainer2.setAttribute("data-current", currentId2);
  rewardText2.innerHTML = TalentRewardR2[currentId2];
});
