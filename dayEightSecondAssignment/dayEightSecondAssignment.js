import { LightningElement, track } from 'lwc';
import PRIORITY_FIELDS from '@salesforce/schema/Case.priority';
import Account_FIELDS from '@salesforce/schema/Case.AccountId';
import Contact_FIELDS from '@salesforce/schema/Case.ContactId';
import Description_FIELDS from '@salesforce/schema/Case.Description';


export default class DayEightSecondAssignment extends LightningElement {
    @track fields = [
            {objectApiName: 'Case', fieldApiName: 'Case Number'},
            {objectApiName: 'Case', fieldApiName: 'Status'},
             PRIORITY_FIELDS,
             Account_FIELDS,
             Contact_FIELDS,
             Description_FIELDS
    ];
}