
class website {
    constructor() {
        this.data();
    }
    data() {
        data.forEach((obj) => {
            switch(obj.name){
                case "header":
                    this.headerValue(obj);
                    break;
                case "main":
                    this.mainValue(obj);
                    break;
                case "titleFooter":
                    this.titleFooterValue(obj);
                    break;
                case "aboutUs":
                    this.aboutUsValue(obj);
                    break;
                case "fastStart":
                    this.fastStartValue(obj);
                    break;
                case "getJobNow":
                    this.getJobNowValue(obj);
                    break;
                case "partners":
                    this.partnersValue(obj);
                    break;
                case "program":
                    this.trainingProgramValue(obj);
                    break;
                case "trainers":
                    this.trainersValue(obj);
                    break;
                case "footer":
                    this.footerValue(obj);
                    break;
            }
        });
    };
    headerValue(value) {
        let divImg = document.querySelector('.logo');
        let divNavbar = document.querySelector('.navbar');
        let divLogin = document.querySelector('.login');
        let img = document.createElement("img");
        let loginButton = document.createElement("p");
        img.setAttribute("src",value.logoUrl);
        divImg.appendChild(img);
        value.links.forEach((el) =>{
            let a = document.createElement("a");
            a.textContent = el.value;
            a.setAttribute("href", el.href);
            divNavbar.appendChild(a);
            a.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = e.target.getAttribute('href').slice(1);
                const targetSection = document.getElementById(targetId);
                const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                })
            })
        });
        loginButton.innerHTML = value.loginButton.value;
        divLogin.appendChild(loginButton);
    }

    mainValue(value) {
        let divTitle = document.querySelector('.title');
        let divDays = document.querySelector('.days');
        let divHours = document.querySelector('.hours');
        let divMinutes = document.querySelector('.minutes');
        let divSeconds = document.querySelector('.seconds');

        let title = document.createElement('h1');
        title.innerHTML = value.h1;

        let daysNumber = document.createElement('h2');
        daysNumber.innerHTML = value.days;
        let days = document.createElement('p');
        days.innerHTML = 'Days';
        let hoursNumber = document.createElement('h2');
        hoursNumber.innerHTML = value.hours;
        let hours = document.createElement('p');
        hours.innerHTML = 'Hours';
        let minutesNumber = document.createElement('h2');
        minutesNumber.innerHTML = value.minutes;
        let minutes = document.createElement('p');
        minutes.innerHTML = 'Minutes';
        let secondsNumber = document.createElement('h2');
        secondsNumber.innerHTML = value.seconds;
        let seconds = document.createElement('p');
        seconds.innerHTML = 'Seconds';

        divTitle.appendChild(title);
        divDays.appendChild(daysNumber);
        divDays.appendChild(days);
        divHours.appendChild(hoursNumber);
        divHours.appendChild(hours);
        divMinutes.appendChild(minutesNumber);
        divMinutes.appendChild(minutes);
        divSeconds.appendChild(secondsNumber);
        divSeconds.appendChild(seconds);
    }

    titleFooterValue(value) {
        let divBuyCourse = document.querySelector('.buy-course');
        let buttonBuyCourse = document.createElement('button');

        buttonBuyCourse.textContent = value.value;

        divBuyCourse.appendChild(buttonBuyCourse);
    }

    aboutUsValue(value) {
        let divAboutImg = document.querySelector('.about-img');
        let divAboutText = document.querySelector('.about-text');

        let img = document.createElement('img');
        img.setAttribute("src",value.imgUrl);

        let title = document.createElement('h2')
        let text = document.createElement('p');
        let hiddenText = document.createElement('p');
        hiddenText.innerHTML = value.pHidden;
        hiddenText.classList.add('hidden-text');
        title.innerHTML = value.h2;
        text.innerHTML = value.p;

        let buttonShow = document.createElement('button');
        buttonShow.textContent = value.buttonShow.value;

        buttonShow.addEventListener('click', function () {
            if (buttonShow.textContent === 'Read more') {
                hiddenText.style.opacity = '1';
                hiddenText.style.display = 'block';
                buttonShow.textContent = 'Close';
            } else {
                hiddenText.style.opacity = '0';
                hiddenText.style.display = 'none';
                buttonShow.textContent = 'Read more';
            }
        } )

        divAboutImg.appendChild(img);
        divAboutText.appendChild(title);
        divAboutText.appendChild(text);
        divAboutText.appendChild(hiddenText);
        divAboutText.appendChild(buttonShow);
    }

    fastStartValue(value) {
        let divHeader = document.querySelector('.header-fast-start');
        let divParagraph = document.querySelector('.paragraph');
        let div100 = document.querySelector('.container-100');
        let div75 = document.querySelector('.container-75');
        let div50 = document.querySelector('.container-50');
        let divResult = document.querySelector('.container-result');

        let logo = document.createElement('img');
        logo.setAttribute('src', value.logo);
        logo.classList.add('rotating-logo');

        let h2 = document.createElement('h2');
        h2.innerHTML = value.h2;

        let p = document.createElement('p');
        p.innerHTML = value.p;

        let h3100 = document.createElement('h3');
        h3100.innerHTML = value.container[0].h3;
        let img100 = document.createElement('img');
        img100.setAttribute('src', value.container[0].img);
        let p100 = document.createElement('p');
        p100.innerHTML = value.container[0].p;

        let h375 = document.createElement('h3');
        h375.innerHTML = value.container[1].h3;
        let img75 = document.createElement('img');
        img75.setAttribute('src', value.container[1].img);
        let p75 = document.createElement('p');
        p75.innerHTML = value.container[1].p;

        let h350 = document.createElement('h3');
        h350.innerHTML = value.container[2].h3;
        let img50 = document.createElement('img');
        img50.setAttribute('src', value.container[2].img);
        let p50 = document.createElement('p');
        p50.innerHTML = value.container[2].p;

        let h3Result = document.createElement('h3');
        h3Result.innerHTML = value.container[3].h3;
        let imgResult = document.createElement('img');
        imgResult.setAttribute('src', value.container[3].img);
        let pResult = document.createElement('p');
        pResult.innerHTML = value.container[3].p;

        divHeader.appendChild(logo);
        divHeader.appendChild(h2);
        divParagraph.appendChild(p);

        div100.appendChild(h3100);
        div100.appendChild(img100);
        div100.appendChild(p100);

        div75.appendChild(h375);
        div75.appendChild(img75);
        div75.appendChild(p75);

        div50.appendChild(h350);
        div50.appendChild(img50);
        div50.appendChild(p50);

        divResult.appendChild(h3Result);
        divResult.appendChild(imgResult);
        divResult.appendChild(pResult);
    }

    getJobNowValue(value) {
        let header = document.querySelector('.header-get-job');
        let containerLeft = document.querySelector('.container-left');
        let containerMiddle = document.querySelector('.container-middle');
        let containerRight = document.querySelector('.container-right');

        let h2 = document.createElement('h2');
        h2.innerHTML = value.h2;

        let imgLeft = document.createElement('img');
        imgLeft.setAttribute('src', value.container[0].img);
        let h3Left = document.createElement('h3');
        h3Left.innerHTML = value.container[0].h3;
        let pLeft = document.createElement('p');
        pLeft.innerHTML = value.container[0].p;

        let imgMiddle = document.createElement('img');
        imgMiddle.setAttribute('src', value.container[1].img);
        let h3Middle = document.createElement('h3');
        h3Middle.innerHTML = value.container[1].h3;
        let pMiddle = document.createElement('p');
        pMiddle.innerHTML = value.container[1].p;

        let imgRight = document.createElement('img');
        imgRight.setAttribute('src', value.container[2].img);
        let h3Right = document.createElement('h3');
        h3Right.innerHTML = value.container[2].h3;
        let pRight = document.createElement('p');
        pRight.innerHTML = value.container[2].p;

        header.appendChild(h2);
        containerLeft.appendChild(imgLeft);
        containerLeft.appendChild(h3Left);
        containerLeft.appendChild(pLeft);
        containerMiddle.appendChild(imgMiddle);
        containerMiddle.appendChild(h3Middle);
        containerMiddle.appendChild(pMiddle);
        containerRight.appendChild(imgRight);
        containerRight.appendChild(h3Right);
        containerRight.appendChild(pRight);
    }

    partnersValue(value) {
        let header = document.querySelector('.header-partners');
        let partnerLogo1 = document.querySelector('.partner-logo-1');
        let partnerLogo2 = document.querySelector('.partner-logo-2');
        let partnerLogo3 = document.querySelector('.partner-logo-3');
        let partnerLogo4 = document.querySelector('.partner-logo-4');
        let partnerLogo5 = document.querySelector('.partner-logo-5');
        let partnerLogo6 = document.querySelector('.partner-logo-6');
        let partnerLogo7 = document.querySelector('.partner-logo-7');
        let partnerLogo8 = document.querySelector('.partner-logo-8');

        let logo = document.createElement('img');
        logo.setAttribute('src', value.logo);
        let h2 = document.createElement('h2');
        h2.innerHTML = value.h2;

        let logo1 = document.createElement('img');
        logo1.setAttribute('src', value.logoPartners[0].img);
        let logo2 = document.createElement('img');
        logo2.setAttribute('src', value.logoPartners[1].img);
        let logo3 = document.createElement('img');
        logo3.setAttribute('src', value.logoPartners[2].img);
        let logo4 = document.createElement('img');
        logo4.setAttribute('src', value.logoPartners[3].img);
        let logo5 = document.createElement('img');
        logo5.setAttribute('src', value.logoPartners[4].img);
        let logo6 = document.createElement('img');
        logo6.setAttribute('src', value.logoPartners[5].img);
        let logo7 = document.createElement('img');
        logo7.setAttribute('src', value.logoPartners[6].img);
        let logo8 = document.createElement('img');
        logo8.setAttribute('src', value.logoPartners[7].img);

        header.appendChild(logo);
        header.appendChild(h2);

        partnerLogo1.appendChild(logo1);
        partnerLogo2.appendChild(logo2);
        partnerLogo3.appendChild(logo3);
        partnerLogo4.appendChild(logo4);
        partnerLogo5.appendChild(logo5);
        partnerLogo6.appendChild(logo6);
        partnerLogo7.appendChild(logo7);
        partnerLogo8.appendChild(logo8);
    }

    trainingProgramValue(value) {
        let header = document.querySelector('.header-training-program');
        let week1 = document.querySelector('.week-1');
        let week2 = document.querySelector('.week-2');
        let week3 = document.querySelector('.week-3');
        let week4 = document.querySelector('.week-4');
        let week5 = document.querySelector('.week-5');
        let week6 = document.querySelector('.week-6');
        let week7 = document.querySelector('.week-7');

        let logo = document.createElement('img');
        logo.setAttribute('src', value.logo);
        let h2 = document.createElement('h2');
        h2.innerHTML = value.h2;
        let p = document.createElement('p');
        p.innerHTML = value.p;

        let firstWeekP = document.createElement('p');
        firstWeekP.innerHTML = value.weeks[0].p;
        let firstWeek = document.createElement('h3');
        firstWeek.innerHTML = value.weeks[0].h3;

        let secondWeekP = document.createElement('p');
        secondWeekP.innerHTML = value.weeks[1].p;
        let secondWeek = document.createElement('h3');
        secondWeek.innerHTML = value.weeks[1].h3;

        let thirdWeekP = document.createElement('p');
        thirdWeekP.innerHTML = value.weeks[2].p;
        let thirdWeek = document.createElement('h3');
        thirdWeek.innerHTML = value.weeks[2].h3;

        let fourthWeekP = document.createElement('p');
        fourthWeekP.innerHTML = value.weeks[3].p;
        let fourthWeek = document.createElement('h3');
        fourthWeek.innerHTML = value.weeks[3].h3;

        let fifthWeekP = document.createElement('p');
        fifthWeekP.innerHTML = value.weeks[4].p;
        let fifthWeek = document.createElement('h3');
        fifthWeek.innerHTML = value.weeks[4].h3;

        let sixthWeekP = document.createElement('p');
        sixthWeekP.innerHTML = value.weeks[5].p;
        let sixthWeek = document.createElement('h3');
        sixthWeek.innerHTML = value.weeks[5].h3;

        let seventhWeekP = document.createElement('p');
        seventhWeekP.innerHTML = value.weeks[6].p;
        let seventhWeek = document.createElement('h3');
        seventhWeek.innerHTML = value.weeks[6].h3;

        header.appendChild(logo);
        header.appendChild(h2);
        header.append(p);

        week1.appendChild(firstWeekP);
        week1.appendChild(firstWeek);
        week2.appendChild(secondWeekP);
        week2.appendChild(secondWeek);
        week3.appendChild(thirdWeekP);
        week3.appendChild(thirdWeek);
        week4.appendChild(fourthWeekP);
        week4.appendChild(fourthWeek);
        week5.appendChild(fifthWeekP);
        week5.appendChild(fifthWeek);
        week6.appendChild(sixthWeekP);
        week6.appendChild(sixthWeek);
        week7.appendChild(seventhWeekP);
        week7.appendChild(seventhWeek);
    }

    trainersValue(value) {
        let header = document.querySelector('.header-our-trainers');
        let trainer1 = document.querySelector('.trainer-1');
        let trainer2 = document.querySelector('.trainer-2');
        let trainer3 = document.querySelector('.trainer-3');

        let img = document.createElement('img');
        img.setAttribute('src', value.imgUrl)
        let h2 = document.createElement('h2');
        h2.innerHTML = value.h2;

        let img1 = document.createElement('img');
        img1.setAttribute('src', value.trainers[0].img);
        let name1 = document.createElement('h3');
        name1.innerHTML = value.trainers[0].name;
        let button1 = document.createElement('p');
        button1.textContent = value.trainers[0].button.value;

        let img2 = document.createElement('img');
        img2.setAttribute('src', value.trainers[1].img);
        let name2 = document.createElement('h3');
        name2.innerHTML = value.trainers[1].name;
        let button2 = document.createElement('p');
        button2.textContent = value.trainers[1].button.value;

        let img3 = document.createElement('img');
        img3.setAttribute('src', value.trainers[2].img);
        let name3 = document.createElement('h3');
        name3.innerHTML = value.trainers[2].name;
        let button3 = document.createElement('p');
        button3.textContent = value.trainers[2].button.value;

        header.appendChild(img);
        header.appendChild(h2);
        trainer1.appendChild(img1);
        trainer1.appendChild(name1);
        trainer1.appendChild(button1);
        trainer2.appendChild(img2);
        trainer2.appendChild(name2);
        trainer2.appendChild(button2);
        trainer3.appendChild(img3);
        trainer3.appendChild(name3);
        trainer3.appendChild(button3);
    }

    footerValue(value) {
        let header = document.querySelector('.header-of-footer');
        let emailDiv = document.querySelector('.email');
        let socialMedia = document.querySelector('.social-media');

        let h2 = document.createElement('h2');
        h2.innerHTML = value.h2;
        let p = document.createElement('p');
        p.innerHTML = value.p;

        let email = document.createElement('input');
        email.type = 'email';
        email.placeholder = value.inputEmail;
        email.classList.add('input-email');
        let submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = value.submitText;
        submit.classList.add('input-submit');

        let imgVK = document.createElement('img');
        imgVK.setAttribute('src', value.socialMedia[0].img);
        let imgYouTube = document.createElement('img');
        imgYouTube.setAttribute('src', value.socialMedia[1].img);
        let imgFacebook = document.createElement('img');
        imgFacebook.setAttribute('src', value.socialMedia[2].img);
        let imgInstagram = document.createElement('img');
        imgInstagram.setAttribute('src', value.socialMedia[3].img);

        header.appendChild(h2);
        header.appendChild(p);

        emailDiv.appendChild(email);
        emailDiv.appendChild(submit);

        socialMedia.appendChild(imgVK);
        socialMedia.appendChild(imgYouTube);
        socialMedia.appendChild(imgFacebook);
        socialMedia.appendChild(imgInstagram);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let init = new website();
    let inputEmail = document.querySelector('.input-email');
    let inputSubmit = document.querySelector('.input-submit');
    inputSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        inputEmail.value = '';
    })
    let seconds = document.querySelector('.seconds h2');
    function changeSeconds() {
            let currentValueSec = parseInt(seconds.textContent);
            if (currentValueSec > 0) {
                seconds.textContent = (currentValueSec - 1).toString();
            }
    }
    setInterval(changeSeconds, 1000);
})

