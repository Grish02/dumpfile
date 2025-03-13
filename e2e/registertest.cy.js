import RegisterPage from '../pageObject/registerpage';

describe('Magento Registration Test', () => {

  beforeEach(() => {
    RegisterPage.visit();
  });

  it('should register a new user successfully', () => {
    RegisterPage.fillRegistrationForm('Robert', 'Hill', 'robert.hill@example.com', 'TestPassword123', 'TestPassword123');

    RegisterPage.submitRegistration();
  
  });
{delay :40000} 
  it('should show an error message when the email is already registered', () => {
    
    RegisterPage.fillRegistrationForm('Jane', 'Smith', 'existing.email@example.com', 'TestPassword123', 'TestPassword123');

    RegisterPage.submitRegistration();

    RegisterPage.verifyErrorMessage();
  });

});
{delay :200} 
import LoginPage from '../pageObject/loginpage';

describe('Login functionality', () => {
  const loginPage = new LoginPage();
  
  beforeEach(() => {
    loginPage.visit();
  });

  it('should login with valid credentials', () => {
    loginPage.enterEmail('testuser@example.com');
    loginPage.enterPassword('password123');
    loginPage.clickLoginButton();
    loginPage.assertLoginSuccess();
  });
  {delay :200} 
  it('should show error with invalid credentials', () => {
    loginPage.enterEmail('wronguser@example.com');
    loginPage.enterPassword('wrongpassword');
    loginPage.clickLoginButton();
    loginPage.assertLoginFailure();
  });
})

