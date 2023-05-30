import { LightningElement, api } from 'lwc';
import { updateRecord, deleteRecord } from 'lightning/uiRecordApi';
import FIRSTNAME_FIELD from '@salesforce/schema/Lead.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Lead.LastName';
import ID_FIELD from '@salesforce/schema/Lead.Id';

export default class LdsDay10UpdaterecordAssignment3 extends LightningElement {
    @api recordId;
    isloading = false;

    handleClick(event){
        event.preventDefault();
        this.isloading = true;
        const fields = {};
        // fields[ID_FIELD.fieldApiName] = this.recordId; //////////// Id field of lead = dybamic value
        // fields[NAME_FIELD.fieldApiName] = 'LDS Update Record'; /// ////// Name field of Lead = text value
        // WE CAN ALSO USE API NAME OF FIELD DIRECTLY IN THE PALE OF ID_FIELD.fieldApiName
        // fields['iD'] = this.recordId; THIS WILL ALSO WORK

        fields[ID_FIELD.fieldApiName] = this.recordId;
        fields[LASTNAME_FIELD.fieldApiName] = "Brrar";
        
        const recordInput = {fields}

        updateRecord(recordInput)
        .then((response) =>{
          console.log('sucess>>>>',response);  
        })
        .catch((error) =>{
            console.log('Error ', error);
        })
        .finally(()=>{
            console.log('Finally block');
            // always execute
            this.isloading = false;
        })
    }
    handleDeleteClick(event){
        event.preventDefault();

        deleteRecord(this.recordId)
        .then((response) =>{
          console.log('sucess>>>>',response);  
        })
        .catch((error) =>{
            console.log('Error ', error);
        })
        .finally(()=>{
            console.log('Finally block');
            // always execute
            this.isloading = false;
        })
    }
}