document.querySelector('.login-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent page reload on form submission

      var email = this.elements.email.value.trim();
      var password = this.elements.password.value.trim();

      if (email === '' || password === '') {
        alert('All form fields must be filled in');
      } else {
        var formData = {
          email: email,
          password: password
        };
        console.log(formData); // Output form data to console
        this.reset(); // Reset form fields
      }
    });
