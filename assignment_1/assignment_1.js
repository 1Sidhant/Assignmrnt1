import { LightningElement, track } from 'lwc';

export default class Assignment_1 extends LightningElement {

     options = 
         [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' }, 
        ];

        handleChangeName(event){
            event.preventDefault();
        }
}