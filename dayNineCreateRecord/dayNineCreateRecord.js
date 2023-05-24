// createRecordForm.js
import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class CreateRecordForm extends LightningElement {
  @track firstName = '';
  @track lastName = '';
  @track email = '';
  @track accountName = '';

  handleFirstNameChange(event) {
    this.firstName = event.target.value;
  }

  handleLastNameChange(event) {
    this.lastName = event.target.value;
  }

  handleEmailChange(event) {
    this.email = event.target.value;
  }

  handleAccountNameChange(event) {
    this.accountName = event.target.value;
  }

  createRecord() {
    const accountFields = {
      Name: this.accountName
    };

    const contactFields = {
      FirstName: this.firstName,
      LastName: this.lastName,
      Email: this.email,
      AccountId: '' // Placeholder for the created account ID
    };

    const accountRecordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields: accountFields };
    const contactRecordInput = { apiName: CONTACT_OBJECT.objectApiName, fields: contactFields };

    createRecord(accountRecordInput)
      .then(accountResult => {
        // Get the created account ID
        const accountId = accountResult.id;

        // Set the AccountId field in contactFields
        contactRecordInput.fields.AccountId = accountId;

        // Create the contact record with the AccountId set
        return createRecord(contactRecordInput);
      })
      .then(contactResult => {
        // Success message or any additional logic
        console.log('Contact created: ', contactResult);
      })
      .catch(error => {
        // Error message or error handling
        console.error('Error creating contact and account: ', error);
      });
  }
}














/*
import { LightningElement } from 'lwc';
// create the record
import { createRecord } from 'lightning/uiRecordApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName'; 
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId';

export default class DayNineCreateRecord extends LightningElement {
    accountRecordFields = {};
    contactRecordFields = {};

    handleClick(){
        Event.event.preventDefault();
        let fields = this.accountRecordFields;
            const recordInput = {
                apiName: ACCOUNT_OBJECT.objectApiName,
            fields
            }

        createRecord(recordInput)  // return promise or then catch and finally
        .then((result)=> {
            if(result){
                let accountId = result.Id;
                 this.handleContactCreate(accountId);
            }
        })
        .catch((error) =>{
            console.log(JSON.stringify(error));
        })
        .finally(() =>{
            // will execute always either success or error
        })
    }

    handleContactCreate(accountId){
            let fields = this.contactRecordFields;
            fields[ACCOUNTID_FIELD.fieldApiName] = accountId;
        const recordInput = {
            apiName: CONTACT_OBJECT.objectApiName,
             fields
        }
        createRecord(recordInput)  // return promise or then catch and finally
        .then((result)=> {
            if(result){
                let contactId = result.id;
            }
        })
        .catch((error) =>{
            console.log(JSON.stringify(error));
        })
        .finally(() =>{
            // will execute always either success or error
        })
    }

    handleAccountInputChange(event){
        event.preventDefault();
        let {name, value} = event.target;
        this.accountRecordFields[name] = value;
    }
    handleContactInputChange(event){
        event.preventDefault();
        let {name, value} = event.target;
        this.contactRecordFields[name] = value;
    }
}*/