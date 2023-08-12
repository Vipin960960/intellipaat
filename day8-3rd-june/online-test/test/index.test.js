// var chai = require("chai");
var { expect } = require("chai");
var index = require("../index");

//------------------------------------

describe("checking for user property", function(){
    var idx = null;
    this.beforeEach(function(){
        console.log("Before Each was called");
        idx = index;
    });
    it("should check for the property user", function(){
       expect(idx.users).to.be.undefined;
    });
    it("should check for user to be vijay", function(){
        expect(idx.user).to.equal("vijay");
    });
    it("should check for length of user to be 5", function(){
        expect(idx.user.length).to.equals(5);
    });

    this.afterEach(function(){
        console.log("After all was called");
        idx = null;
    })

})