describe('Staging login', function() {
    it('user should be able to log in to the application', function() {

        var baseurl = "http://ui-staging.c1exchange.com/login"
        var username = Element(by.xpath('//*[@id="login"]/input'));
        var password = Element(by.xpath('//*[@id="password"]/input'));
      browser.get(baseurl);
      username.sendKeys("indadvt@c1x.com");
      password.sendKeys("pass");
      Element(by.xpath("//*[@id="my-dd"]/div/div/div[1]/form/div[4]/div[1]/button")).click();
  
      expect(browser.getTitle()).toEqual('C1X | Class One Exchange');

      
    });
  });