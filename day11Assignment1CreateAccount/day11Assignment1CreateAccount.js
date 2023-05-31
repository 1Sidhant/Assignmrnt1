import { LightningElement, track, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class CreateAccountForm extends LightningElement {
    @track isLoading = false;
    @track selectedIndustry;
    @track accountName;
    @track phone;
    industryOptions = [];

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT } )
    objectInfo;

    @wire( getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD } )
    wiredData( { error, data } ) {

        if ( data ) {                 
            console.log( 'Data received from Picklist Field ' + JSON.stringify( data.values ) );
            this.industryOptions = data.values.map( objPL => {
                return {
                    label: `${objPL.label}`,
                    value: `${objPL.value}`
                };
            });
            console.log( 'industryOptions are ' + JSON.stringify( this.industryOptions ) );

        } else if ( error ) {
            console.error( JSON.stringify( error ) );
        }
    }

    handleIndustryChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    handleNameChange(event) {
        this.accountName = event.target.value;
    }

    handlePhoneChange(event) {
        this.phone = event.target.value;
    }

    handleSave() {
        this.isLoading = true;
        const fields = {
            Name: this.accountName,
            Phone: this.phone,
            Industry: this.selectedIndustry
        };

        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };

        createRecord(recordInput)
            .then(result => {
                console.log('Account record created:', result.id);
                // Reset form fields
                this.selectedIndustry = '';
                this.accountName = '';
                this.phone = '';
                this.isLoading = false;
            })
            .catch(error => {
                console.error('Error creating Account record:', error);
                this.isLoading = false;
            });
    }
}
