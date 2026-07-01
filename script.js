const greetingElement = document.getElementById('greeting');
if (greetingElement) {
    const hour = new Date().getHours();
    if (hour < 12) {
        greetingElement.innerText = "Good Morning! Ready for a new chapter?";
    } else if (hour < 18) {
        greetingElement.innerText = "Good Afternoon! Perfect time to read.";
    } else {
        greetingElement.innerText = "Good Evening! Curl up with a good book.";
    }
}


const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('userName').value;
        const feedback = document.getElementById('formFeedback');
        
        if (name.length < 2) {
            feedback.innerText = "Please enter a valid name.";
            feedback.style.color = "red";
        } else {
            feedback.innerText = "Thank you, " + name + "! We will get back to you soon.";
            feedback.style.color = "green";
            contactForm.reset();
        }
    });
}
