function sendMail(contactForm) {
  emailjs
    .send(
      "service_frrzr3h",
      "template_9xy4otm",
      {
        from_name: contactForm.nameInput.value,
        from_email: contactForm.emailInput.value,
        subject: contactForm.subjectInput.value,
        message: contactForm.messageInput.value,
      },
      "I3Dp-eoXWgqMTVGkg"
    )
    .then(
      function (response) {
        console.log("SUCCESS", response);
        alert("Message sent successfully!");
        contactForm.reset();
      },
      function (error) {
        console.log("FAILED", error);
        alert("Message failed to send.");
      }
    );
  return false; // To block from loading a new page
}
