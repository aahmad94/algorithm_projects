function solution(html) {
    // write your code in JavaScript (Node.js 8.9.4)
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementById
    // or using jQuery:
    //    $('some_tag')
    //
    // you can write to stdout for debugging purposes, e.g.
    // console.log('this is a debug message');untitled:Untitled-1
    
    const person = document.getElementById('type_person').checked;
    if (person) {
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        
        // name validation
        if (firstName.length === 0 || lastName.length === 0) return false;
        
        // email validation
        const emailParts = email.split('@'); 
        if (emailParts.length !== 2) return false;
        if (emailParts[0].length > 64 || emailParts[1].length > 64) return false;
        const emailRegExp = RegExp("^[a-zA-Z0-9.]*$");
        if (!emailRegExp.test(emailParts[0]) || !emailRegExp.test(emailParts[0])) return false;
    } else {
        // case where company is selected
        const companyName = document.getElementById('company_name').value;
        const phone = document.getElementById('phone').value;
        
        // company name validation
        if (companyName.length === 0) return false;
        
        // phone validation
        const phoneRegExp = RegExp("^[0-9- ]*$");
        // RegExp validates phone contains only numbers, dashes, and spaces
        if (!phoneRegExp.test(phone)) return false;
        let phoneNumberLength = 0;
        const phoneParts = phone.split('-');
        phoneParts.forEach(part => {
            // only want to count numbers, already removed dashes, here we remove spaces 
           phoneNumberLength += part.replace(/\s/g, '').length;
        });
        if (phoneNumberLength < 6) return false;
        
    }
    // all validations pass
    return true;
}

<html>
  <head>
    <title>Codility test</title>
  </head>
  <body>\n
    <form>\n
      <input type="radio" id="type_person" name="type" value="person" checked />\n
      <input type="radio" id="type_company" name="type" value="company" />\n
      <input type="text" id="first_name" name="first_name" value="John" />\n
      <input type="text" id="last_name" name="last_name" value="Doe" />\n
      <input type="text" id="email" name="email" value="john@example.com" />\n
      <input type="text" id="company_name" name="company_name" value="" />\n
      <input type="text" id="phone" name="phone" value="234-567-890" />\n
    </form>
  </body>
</html>

<html>
  <head>
    <title>Codility test</title>
  </head>

  <body>\n
    <form>\n
      <input type="radio" id="type_person" name="type" value="person" />\n
      <input type="radio" id="type_company" name="type" value="company" checked />\n
      <input type="text" id="first_name" name="first_name" value="John" />\n
      <input type="text" id="last_name" name="last_name" value="Doe" />\n
      <input type="text" id="email" name="email" value="john@example.com" />\n
      <input type="text" id="company_name" name="company_name" value="ACME" />\n
      <input type="text" id="phone" name="phone" value="12-3" />\n
    </form>
  </body>
</html>