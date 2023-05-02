import { LightningElement, wire } from 'lwc';
import exef2 from '@salesforce/apex/oppconsulta.getoppLwc';

export default class ApexWireMethodToProperty extends LightningElement {
    @wire(getoppLwc) opps;
}