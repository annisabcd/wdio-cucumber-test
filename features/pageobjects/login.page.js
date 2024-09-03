const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
    
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('//*[@id="login-button"]');
    }

    get errorMessage () {
        return $('//*[@id="login_button_container"]/div/form/div[3]/h3');
    }
      
    get errorWarning () {
        return $('//*[@id="login_button_container"]/div/form/div[3]/h3'); 
    }
    async login(username, password) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async login(username, password) {
        await this.inputUsername.waitForDisplayed();

        if (username !== '') {
            await this.inputUsername.setValue(username);
        }

        if (password !== '') {
            await this.inputPassword.setValue(password);
        }

        await this.btnSubmit.click();
    }
   
   async validateWrongAction(expectedWarning) {
        await expect(this.errorWarning).toHaveText(expectedWarning);
    }
    
    async validateWrongPasswordDisplayed(expectedMessage) {
            await expect(this.errorMessage).toHaveText(expectedMessage);
    }
  
    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
