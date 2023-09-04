import { sendApplication } from "./sendApplication";

export const validateApplication = () => {
  const block = document.querySelectorAll(".application-block");
  const nameInput = document.querySelectorAll(".name-input");
  const phoneInput = document.querySelectorAll(".phone-input");
  const total = document.getElementById("calc-total");

  const typeBalcony = document.getElementById("calc-type");
  const typeGlazing = document.getElementById("calc-type-material");
  const calcInput = document.getElementById("calc-input");

  const regName = /^\S[а-яa-z\s]*$/gi;
  const regPhone = /^\+?(\d){1,16}$/;

  let nameTest;
  let phoneTest;
  let sendForm = {
    name: "",
    phone: "",
  };

  let errorMassage = document.createElement("span");
  errorMassage.classList.add("errorMassage");

  const checkName = () => {
    nameInput.forEach((item, index) => {
      index = errorMassage.cloneNode(true);
      item.after(index);

      item.addEventListener("input", () => {
        regName.lastIndex = 0;
        nameTest = regName.test(item.value);
        if (nameTest) {
          sendForm.name = item.value;
          index.textContent = "";
        } else {
          sendForm.name = "";
          index.textContent = "Можно вводить только буквы";
        }
      });
    });
  };
  checkName();

  const checkPhone = () => {
    phoneInput.forEach((item, index) => {
      index = errorMassage.cloneNode(true);
      item.after(index);

      item.addEventListener("input", () => {
        regPhone.lastIndex = 0;
        phoneTest = regPhone.test(item.value);
        if (phoneTest) {
          sendForm.phone = item.value;
          index.textContent = "";
        } else {
          sendForm.phone = "";
          index.textContent = "Можно вводить только цифры и знак +";
        }
      });
    });
  };
  checkPhone();

  const sendInServer = () => {
    sendApplication(sendForm)
      .then((result) => {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  block.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      if (sendForm.name && sendForm.phone) {
        item.querySelector(".form-horizontal").reset();
        try {
          sendForm.calcTotal = total.value;
          typeBalcony.value = "";
          typeGlazing.value = "";
          calcInput.value = "";
          total.value = "";
        } catch (err) {
          console.log("на данной странице нет расчетов");
        }
        sendInServer();
      }
    });
  });
};
