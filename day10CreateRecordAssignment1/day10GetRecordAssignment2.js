import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import LEADSOURCE_FIELD from '@salesforce/schema/Lead.LeadSource';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import TITLE_FIELD from '@salesforce/schema/Lead.Title';
import PHONE_FIELD from '@salesforce/schema/Lead.Phone';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import INDUSTRY_FIELD from '@salesforce/schema/Lead.Industry';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Lead.AnnualRevenue';


export default class Day10CreateRecordAssignment1 extends LightningElement {
    @api  recordId;
    @api objectApiName;
    leadRecord;
    /*
    Name, Email, Title, Phone, Company, Industry, Annual Revenue, lead source
    */
   @wire(getRecord, {recordId: '$recordId', fields:[NAME_FIELD, LEADSOURCE_FIELD, 
    EMAIL_FIELD, TITLE_FIELD, PHONE_FIELD, COMPANY_FIELD, INDUSTRY_FIELD, ANNUALREVENUE_FIELD]})

    wiredLeadRecord({error, data}){
       if(data){
              this.leadRecord = data;
       }
       else if (error){
         console.error('Error ', JSON.stringify(error));
       }
    }

    get name(){
        return getFieldValue(this.leadRecord, NAME_FIELD);
    }
    get leadSource(){
      return getFieldValue(this.leadRecord, LEADSOURCE_FIELD);
  }
    get email(){
       return getFieldValue(this.leadRecord, EMAIL_FIELD);
    }
    get title(){
      return getFieldValue(this.leadRecord, TITLE_FIELD);
    }
    get phone(){
      return getFieldValue(this.leadRecord, PHONE_FIELD);
    }
    get company(){
      return getFieldValue(this.leadRecord, COMPANY_FIELD);
    }
    get industry(){
      return getFieldValue(this.leadRecord, INDUSTRY_FIELD);
    }
    get annualrevenue(){
      return getFieldValue(this.leadRecord, ANNUALREVENUE_FIELD);
    }
}