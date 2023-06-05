import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAccounts from '@salesforce/apex/day14Assignment1GetAccountList.getAccountList';

export default class Day14Assignment3ShowDeatailsOfEachAccount extends NavigationMixin(LightningElement) {

    accounts;
    selectedAccount;

    @wire(getAccounts)
    wiredAccounts({ error, data }){
        if(data){
           this.accounts = data;
           console.log('Accounts>>>>>>>>>>>>', this.accounts);
        } else if(error){
            console.log('Error', JSON.stringify(error));
        }
}
    handleAccountClick(event){
         const accountId = event.currentTarget.dataset.id;
         this.selectedAccount = this.accounts.find(account => account.Id === accountId);

        //  this[NavigationMixin.Navigate]({
        //     type : 'standard__recordPage',
        //     attributes : {
        //     recordId : accountId,
        //     objectApiName : 'Account',
        //     actionName : 'view'
        //     }
        //  });
    }
}