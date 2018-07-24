console.log('hello fuckers!!!');

function sendMail(contactForm) {
    emailjs.send('gmail','rosie',{
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'from_request': contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log('SUCCESS',response);
            },
            function (error) {
                console.log('FAILED',error);
            }
        );
   // return false;
}