const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', toggleScrollToTopButton);
function toggleScrollToTopButton() {
    if (window.scrollY > 700) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}
scrollToTopButton.addEventListener('click', scrollToTop);
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

let submit = document.querySelector('#submit');
let login = document.querySelector('#text');
let password = document.querySelector('#password');
let sign = document.querySelector('#sign');
let windowLogin = document.querySelector('.window-login');
let loginButton = document.querySelector('.login');
let registeredWindow = document.querySelector('.registered');
let close = document.querySelector('.window-login h1')
let incorrectPassword = document.querySelector('.incorrect-password');
let alreadyRegistered = document.querySelector('.alreadyRegistered');
close.addEventListener('click', function () {
    windowLogin.style.display = 'none';
})
loginButton.addEventListener('click', function () {
    windowLogin.style.display = 'flex';
})
sign.addEventListener('click', function (e) {
    e.preventDefault();
    if (!localStorage.getItem(login.value)) {
        localStorage.setItem(login.value, password.value);
        login.value = '';
        password.value = '';
        registeredWindow.style.display = 'block';
        setTimeout(function() {
            registeredWindow.style.display = 'none';
        }, 3000);
    } else if (localStorage.getItem(login.value) === login.value) {
        alreadyRegistered.style.display = 'block';
        setTimeout(function() {
            alreadyRegistered.style.display = 'none';
        }, 3000);
    }
})
submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (localStorage.getItem(login.value) === login.value && localStorage.getItem(password.value) === password.value) {
        windowLogin.style.display = 'none';
        loginButton.classList.add('loginButton');
        loginButton.innerHTML = login.value;
    } else {
        incorrectPassword.style.display = 'block';
        setTimeout(function() {
            incorrectPassword.style.display = 'none';
        }, 3000);
    }
})