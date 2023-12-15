const navsection3 = document.querySelectorAll(".navsection3");
const newsBtn = document.querySelector(".news");
const notificationBtn = document.querySelector(".notification");
const announcementsBtn = document.querySelector(".announcements");
const newssection = document.querySelector(".news-section");
const notificationsection = document.querySelector(".notification-section");
const announcementsection = document.querySelector(".announcements-section");
const academicsBtn = document.querySelector(".academics");
const alumniBtn = document.querySelector(".alumni");
const admissionsBtn = document.querySelector(".admissions");
const campusBtn = document.querySelector(".campus");
const academicslist = document.querySelector(".academicslist");
const campuslist = document.querySelector(".campuslist");
const alumnilist = document.querySelector(".alumnilist");
const admissionlist = document.querySelector(".admissionlist");
const menubar = document.querySelector(".menubar");
const menubarlist = document.querySelector(".menubarlist");
const registrationBtn = document.querySelector(".registration-btn");
const donationBtn = document.querySelector(".donation-btn");
const registrationElments = document.querySelectorAll(".registration");
const donationElments = document.querySelectorAll(".donation");

/////////////////////////////////////////////////////////////////
function handleNavClick(e) {
  navsection3.forEach(function (nav) {
    nav.classList.remove("activenavsection3");
  });
  e.target.classList.add("activenavsection3");
}

navsection3.forEach(function (nav) {
  nav.addEventListener("click", handleNavClick);
});
// ///////////////////////////////////////////////////////

function setActiveSection(section) {
  newssection.classList.remove("activecontentsection3");
  announcementsection.classList.remove("activecontentsection3");
  notificationsection.classList.remove("activecontentsection3");

  section.classList.add("activecontentsection3");
}

newsBtn?.addEventListener("click", function () {
  setActiveSection(newssection);
});

announcementsBtn?.addEventListener("click", function () {
  setActiveSection(announcementsection);
});

notificationBtn?.addEventListener("click", function () {
  setActiveSection(notificationsection);
});

////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const toggleNavList = (btn, list, otherList) => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      const isOpen = list.classList.contains("activenav");

      otherList.forEach((other) => {
        if (other.classList.contains("activenav")) {
          other.classList.remove("activenav");
        }
      });

      isOpen
        ? list.classList.remove("activenav")
        : list.classList.add("activenav");
    });

    document.addEventListener("click", function () {
      if (list.classList.contains("activenav")) {
        list.classList.remove("activenav");
      }
    });
  };

  toggleNavList(academicsBtn, academicslist, [
    alumnilist,
    admissionlist,
    campuslist,
  ]);
  toggleNavList(alumniBtn, alumnilist, [
    academicslist,
    admissionlist,
    campuslist,
  ]);
  toggleNavList(admissionsBtn, admissionlist, [
    academicslist,
    alumnilist,
    campuslist,
  ]);
  toggleNavList(campusBtn, campuslist, [
    academicslist,
    alumnilist,
    admissionlist,
  ]);
});

menubar.addEventListener("click", function (event) {
  event.stopPropagation();

  menubarlist.classList.contains("activenav2")
    ? menubarlist.classList.remove("activenav2")
    : menubarlist.classList.add("activenav2");
});

menubarlist.addEventListener("click", function (event) {
  event.stopPropagation();
  menubarlist.classList.remove("activenav2");
});

document.addEventListener("click", function () {
  if (menubarlist.classList.contains("activenav2"))
    menubarlist.classList.remove("activenav2");
});

///////////////////////////////////////////////////////
function setActiveButton(clickedBtn, otherBtn) {
  clickedBtn.classList.add("active-btn-alumni");
  otherBtn.classList.remove("active-btn-alumni");
}

function toggleElements(showElements, hideElements) {
  showElements?.forEach((e) => e.classList.remove("none"));
  hideElements?.forEach((e) => e.classList.add("none"));
}

registrationBtn?.addEventListener("click", function () {
  setActiveButton(this, donationBtn);
  toggleElements(registrationElments, donationElments);
});

donationBtn?.addEventListener("click", function () {
  setActiveButton(this, registrationBtn);
  toggleElements(donationElments, registrationElments);
});
