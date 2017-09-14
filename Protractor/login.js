describe('Staging login', function() {
    it('user should be able to log in to the application', function() {

        var baseurl = "http://ui-staging.c1exchange.com/login"
        var username = "indadvt@c1x.com";
        var password = "test";

      browser.get(baseurl);
      browser.element(by.xpath('//*[@id="login"]/input')).sendKeys(username);
      browser.element(by.xpath('//*[@id="password"]/input')).sendKeys(password);
      browser.element(by.buttonText("Sign in")).click();
  
      expect(browser.getText(by.xpath('//*[@id="drop2"]/span[1]'))).toEqual('Ind Adv Advertiser');

      
    });
  });