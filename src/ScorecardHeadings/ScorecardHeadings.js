import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './ScorecardHeadings.css';
import moment from 'moment';

class ScorecardHeadings extends Component {
  static contextType = TractionMissionControlContext;

  render() {
    return (
      <div className='scorecard-headings'>
        <div className='metric-info-headings'>
          <div className='metric-buttons-heading'>
            Buttons
          </div>
          <div className='metric-who-heading'>
            Who
          </div>
          <div className='metric-name-heading'>
            Measurable
          </div>
        </div>
        <div className='metric-results-headings'>
          {this.props.dates.map(date => {
            return (
              <div className='metric-results-date'>
                {moment(date).format('MM/DD/YYYY')}
              </div>
            )
          })}
        </div>
        
      </div>
    );
  };
};

export default ScorecardHeadings;