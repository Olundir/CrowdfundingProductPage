const hamb = document.querySelector(".hamburger");
const menu = document.querySelector(".navList");
const greyOut = document.querySelector(".greyOut");

hamb.addEventListener("click", () => {
  if (hamb.classList.contains("is-active")) {
    hamb.classList.remove("is-active");
    menu.classList.remove("visibilityToggle");
    greyOut.classList.remove("visibilityToggle");
  } else {
    hamb.classList.add("is-active");
    menu.classList.add("visibilityToggle");
    greyOut.classList.add("visibilityToggle");
  }
});

window.onscroll = () => {
  if (hamb.classList.contains("is-active")) {
    hamb.classList.remove("is-active");
    menu.classList.remove("visibilityToggle");
    greyOut.classList.remove("visibilityToggle");
  }
};

const bookmark = document.querySelector(".bookmark");
bookmark.addEventListener("click", () => {
  if (bookmark.classList.contains("bookmarkChecked")) {
    bookmark.classList.remove("bookmarkChecked");
  } else {
    bookmark.classList.add("bookmarkChecked");
  }
});

const popUpGreyOut = document.querySelector(".greyOutPopOut");
const popUp = document.querySelector(".popUp");

const pledgeCard = document.querySelectorAll(".pledgeCard");
const pledge = document.querySelectorAll(".pledge");
const radio = document.querySelectorAll(".radioInput");

popUp.addEventListener("click", () => {
  for (let i = 0; i < pledgeCard.length - 1; i++) {
    if (radio[i].checked === false) {
      pledgeCard[i].classList.remove("pledgeCardActive");
      pledge[i].classList.remove("pledgeVisibility");
    }
  }
});

const exit = document.querySelector(".close");
exit.addEventListener("click", () => {
  exitModal();
  for (rad of radio) rad.checked = false;
});

function exitModal() {
  popUp.classList.remove("visibilityToggle");
  popUpGreyOut.classList.remove("visibilityToggle");
  popUpGreyOut.style.height = `2700px`;
}

const backProjectButton = document.querySelectorAll(".backProjectButton");

for (button of backProjectButton) {
  button.addEventListener("click", () => {
    let offset = visualViewport.pageTop;
    popUp.style.top = `${offset}px`;
    popUpGreyOut.classList.add("visibilityToggle");
    let greyHeight = 2688;
    if (offset + 1300 > 2688) greyHeight = 1300 + offset;
    popUpGreyOut.style.height = `${greyHeight}px`;
    popUp.classList.add("visibilityToggle");
  });
}

const successPledge = document.querySelector(".successPledge");
const continueButton = document.querySelectorAll(".continue");

document.addEventListener(`scroll`, () => {
  let vH = visualViewport.pageTop;
  let popH = popUp.style.top;
  if (vH < parseFloat(popH)) popUp.style.top = `${vH + 20}px`;
  successPledge.style.top = `${vH + (visualViewport.height / 2 - 220)}px`;
});

const done = document.querySelector(".done");

done.addEventListener("click", () => {
  successPledge.classList.remove("visibilityToggle");
  popUpGreyOut.classList.remove("visibilityToggle");
});

for (let i = 0; i < pledgeCard.length - 1; i++) {
  pledgeCard[i].addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.innerText === "Continue") {
      exitModal();
      for (rad of radio) rad.checked = false;
      successPledge.classList.add("visibilityToggle");
      popUpGreyOut.classList.add("visibilityToggle");
    } else {
      radio[i].checked = true;
      pledgeCard[i].classList.add("pledgeCardActive");
      pledge[i].classList.add("pledgeVisibility");
    }
  });
}
