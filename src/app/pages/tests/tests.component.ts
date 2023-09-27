import { Component } from '@angular/core';
import 'devextreme/data/odata/store';

@Component({
  templateUrl: 'tests.component.html',
  selector:'app-test',
  standalone:true
})

export class TestsComponent {

  constructor() {
    alert('Here');
  }
}
