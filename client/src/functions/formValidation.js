export const validateEmail = (email) => {

    // custom email regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email || email.length === 0) {
      return 'Email is required'; 
    }
  
    if (!regex.test(email)) {
      return 'Invalid email format';
    }
  
    // other custom validations...
    
    return null; 
}

export function validatePassword(password) {
    const minLength = 8;
    const hasNumber = /[0-9]/;
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;
    const hasUpper = /[A-Z]/;
    const hasLower = /[a-z]/;

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }
    if (!hasNumber.test(password)) {
        return "Password must contain at least one number.";
    }
    if (!hasSymbol.test(password)) {
        return "Password must contain at least one symbol.";
    }
    if (!hasUpper.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!hasLower.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    return "";
}


