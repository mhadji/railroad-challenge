import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mockData } from '../model';
const DATA = [
  {
    title: 'Tagtune',
    division: 'Accounting',
    project_owner: 'Kevin Snyder',
    budget: 20614.14,
    status: 'archived',
    created: '09/14/2015',
    modified: '10/02/2015',
  },
  {
    title: 'Oyoyo',
    division: 'Administration',
    project_owner: 'Eugene Brown',
    budget: 22106.44,
    status: 'new',
    created: '07/17/2015',
    modified: null,
  },
  {
    title: 'Lajo',
    division: 'Marketing',
    project_owner: 'Killgore Trout',
    budget: 15481.27,
    status: 'working',
    created: '07/19/2015',
    modified: '09/17/2015',
  },
  {
    title: 'Blognation',
    division: 'Administration',
    project_owner: 'Richard Henry',
    budget: 24017.98,
    status: 'working',
    created: '08/03/2015',
    modified: '09/17/2015',
  },
  {
    title: 'Vinte',
    division: 'Administration',
    project_owner: 'Michelle Webb',
    budget: 12935.84,
    status: 'working',
    created: '08/05/2015',
    modified: '09/15/2015',
  },
  {
    title: 'Aibox',
    division: 'Administration',
    project_owner: 'Killgore Trout',
    budget: 15991.78,
    status: 'working',
    created: '09/03/2015',
    modified: '10/02/2015',
  },
  {
    title: 'Buzzdog',
    division: 'Administration',
    project_owner: 'Michelle Webb',
    budget: 22610.09,
    status: 'archived',
    created: '07/26/2015',
    modified: '10/01/2015',
  },
  {
    title: 'Plambee',
    division: 'Sales',
    project_owner: 'Michelle Webb',
    budget: 14229.02,
    status: 'archived',
    created: '09/14/2015',
    modified: '10/01/2015',
  },
  {
    title: 'Photobug',
    division: 'Administration',
    project_owner: 'James Holden',
    budget: 10959.29,
    status: 'working',
    created: '09/03/2015',
    modified: '09/18/2015',
  },
  {
    title: 'Quimm',
    division: 'Marketing',
    project_owner: 'James Holden',
    budget: 14139.38,
    status: 'delivered',
    created: '08/02/2015',
    modified: '09/26/2015',
  },
  {
    title: 'Innojam',
    division: 'Sales',
    project_owner: 'Eugene Brown',
    budget: 24318.05,
    status: 'working',
    created: '09/13/2015',
    modified: '09/20/2015',
  },
  {
    title: 'Jaxworks',
    division: 'Production',
    project_owner: 'Michelle Webb',
    budget: 15054.27,
    status: 'new',
    created: '08/12/2015',
    modified: null,
  },
  {
    title: 'Skyble',
    division: 'Accounting',
    project_owner: 'Richard Henry',
    budget: 13810.1,
    status: 'delivered',
    created: '07/12/2015',
    modified: '09/21/2015',
  },
  {
    title: 'Photobean',
    division: 'Marketing',
    project_owner: 'Michelle Webb',
    budget: 12637.95,
    status: 'working',
    created: '08/24/2015',
    modified: '09/15/2015',
  },
  {
    title: 'Topicware',
    division: 'Administration',
    project_owner: 'Eugene Brown',
    budget: 9667.52,
    status: 'working',
    created: '08/01/2015',
    modified: '09/29/2015',
  },
  {
    title: 'Buzzster',
    division: 'Production',
    project_owner: 'Nicole Smith',
    budget: 14657.54,
    status: 'working',
    created: '08/09/2015',
    modified: '09/18/2015',
  },
  {
    title: 'Twinte',
    division: 'Administration',
    project_owner: 'Kevin Snyder',
    budget: 17729.37,
    status: 'delivered',
    created: '09/09/2015',
    modified: '09/18/2015',
  },
  {
    title: 'Blognation',
    division: 'Production',
    project_owner: 'Eugene Brown',
    budget: 19540.82,
    status: 'archived',
    created: '07/21/2015',
    modified: '09/22/2015',
  },
  {
    title: 'Flashdog',
    division: 'Production',
    project_owner: 'Michelle Webb',
    budget: 24870.61,
    status: 'working',
    created: '07/05/2015',
    modified: '10/02/2015',
  },
  {
    title: 'Yakijo',
    division: 'Accounting',
    project_owner: 'Killgore Trout',
    budget: 23533.54,
    status: 'working',
    created: '08/12/2015',
    modified: '10/01/2015',
  },
  {
    title: 'Quatz',
    division: 'Sales',
    project_owner: 'Richard Henry',
    budget: 23639.65,
    status: 'archived',
    created: '07/19/2015',
    modified: '09/19/2015',
  },
  {
    title: 'Dabjam',
    division: 'Marketing',
    project_owner: 'Kevin Snyder',
    budget: 14356.55,
    status: 'new',
    created: '08/22/2015',
    modified: null,
  },
  {
    title: 'Meetz',
    division: 'Sales',
    project_owner: 'Kevin Snyder',
    budget: 13882.22,
    status: 'delivered',
    created: '08/26/2015',
    modified: '10/01/2015',
  },
  {
    title: 'Flipopia',
    division: 'Marketing',
    project_owner: 'Eugene Brown',
    budget: 10306.87,
    status: 'delivered',
    created: '08/11/2015',
    modified: '09/17/2015',
  },
  {
    title: 'Quaxo',
    division: 'Administration',
    project_owner: 'Nicole Smith',
    budget: 13945.69,
    status: 'archived',
    created: '07/13/2015',
    modified: '09/21/2015',
  },
  {
    title: 'Trunyx',
    division: 'Production',
    project_owner: 'Nicole Smith',
    budget: 23136.21,
    status: 'delivered',
    created: '09/03/2015',
    modified: '09/19/2015',
  },
  {
    title: 'Dabtype',
    division: 'Marketing',
    project_owner: 'Richard Henry',
    budget: 22000.98,
    status: 'archived',
    created: '08/26/2015',
    modified: '09/28/2015',
  },
  {
    title: 'Meetz',
    division: 'Marketing',
    project_owner: 'Eugene Brown',
    budget: 17620.23,
    status: 'new',
    created: '09/08/2015',
    modified: null,
  },
  {
    title: 'Kimia',
    division: 'Sales',
    project_owner: 'Richard Henry',
    budget: 12061.73,
    status: 'archived',
    created: '08/31/2015',
    modified: '09/29/2015',
  },
  {
    title: 'Dazzlesphere',
    division: 'Accounting',
    project_owner: 'Eugene Brown',
    budget: 21443.97,
    status: 'archived',
    created: '07/20/2015',
    modified: '10/01/2015',
  },
];
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSource = new BehaviorSubject<mockData[]>(DATA);
  currentData = this.dataSource.asObservable();
  private message = new BehaviorSubject<string>('');
  currentMessage = this.message.asObservable();
  result: mockData[] = [];

  constructor() {}
  // filterData(selectedFilters: any) {
  //   this.result = [];
  //   console.log('selectedFilters:', selectedFilters);
  //   // const filterVal = selectedFilters[0].filterValue.toLowerCase();
  //   this.changeData(DATA);
  //   const tempData = [...DATA];

  //   tempData.forEach((item) => {
  //     if (
  //       selectedFilters.title !== '' &&
  //       item.title.toLocaleLowerCase().includes(selectedFilters.title)
  //     ) {
  //       this.result.push(item);
  //     }

  //     if (
  //       selectedFilters.division !== '' &&
  //       item.division === selectedFilters.division
  //     ) {
  //       this.result.push(item);
  //     }
  //   });

  //   if (this.result.length > 0) {
  //     this.changeMessage(`${this.result.length} record(s) has found.`);
  //   } else {
  //     this.changeMessage(`${this.result.length} record(s) has found.`);
  //   }
  //   this.changeData(this.result);
  //   // if (selectedFilters.division) {
  //   //   res = tempData.filter(
  //   //     (item) => item.division === selectedFilters.division
  //   //   );
  //   //   if (res.length > 0) {
  //   //     this.changeData(res);
  //   //     this.changeMessage(`${res.length} record(s) has found.`);
  //   //   } else {
  //   //     this.changeData(DATA);
  //   //   }
  //   // }

  //   console.log('res:', this.result);
  //   // res = tempData.filter((item) => item.division === selectedFilters.division);

  //   // if (filterItem.filterVal === '') {
  //   //   this.changeData(DATA);
  //   // }
  // }

  changeData(data: mockData[]) {
    this.dataSource.next(data);
  }
  changeMessage(newMessage: string) {
    this.message.next(newMessage);
  }
}
