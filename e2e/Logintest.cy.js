import LoginPage from '../pageObject/logPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should handle all login scenarios with assertions', () => {
    cy.fixture('loginData').then((data) => {
      
      for (let i = 0; i < data.length; i++) {
        const loginData = data[i];

        const { username, password} = loginData;

        
        loginPage.login(username, password);

        
        if (username === 'mor_2314' && password === '83r5^_') {
          
          loginPage.verifyLoginPage();
          loginPage.logout();
        } else {
          
          cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Login Failed');
          });
        }
      }
    });
  });
});