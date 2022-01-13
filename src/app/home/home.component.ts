import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { mockData } from '../model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: any = [];
  displayedColumns: string[] = [
    'title',
    'division',
    'project_owner',
    'status',
    'budget',
    'created',
    'modified',
  ];
  message: string;
  // Object to create Filter
  selectedFilters: any = [];
  test: any;
  data: mockData[];
  divisionOptions: unknown[];
  statusOptions: string[];
  poOptions: string[];
  titleFilter = new FormControl();
  divisionFilter = new FormControl();
  statusFilter = new FormControl();
  poFilter = new FormControl();
  budgetFilter = new FormControl();
  globalFilter = '';

  filteredValues = {
    title: '',
    division: '',
    project_owner: '',
    budget: '',
    status: '',
  };
  budgetFilterValue: any;
  showEdit = false;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private dataService: DataService
  ) {
    // subscribe to  get data and message from service
    this.dataService.currentData.subscribe((data: mockData[]) => {
      this.data = data;
      // creating data for filter
      const d = data.map((item) => item.division);
      this.divisionOptions = [...new Set(d)];

      const s = data.map((item) => item.status);
      this.statusOptions = [...new Set(s)];

      const o = data.map((item) => item.project_owner);
      this.poOptions = [...new Set(o)];

      // matDataTable data init
      this.dataSource = new MatTableDataSource(data);
    });
    this.dataService.currentMessage.subscribe((message) => {
      this.message = message;
    });
  }
  ngOnInit() {
    this.titleFilter.valueChanges.subscribe((titleFilterValue) => {
      this.filteredValues['title'] = titleFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.divisionFilter.valueChanges.subscribe((divisionFilterValue) => {
      this.filteredValues['division'] = divisionFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.statusFilter.valueChanges.subscribe((statusFilterValue) => {
      this.filteredValues['status'] = statusFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.budgetFilter.valueChanges.subscribe((budgetFilterValue) => {
      this.budgetFilterValue = budgetFilterValue;
      this.filteredValues['budget'] = budgetFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.poFilter.valueChanges.subscribe((poFilterValue) => {
      this.filteredValues['project_owner'] = poFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.dataSource.filterPredicate = this.customFilterPredicate();
  }
  edit() {
    this.showEdit = true;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  changed(event: any) {
    console.log('event:', event);
    alert(`Status has changed to ${event.value}`);
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  customFilterPredicate() {
    const filterPredicate = (data: mockData, filter: string): boolean => {
      // let globalMatch = !this.globalFilter;
      // no global search
      // if (this.globalFilter) {
      //   // search all text fields
      //   globalMatch =
      //     data.title
      //       .toString()
      //       .trim()
      //       .toLowerCase()
      //       .indexOf(this.globalFilter.toLowerCase()) !== -1;
      // }

      // if (!globalMatch) {
      //   return false;
      // }

      let searchString = JSON.parse(filter);
      return (
        data.division
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(searchString.division.toLowerCase()) !== -1 &&
        data.title
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(searchString.title.toLowerCase()) !== -1 &&
        data.status
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(searchString.status.toLowerCase()) !== -1 &&
        data.project_owner
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(searchString.project_owner.toLowerCase()) !== -1 &&
        data.budget > searchString.budget
      );
    };
    return filterPredicate;
  }
}
