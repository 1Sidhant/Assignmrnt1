import { LightningElement, track } from 'lwc';

export default class Assignment_Day_2 extends LightningElement {
    @track values = [];
    tempValue
    get options (){
        return[
            {label:'Low', value:'Low'},
            {label:'Medium', value:'Medium'},
            {label:'High', value:'High'},
        ];
    }
      handleChangeTaskInput(event){
        this.tempValue = event.detail.value;
        //this.values.push(event.detail.value);
          
 }
    
    handleClick(event){
        
         this.values.push(this.tempValue);
         console.log('passssssssss>>>>>>'+this.values);
    }












firstName;
lastName;
email;
phone;
title;
department;
    handleChangeFirstName(event){
        event.preventDefault();
        this.firstName = event.detail.value;
    }
    handleChangeLastName(event){
        event.preventDefault();
        this.lastName = event.detail.value;
    }
    handleChangeEmail(event){
        event.preventDefault();
    this.email = event.detail.value;
    }
    handleChangePhone(event){
        event.preventDefault();
    this.phone = event.detail.value;
    }
    handleChangeTitle(event){
        event.preventDefault();
    this.title = event.detail.value;
    }
    handleChangeDepartment(event){
        event.preventDefault();
    this.department = event.detail.value;
    }
    handleClick(){
        console.log('FirstName = '+ this.firstName);
        console.log('Last name = '+this.lastName);
        console.log('Email = '+this.email);
        console.log('Phone = '+this.phone);
        console.log('Title = '+this.title);
        console.log('Department= '+this.department);
    }
}