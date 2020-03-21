import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import './MetricResult.css';

class MetricResult extends Component {
  static contextType = TractionMissionControlContext;

  constructor(props) {
    super(props);
    this.state={
      result: this.props.result.result
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.result) {
      const { metrics } = this.context;
      const metricId = this.props.metricId;
      const metricToUpdate = metrics.find(metric => Number(metric.id) === Number(metricId));
      const metricData = metricToUpdate.data.map(result => 
        (result.date === this.props.date) ? {...result, result: this.state.result} : result);
      const updatedMetric = [
        {
          ...metricToUpdate, 
          data: metricData
        }
      ];
      this.context.editMetric(updatedMetric);
    };
  };

  updateResult(result) {
    this.setState({
      result: Number(result)
    });
  };

  render() {
    const { currentWeek } = this.context;
    const colorCode = (this.props.result === 'none') ? 'gray' :
      (this.props.result.result === null || !this.props.result.plan) ? '' : 
      (this.props.metric_type === '>' && this.props.result.result >= this.props.result.plan) ? 'green' : 
      (this.props.metric_type === '<' && this.props.result.result <= this.props.result.plan) ? 'green' :'red';
    return (
      <div className='metric-result'>
        <div className={`metric-actual ${colorCode}`}>
          {(this.props.result !== 'none' && 
            this.props.status === 'active' && 
            this.props.date === currentWeek && 
            !this.props.result.result) ? 
          <div className='metric-actual-input'>
            <form
              className='metric-actual-input-form'
              onSubmit={this.handleSubmit}>
                <input
                  type='text'
                  name='metric-actual-input'
                  id='metric-actual-input'
                  placeholder='Enter Result!'
                  onChange={e => this.updateResult(e.target.value)}/>
                <button
                  className='metric-actual-input-submit-button'
                  type='submit'>
                    Submit
                </button>
            </form>
          </div> : 
          (this.props.result.result) ?
              (this.props.metric_format === 'dollars' ? '$' : '') + 
                this.props.result.result.toFixed(this.props.decimals) + 
                  (this.props.metric_format === 'percent' ? '%' : '') : ''}
        </div>
        <div className='metric-plan'>
          <div className='metric-type'>
            {(this.props.result.plan) ? this.props.metric_type : 'No Goal Set'}
          </div>
          <div className='metric-goal'>
            {(this.props.result.plan) ?
              (this.props.metric_format === 'dollars' ? '$' : '') + 
                this.props.result.plan.toFixed(this.props.decimals) + 
                  (this.props.metric_format === 'percent' ? '%' : '') : ''}
          </div>
        </div>
      </div>
    );
  };
};

export default MetricResult;