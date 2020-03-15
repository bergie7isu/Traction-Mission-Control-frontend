import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import ActiveMetrics from '../ActiveMetrics/ActiveMetrics';
import ArchivedMetrics from '../ArchivedMetrics/ArchivedMetrics';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './Scorecard.css';
import moment from 'moment';

class Scorecard extends Component {
  static contextType = TractionMissionControlContext;
  constructor(props) {
    super(props);
    this.state={
      startDate: moment("2020-03-14").subtract(20, 'weeks').format('YYYY-MM-DD'),
      endDate: moment("2020-03-14").format('YYYY-MM-DD')
    };
  };
  render() {
    const dates = [this.state.startDate];
    let date = moment(this.state.startDate).add(1, 'week').format('YYYY-MM-DD');
    while (date <= this.state.endDate) {
      dates.push(date);
      date = moment(date).add(1, 'week').format('YYYY-MM-DD');
    };
    return (
      <div className='scorecard'>
        <Nav />
        <h1 className='route-heading'>Scorecard</h1>
        <ActiveMetrics 
          dates={dates}
        />
        <ArchivedMetrics />
      </div>
    );
  };
};

export default Scorecard;