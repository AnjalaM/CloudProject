import React from 'react';
import ReactDOM from 'react-dom'
import { IStyleSet, Label, ILabelStyles, Pivot, PivotItem } from '@fluentui/react';
import AppliedJobs from './AppliedJobs';

export default class DashBoard extends React.Component{
    render(){
        return <div>
<Pivot aria-label="Basic Pivot Example">
      <PivotItem headerText="Applied Jobs">
        <AppliedJobs user={this.props.user}/>
      </PivotItem>
      <PivotItem headerText="Saved Jobs">
        <Label >Saved Jobs</Label>
      </PivotItem>
      <PivotItem headerText="Add a Job">
        <Label >Add a Job</Label>
      </PivotItem>
    </Pivot>
        </div>
    }
}