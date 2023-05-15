import { LightningElement, track } from 'lwc';

export default class FirstAssignmentDayFive extends LightningElement {
ContactsList = [];
    handleClick(){
        let childComponent = this.template.querySelector('c-child-of-first-assignmnet-day-five');
        if(childComponent){
            childComponent.handleClick();
        }
    }

    handleChildComponent(event){
         event.preventDefault();
           let value = event.detail;
           this.ContactsList = value;
         console.log(JSON.stringify(this.ContactsList));
    }
}