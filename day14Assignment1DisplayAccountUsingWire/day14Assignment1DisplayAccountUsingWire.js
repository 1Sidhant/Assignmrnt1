import { LightningElement, wire, track } from 'lwc';
import getAccount  from '@salesforce/apex/day14Assignment1GetAccountList.getAccountList';
import insertRecord  from '@salesforce/apex/day14Assignment1GetAccountList.insertAccountFromLwc';

export default class Day14Assignment1DisplayAccountUsingWire extends LightningElement {

    @track allAccounts = [];
    @track datas = [];
    @track name;
    @track phone;

    @wire (getAccount)
    wiredAccounts({ error, data}){
        if(error){
            console.log(error);
        } else if(data){
            console.log(data); 
            this.datas = data;
        }
    }
    handleClick(event){
        event.preventDefault();
        this.allAccounts = this.datas;
    }
    handleCreateAccountClick(event){
        insertRecord({name : this.name})
        .then((result) =>{
            console.log('Record create sucessfully', result);
        })
        .then((error) =>{
            console.log('Error', error);
        })
    }
    AccountNameHandleChange(event){
        event.preventDefault();
       this.name = event.target.value;
    }
    AccountPhoneHandleChange(event){
        event.preventDefault();
       this.phone = event.target.value;
    }
}