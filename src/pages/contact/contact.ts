import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(private sms: SMS, private callNumber: CallNumber) {

  }

  call(){
    this.callNumber.callNumber("8116029194", true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  mensaje(){
    this.sms.send('8110116987', 'Hello world!');
  }

}
