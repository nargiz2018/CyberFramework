require('../Utilities/CustomLocators.js');
var BankManagerPage=require('./BankManager.page.js')

var AddCustomerPage = function(){
    this.formLabels=$$('.form-group>label');
    this.firstNameInputBox=element(by.model('fName'));
    this.lastNameInputBox=element(by.model("lName"));
    this.postalCodeInputBox=element(by.model("postCd"));
    this.formAddCustomerButton=element(by.css('.btn-default'));
    this.firstNameLabel=element(by.cssContainingText('label','First Name :'));
    this.lastNameLabel=element(by.cssContainingText('label','Last Name :'));
    this.zipCodeLabel=element(by.cssContainingText('label', 'Post Code :'));
    this.formRequiredFields=element.all(by.css('input:required'));
    this.customerForm=element(by.name('myForm'));

    this.goToAddCustomer=function(){
        BankManagerPage.addCustomerButton.click();
    }
}

module.exports=new AddCustomerPage();