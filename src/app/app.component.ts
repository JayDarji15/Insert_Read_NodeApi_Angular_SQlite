import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sqliteConn';
  users:any[] =[]
  constructor(private dataService: DataService){}
  ngOnInit(): void {
    this.readRecords();
  }
  createRecord(data: any) {

    // Call the create method from your data service to add a new record.
    this.dataService.create(data).subscribe((data:any)=>{
    });
    this.readRecords() 
  }

  async readRecords():Promise<any> {
    this.dataService.read().subscribe((data: any) => {
      this.users = data;
    });
  }
}
