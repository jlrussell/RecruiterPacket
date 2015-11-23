module.exports = function(ngModule){
    //describe('HomeController', function(ngModule){
    describe('HomeController', function(){

        it("Bill should be Bill", function(){
            var a = "Bill";
            var b = "Bill";
            expect(a).toEqual(b);
        });

        it("should fail test", function(){
            expect(true).toBe(false);
        });

    });
};