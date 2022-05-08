import React from 'react';
import ReactDOM from 'react-dom'
import Jobs from './data/job.json';
import { TextField } from '@fluentui/react/lib/TextField';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Announced } from '@fluentui/react/lib/Announced';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { TooltipHost } from '@fluentui/react';
import { v4 as uuid } from 'uuid';
import { JobsService } from './services/JobsService';
export default class AppliedJobs extends React.Component{
   unique_id = uuid();
   service=new JobsService();
     columns = [
       
        {
          key: 'column2',
          name: 'Company Name',
          fieldName: 'name',
          minWidth: 210,
          maxWidth: 350,
          isRowHeader: true,
          isResizable: true,
          isSorted: true,
          isSortedDescending: false,
          sortAscendingAriaLabel: 'Sorted A to Z',
          sortDescendingAriaLabel: 'Sorted Z to A',
          onColumnClick: this._onColumnClick,
          data: 'string',
          isPadded: true,
          onRender: (item) => {
            return <span>{item.companyName}</span>;
          },
        },
        {
          key: 'column3',
          name: 'Role',
          fieldName: 'dateModifiedValue',
          minWidth: 70,
          maxWidth: 90,
          isResizable: true,
          onColumnClick: this._onColumnClick,
          data: 'string',
          onRender: (item) => {
            return <span>{item.role}</span>;
          },
          isPadded: true,
        },
        {
          key: 'column4',
          name: 'Location',
          fieldName: 'modifiedBy',
          minWidth: 70,
          maxWidth: 90,
          isResizable: true,
          isCollapsible: true,
          data: 'string',
          onColumnClick: this._onColumnClick,
          onRender: (item) => {
            return <span>{item.location}</span>;
          },
          isPadded: true,
        },
        {
          key: 'column5',
          name: 'Status',
          fieldName: 'fileSizeRaw',
          minWidth: 70,
          maxWidth: 90,
          isResizable: true,
          isCollapsible: true,
          data: 'string',
          onColumnClick: this._onColumnClick,
          onRender: (item) => {
            return <span>{item.status}</span>;
          },
        },
        {
            key: 'column6',
            name: 'Last Modified date',
            fieldName: 'lastmodifieddate',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true,
            isCollapsible: true,
            data: 'number',
            onColumnClick: this._onColumnClick,
            onRender: (item) => {
              return <span>{item.modifiedDate}</span>;
            },
          },
      ];
    constructor(props){
        super(props);
        this.state={
          items:[],
          isLoading:true
      }
    
        Promise.all([ this.getJobs()])
       
       console.log(this.state)
       console.log(this.unique_id)
    }
    async getJobs(){
      await this.service.getJobs(this.props.user.attributes.email).then((data)=>
      this.setState({
        items:data,
        isLoading:false
      },()=>{console.log(this.state.items)}))
    }
     _generateDocuments() {
        const items=[];
       Jobs.map((item)=>{
          items.push({
            companyName:item.companyName,
            role:item.role,
            location:item.location,
            status:item.status,
            lastmodifiedDate:new Date(item.modifiedDate).toDateString()
          })})
        
        return items;
      }
    render(){
        return <div>
            <h1>Hello!!!</h1>{
              this.state.isLoading?
              <h1>Data is loading.......</h1>
              :
            <DetailsList
            items={this.state.items}
            columns={this.columns}
            selectionMode={SelectionMode.none}
            getKey={this._getKey}
            setKey="none"
            layoutMode={DetailsListLayoutMode.justified}
            isHeaderVisible={true}
            onItemInvoked={this._onItemInvoked}
          />}
        </div>
    }
}