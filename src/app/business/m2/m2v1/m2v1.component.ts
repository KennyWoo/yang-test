import { Component, OnInit ,Inject} from '@angular/core';
import { GetList } from '../../services/getlist';
import * as wjCore from 'wijmo/wijmo';
//import * as wjInput from 'wijmo/wijmo.input';
import * as wjGrid from 'wijmo/wijmo.grid';
import { PageBackList } from '../../../module/getlist';
import ConstantsList from '../../../common/constants/config';
'use strict';

declare var $:any;
@Component({
  selector: 'app-m2v1',
  templateUrl: './m2v1.component.html',
  styleUrls: ['./m2v1.component.css']
})
export class M2v1Component implements OnInit {

  private GetList: GetList;
  cvPaging: wjCore.CollectionView = new wjCore.CollectionView();
  pageNews:number[] = [];
  comId:number = 10;
  comIdList:number[] = [10,15,20,25,50,100];

  constructor(@Inject(GetList) getList: GetList) {
    this.GetList = getList;
    this.bindpage(1);
  }

  bindpage(event:number):void {
    this.GetList.GetListPageBySSM(event,this.comId).then(backobj =>{
      this.cvPaging.sourceCollection = backobj.List;
      this.pageNews = backobj.pageNews;
    });
  }

  ngOnInit() {
    $("#content").css("min-height", $(window).height() - ConstantsList.pageHeight);//min-height
  }

  itemFormatter(panel, r, c, cell) {
      if (panel.cellType === wjGrid.CellType.ColumnHeader) {cell.style.textAlign = 'center';}
      if(panel.cellType === wjGrid.CellType.Cell){ cell.style.textAlign = 'center'; }
  }

  onChange(classId){
    this.comId=classId;
    this.bindpage(1);
  }

}
