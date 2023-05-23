import { LightningElement, track } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case';
import PRIORITY_FIELDS from '@salesforce/schema/Case.priority';
import Account_FIELDS from '@salesforce/schema/Case.AccountId';
import Contact_FIELDS from '@salesforce/schema/Case.ContactId';
import Description_FIELDS from '@salesforce/schema/Case.Description';


export default class DayEightSecondAssignment extends LightningElement {
    caseObject = CASE_OBJECT;
    @track myFields = [
            {objectApiName: 'Case', fieldApiName: 'CaseNumber'},
            {objectApiName: 'Case', fieldApiName: 'Status'},
             PRIORITY_FIELDS,
             Description_FIELDS,
             Contact_FIELDS
    ];
}