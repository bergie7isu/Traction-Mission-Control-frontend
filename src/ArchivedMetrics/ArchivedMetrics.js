import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
//import './ArchivedMetrics.css';

class ArchivedMetrics extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    return (
      <div className='archived-metrics'>
        <h1 className='route-heading'>Archived Metrics</h1>
      </div>
    );
  };
};

export default ArchivedMetrics;