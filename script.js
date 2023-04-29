//about me text
window.addEventListener('scroll', function () {
  var intrAboutMe = document.getElementById('intr_abt');
  var intrAboutMePosition = intrAboutMe.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;
  if (intrAboutMePosition < screenPosition) {
      intrAboutMe.classList.add('visible');
  }
});

//about me box
window.addEventListener('scroll', function () {
  var aboutMe = document.getElementById('aboutme');
  var aboutMePosition = aboutMe.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;
  if (aboutMePosition < screenPosition) {
    aboutMe.classList.add('visible');
  }
});

//busi text
window.addEventListener('scroll', function () {
  var busi = document.getElementById('intr_busi');
  var intrBusiPosition = busi.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;
  if (intrBusiPosition < screenPosition) {
      busi.classList.add('visible');
  }
});

//business box
window.addEventListener('scroll', function () {
  var business = document.getElementById('business');
  var businessPosition = business.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;
  if (businessPosition < screenPosition) {
      business.classList.add('visible');
  }
});

//skills text
window.addEventListener('scroll', function () {
var skills = document.getElementById('intr_skills');
var intrSkillsPosition = skills.getBoundingClientRect().top;
var screenPosition = window.innerHeight / 1.5;
if (intrSkillsPosition < screenPosition) {
    skills.classList.add('visible');
}
});

//skills box
window.addEventListener('scroll', function () {
var skillss = document.getElementById('skills');
var skillssPosition = skillss.getBoundingClientRect().top;
var screenPosition = window.innerHeight / 1.5;
if (skillssPosition < screenPosition) {
    skillss.classList.add('visible');
}
});

//coding text
window.addEventListener('scroll', function () {
var coding = document.getElementById('intr_coding');
var intrCodingPosition = coding.getBoundingClientRect().top;
var screenPosition = window.innerHeight / 1.5;
if (intrCodingPosition < screenPosition) {
    coding.classList.add('visible');
}
});

//coding box
window.addEventListener('scroll', function () {
var codingg = document.getElementById('coding');
var codinggPosition = codingg.getBoundingClientRect().top;
var screenPosition = window.innerHeight / 1.5;
if (codinggPosition < screenPosition) {
    codingg.classList.add('visible');
}
});

//contact text
window.addEventListener('scroll', function () {
var contact = document.getElementById('intr_contact');
var intrContactPosition = contact.getBoundingClientRect().top;
var screenPosition = window.innerHeight / 1.5;
if (intrContactPosition < screenPosition) {
    contact.classList.add('visible');
}
});

//contact box
window.addEventListener('scroll', function () {
var contactt = document.getElementById('contact');
var contacttPosition = contactt.getBoundingClientRect().top;
var screenPosition = window.innerHeight / 1.5;
if (contacttPosition < screenPosition) {
    contactt.classList.add('visible');
}
});

