import { Component, ViewChild } from '@angular/core';
import { DxButtonModule, DxDataGridComponent, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import 'devextreme/data/odata/store';
import { InitNewRowEvent } from 'devextreme/ui/data_grid';
import { TestsComponent } from '../tests/tests.component';

@Component({
  templateUrl: 'tasks.component.html',
  standalone: true,
  imports:[
    DxDataGridModule, DxButtonModule, DxSelectBoxModule,TestsComponent
  ]
})

export class TasksComponent {
  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent | undefined;
  dataSource: any;
  priority: any[];
  status: any[];
  constructor() {
    this.dataSource = {
      store: {
        type: 'odata',
        key: 'Task_ID',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
      },
      expand: 'ResponsibleEmployee',
      select: [
        'Task_ID',
        'Task_Subject',
        'Task_Start_Date',
        'Task_Due_Date',
        'Task_Status',
        'Task_Priority',
        'Task_Completion',
        'ResponsibleEmployee/Employee_Full_Name'
      ]
    };
    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];
    this.status = [{ name: 'Completed', value: 1 }, { name: 'In Progress', value: 2 }, { name: 'Need Assistance', value: 3 }];
  }
  onCreation(event: InitNewRowEvent<any, string>): void {
    event.component.option('editing.mode', 'popup');
  }
  onEditionDone(): void {

    this.dataGrid?.instance.option('editing.mode', 'cell');
  }
}
