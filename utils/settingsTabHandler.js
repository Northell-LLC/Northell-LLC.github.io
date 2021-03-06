const settingsAccButtton = document.querySelector("#settings-acc-button");
const settingsPasswordButton = document.querySelector(
  "#settings-password-button"
);
const settingsMain = document.querySelector(".settings-main");
const changePasswordMain = document.querySelector(".change-password-main");

function selectAccountTab() {
  settingsMain.classList.remove("settings-tab-hidden");
  changePasswordMain.classList.add("settings-tab-hidden");

  settingsAccButtton.lastElementChild.classList.add("active-settings-tab");
  settingsPasswordButton.lastElementChild.classList.remove(
    "active-settings-tab"
  );

  settingsAccButtton.firstElementChild.src =
    "../../assets/images/verification.svg";
  settingsPasswordButton.firstElementChild.src =
    "../../assets/images/lock-grey.svg";
}

function selectSettingsPasswordTab() {
  changePasswordMain.classList.remove("settings-tab-hidden");
  settingsMain.classList.add("settings-tab-hidden");

  settingsPasswordButton.lastElementChild.classList.add("active-settings-tab");
  settingsAccButtton.lastElementChild.classList.remove("active-settings-tab");

  settingsPasswordButton.firstElementChild.src =
    "../../assets/images/lock-blue.svg";
  settingsAccButtton.firstElementChild.src =
    "../../assets/images/verification-grey.svg";
}

settingsAccButtton.addEventListener("click", () => {
  selectAccountTab();
});

settingsPasswordButton.addEventListener("click", () => {
  selectSettingsPasswordTab();
});

document.querySelectorAll(".dropdown-settings").forEach((dropDownWrapper) => {
  const dropDownBtn = dropDownWrapper.querySelector(
    ".dropdown-button-settings"
  );
  const dropDownList = dropDownWrapper.querySelector(".dropdown-list-settings");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown-list-item-settings"
  );
  const dropDownInput = dropDownWrapper.querySelector(
    ".dropdown-input-hidden-settings"
  );

  dropDownBtn.addEventListener("click", function () {
    dropDownList.classList.toggle("dropdown-list-visible-settings");
    this.classList.add("dropdown-button-active-settings");
  });

  dropDownListItems.forEach((listItem) => {
    listItem.addEventListener("click", function (event) {
      event.stopPropagation();
      dropDownBtn.innerHTML = this.innerHTML;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      if (dropDownInput.value === "account") {
        selectAccountTab();
      } else if (dropDownInput.value === "changePassword") {
        selectSettingsPasswordTab();
      }
      dropDownList.classList.remove("dropdown-list-visible-settings");
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target !== dropDownBtn) {
      dropDownBtn.classList.remove("dropdown-button-active-settings");
      dropDownList.classList.remove("dropdown-list-visible-settings");
    }
  });
});
