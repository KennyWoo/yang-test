import { Http, Headers } from '@angular/http';

const ConstantsList = Object.freeze({
  HOSTUser : 'http://114.215.44.2:8080/',
  headers : new Headers({'Content-Type': 'application/json'}),
  pageSize : 10,
  pageHeight:145,
});
export default ConstantsList;
