describe("isMobile", function() {
  var mobile;
  var userAgent;

  beforeEach(function() {
    mobile    = null;
    userAgent = null;
  });

  describe("Android", function(){

    describe("Phone UserAgent", function() {

      beforeEach(function() {
        userAgent = "Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>";
        mobile = new isMobile.Class(userAgent);
      });

      it("should be an Android Phone", function() {
        expect(mobile.android.phone).toBe(true);
      });

      it("should not be an Android Tablet", function() {
        expect(mobile.android.tablet).not.toBe(true);
      });

      it("should be an Android device", function() {
        expect(mobile.android.device).toBe(true);
      });

    });

  });


});