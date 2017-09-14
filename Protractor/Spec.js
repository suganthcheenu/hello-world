describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://ui-staging.c1exchange.com/login');
  
      expect(browser.getTitle()).toEqual('C1X | Class One Exchange');
      document.write(browser.getTitle());
    });
  });