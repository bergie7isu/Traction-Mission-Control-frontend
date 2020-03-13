import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import ActiveMetrics from '../ActiveMetrics/ActiveMetrics';
import ArchivedMetrics from '../ArchivedMetrics/ArchivedMetrics';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './Scorecard.css';

class Scorecard extends Component {
  static contextType = TractionMissionControlContext;
  render() {
    return (
      <div className='scorecard'>
        <Nav />
        <h1 className='route-heading'>Scorecard</h1>
        <ActiveMetrics />
        <ArchivedMetrics />
      </div>
    );
  };
};

export default Scorecard;