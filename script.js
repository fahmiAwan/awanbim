function toggleEnquiryForm() {
   var overlay = document.getElementById('overlay');
   overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
}

function submitForm(event) {
   event.preventDefault();
   var form = event.target;
   var formData = new FormData(form);
   var mailtoLink = `mailto:awan2bim@gmail.com?subject=Enquiry Form Submission&body=Name: ${formData.get('name')}%0D%0AEmail: ${formData.get('email')}%0D%0APhone: ${formData.get('phone')}%0D%0AMessage: ${formData.get('message')}`;
   window.location.href = mailtoLink;
   document.getElementById('overlay').style.display = 'none';
}