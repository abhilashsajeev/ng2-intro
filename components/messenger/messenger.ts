/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, For} from 'angular2/angular2';
import {Compose} from "components/compose/compose"
import {MsgStore} from "components/messenger/MsgStore";


@Component({
  selector: 'messenger',
  injectables: [ MsgStore ]
})

@View({
  templateUrl: "components/messenger/messenger.tpl.html",
  directives: [ Compose, For ]
})

export class Messenger {
  title: string;
  messages: any[];
  constructor(msgStore: MsgStore) {
    this.title = "Messenger Manager";
    this.messages = msgStore.getAll();
  }
}


