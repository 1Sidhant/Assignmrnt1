import { api, LightningElement } from 'lwc';

export default class ChildOfFirstAssignmnetDayFive extends LightningElement {
    @api
    handleClick(){
         let childEvent = new CustomEvent('click',{
            detail: [{
                  "Id": 1,
                  "AccountId": "@AccountRef1",
                  "FirstName": "Amy",
                  "LastName": "Taylor",
                  "Title": "VP of Engineering",
                  "Email": "amy@demo.net",
                  "Phone": "4152568563",
                  "Picture__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"
                },
                {
                  "Id": 2,
                  "AccountId": "@AccountRef2",
                  "FirstName": "Michael",
                  "LastName": "Jones",
                  "Title": "VP of Sales",
                  "Email": "michael@demo.net",
                  "Phone": "4158526633",
                  "Picture__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
                },
                {
                  "Id": 3,
                  "AccountId": "@AccountRef1",
                  "FirstName": "Jennifer",
                  "LastName": "Wu",
                  "Title": "CEO",
                  "Email": "jennifer@demo.net",
                  "Phone": "4158521463",
                  "Picture__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
                },
                {
                  "Id": 4,
                  "AccountId": "@AccountRef2",
                  "FirstName": "Anup",
                  "LastName": "Gupta",
                  "Title": "VP of Products",
                  "Email": "anup@demo.net",
                  "Phone": "4158526398",
                  "Picture__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"
                },
                {
                  "Id": 5,
                  "AccountId": "@AccountRef1",
                  "FirstName": "Caroline",
                  "LastName": "Kingsley",
                  "Title": "VP of Technology",
                  "Email": "caroline@demo.net",
                  "Phone": "4158753654",
                  "Picture__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
                },
                {
                  "Id": 6,
                  "AccountId": "@AccountRef2",
                  "FirstName": "Jonathan",
                  "LastName": "Bradley",
                  "Title": "VP of Operations",
                  "Email": "jonathan@demo.net",
                  "Phone": "4158885522",
                  "Picture__c": "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
                }
              ]});
            this.dispatchEvent(childEvent);
    }
}