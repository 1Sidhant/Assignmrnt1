import { LightningElement, track } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import OOPORTUNITYNAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';

export default class ComboboxBasic extends LightningElement {
    selectedValue = '';
    @track createAccount = false;
    @track createContact = false;
    @track createOpportunity = false;

    get options() {
        return [
            { label: 'Account', value: 'Account' },
            { label: 'Contact', value: 'Contact' },
            { label: 'Opportunity', value: 'Opportunity' },
        ];
    }
    handleChange(event) {
        this.selectedValue = event.detail.value;
        if(this.selectedValue == 'Account'){
            this.createAccount = true;
            this.createContact = false;
            this.createOpportunity = false;
        }
        else if(this.selectedValue == 'Contact'){
            this.createContact = true;
            this.createAccount = false;
            this.createOpportunity = false;
        }
        else if(this.selectedValue == 'Opportunity'){
            this.createOpportunity = true;
            this.createAccount = false;
            this.createContact = false;
        }
    }
    accountFields = [NAME_FIELD, INDUSTRY_FIELD, PHONE_FIELD];
    contactFields = [FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD];
    opportunityFields = [OOPORTUNITYNAME_FIELD, STAGENAME_FIELD, CLOSEDATE_FIELD];

    handleCreateAcccountSuccessMessage(event){
        window.alert('Your account is created successfully with this recordId '+ event.detail.id);
    }
}
