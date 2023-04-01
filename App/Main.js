let LinkCert5 = document.getElementById("Cer5");
let LinkCert4 = document.getElementById("Cer4");
let LinkCert3 = document.getElementById("Cer3");
let LinkCert2 = document.getElementById("Cer2");
let LinkCert1 = document.getElementById("Cer1");
let Contact = document.getElementById("BtnContacto");

const OpenLink1 = () => {
    LinkCert1.addEventListener("click" , function(){
        window.open("https://www.udemy.com/certificate/UC-8377e209-fe28-406b-bce2-4315874c9785/" , "_blank")
    })
};

const OpenLink2 = () => {
    LinkCert2.addEventListener("click" , function(){
        window.open("https://www.udemy.com/certificate/UC-ea7b3e84-b44b-4388-b456-eb0943ccc292/" , "_blank")
    })
};

const OpenLink3 = () => {
    LinkCert3.addEventListener("click" , function(){
        window.open("https://www.udemy.com/certificate/UC-148d519e-8a85-43b2-87c0-468c4256cae4/", "_blank")
    })
};

const OpenLink4 = () => {
    LinkCert4.addEventListener("click" , function(){
        window.open("https://www.udemy.com/certificate/UC-1a14a6f3-7bca-4ec3-84df-e14646f13ffb/", "_blank")
    })
};

const OpenLink5 = () => {
    LinkCert5.addEventListener("click" , function(){
        window.open("https://www.udemy.com/certificate/UC-52fa60f9-53df-4a63-81ec-01b399956f1c/", "_blank")
    })
}


const OpenSocialMedia = () => {
    Contact.addEventListener("click" , function() {
        window.open("https://www.linkedin.com/in/jos%C3%A9-eduardo-alvarez-ibarra-24b929218/" , "_blank")
    })
};

const OnScrollDivs = () => {
    if (document.body.scrollTop > 50) {
        document.getElementById("ContainerInfo").className ="slideUp divContainerInfo";
    }
    if (document.body.scrollTop > 1000) {
        document.getElementById("ContainerEducation").className ="slideUp divContainerEducation";
    }
    if (document.body.scrollTop > 1400) {
        document.getElementById("ContainerExperience").className ="slideUp divContainerExperience";
    }
    if (document.body.scrollTop > 1400) {
        document.getElementById("ContainerCertificates").className ="slideUp divContainerCertificates";
    }
}

const RedirectDivs = () => {
    let Info = document.getElementById("Ref1");
    Info.addEventListener("click" , function(){
        document.getElementById("ContainerInfo").className ="slideUp divContainerInfo";
    });
    let Education = document.getElementById("Ref2");
    Education.addEventListener("click" , function(){
        document.getElementById("ContainerEducation").className ="slideUp divContainerEducation";
    });
    let Experience = document.getElementById("Ref3");
    Experience.addEventListener("click" , function(){
        document.getElementById("ContainerExperience").className ="slideUp divContainerExperience";
    });
    let Certificates = document.getElementById("Ref4");
    Certificates.addEventListener("click" , function(){
        document.getElementById("ContainerCertificates").className ="slideUp divContainerCertificates";
    });
}

window.onscroll = function () {OnScrollDivs()};

window.onload = () => {
    OpenLink1();
    OpenLink2();
    OpenLink3();
    OpenLink4();
    OpenLink5();
    OpenSocialMedia();
    OnScrollDivs();
    RedirectDivs();
}