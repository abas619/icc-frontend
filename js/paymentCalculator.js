// برای بررسی قیمت محصولات
function updateTotalPrice() {
  var basePrice = 700000; // قیمت پایه
  var checkBoxChecked = document.getElementById("checkbox-warning-msg").checked;
  var count = document.querySelectorAll(".list-inner .user").length;

  // بررسی وضعیت radio buttons
  var radioSelect = document.querySelector(
    'input[name="radio-select-form"]:checked'
  ).value;
  if (radioSelect === "special") {
    basePrice -= 140000; // افزودن قیمت برای حقوقی
    basePrice += count * 100000; // افزودن قیمت برای هر کاربر اضافه شده
  }
  //   وقتی فرم NOrml انتخاب شده
  if (radioSelect === "normal") {
    checkBoxChecked = false;
  }

  // بررسی وضعیت چک‌باکس
  if (checkBoxChecked) {
    basePrice += 50000; // افزودن قیمت برای اعضای کمیته
  }

  // نمایش قیمت جدید
  var totalPriceElement = document.querySelector(".total-price");
  totalPriceElement.innerHTML =
    basePrice.toLocaleString() + `${"<span>تومان</span>"}`;
}

// Choose Forms
if (document.querySelector('input[name="radio-select-form"]') != null) {
  const radios = document.querySelectorAll('input[name="radio-select-form"]');
  const formNormal = document.getElementById("form-normal");
  const formSpecial = document.getElementById("form-special");

  radios.forEach((radio) => {
    radio.addEventListener("click", function () {
      if (this.value === "normal") {
        formNormal.classList.add("active");
        formSpecial.classList.remove("active");
      } else if (this.value === "special") {
        formNormal.classList.remove("active");
        formSpecial.classList.add("active");
      }
      updateTotalPrice();
    });
  });
}

// برای اضافه کردن فرم و کارت ها دعوت
function addUser() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;

  if (name !== "" && phone !== "") {
    var newUserCard = `
  <div class="user">
      <div class="thumb">
          <img src="images/default-user.svg" alt="img">
      </div>
      <div class="info">
          <div class="user-name">${name}</div>
          <div class="phone-number">${phone}</div>
      </div>
      <button class="btn-edit delete" onclick="deleteUser(this)">
          <i class="fi fi-rr-trash"></i>
      </button>
  </div>
  `;

    var listInner = document.querySelector(".list-inner");
    listInner.insertAdjacentHTML("beforeend", newUserCard);

    updateCount();
    updateTotalPrice();

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
  } else {
    alert("لطفاً اطلاعات را به درستی وارد کنید.");
  }
}
function deleteUser(button) {
  button.parentNode.remove();
  updateCount();
  updateTotalPrice();
}
function updateCount() {
  var count = document.querySelectorAll(".list-inner .user").length;
  document.querySelector(".count").textContent = `(${count} کاربر)`;
}

// برای نشست های پرسش و پاسخ
if (document.getElementById("warning-msg") != null) {
  const warningMsg = document.getElementById("warning-msg");
  const checkboxWarning = document.getElementById("checkbox-warning-msg");
  checkboxWarning.addEventListener("change", function () {
    if (this.checked) {
      warningMsg.classList.add("active");
    } else {
      warningMsg.classList.remove("active");
    }
    updateTotalPrice();
  });
}

updateTotalPrice();
