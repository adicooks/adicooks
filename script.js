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








