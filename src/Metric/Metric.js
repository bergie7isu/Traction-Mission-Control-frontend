import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import MetricResult from '../MetricResult/MetricResult';
import './Metric.css';
import moment from 'moment';

class Metric extends Component {
  static contextType = TractionMissionControlContext;

  handleSortUp() {
    const { metrics } = this.context;
    const moveUpId = this.props.id;
    const sortNumber = Number(metrics.find(metric => metric.id === moveUpId).sort);
    if (sortNumber !== 1) {
      const metricToMoveUp = {...metrics.find(metric => metric.id === moveUpId), sort: sortNumber - 1};
      const moveDownId = metrics.find(metric => Number(metric.sort) === sortNumber - 1).id;
      const metricToMoveDown = {...metrics.find(metric => metric.id === moveDownId), sort: sortNumber};
      this.context.sortScorecardUp(metricToMoveUp, metricToMoveDown);
    };
  };

  handleSortDown() {
    const { metrics } = this.context;
    const moveDownId = this.props.id;
    const sortNumber = Number(metrics.find(metric => metric.id === moveDownId).sort);
    const highestSort = metrics.filter(metric => metric.status === 'active').length;
    if (sortNumber < highestSort) {
      const metricToMoveDown = {...metrics.find(metric => metric.id === moveDownId), sort: sortNumber + 1};
      const moveUpId = metrics.find(metric => Number(metric.sort) === sortNumber + 1).id;
      const metricToMoveUp = {...metrics.find(metric => metric.id === moveUpId), sort: sortNumber};
      this.context.sortScorecardDown(metricToMoveDown, metricToMoveUp);
    };
  };

  handleArchive() {
    const { metrics } = this.context;
    const metricId = this.props.id;
    const metricToArchive = {...metrics.find(metric => metric.id === metricId), status: "archived", archived: moment(Date.now()).format('YYYY-MM-DD')};
    this.context.archiveMetric(metricToArchive);
  };

  render() {
    return (
      <div className='metric'>
        <div className='metric-info'>
          <div className='metric-buttons'>
            <div className='sort-metric-buttons'>
              <button 
                className={`sort-metric-up ${this.props.sortButtons}`}
                onClick={() => this.handleSortUp()}>
                  Up
              </button>
              <button 
                className={`sort-metric-down ${this.props.sortButtons}`}
                onClick={() => this.handleSortDown()}>
                  Down
              </button>
            </div>
            <div className='archive-metric-button'>
              <button
                className={`archive-metric ${this.props.sortButtons}`}
                onClick={() => this.handleArchive()}>
                  Archive
              </button>
            </div>
          </div>
          <div className='metric-info-wrapper'>
            <div className='metric-who'>
              {this.props.who}
            </div>
            <div className='metric-name'>
              {this.props.metric_name}
            </div>
          </div>
        </div>
        <div className='metric-results'>
          {this.props.dates_to_show.map(date =>
            <MetricResult 
              key={this.props.id + '-' + date}
              metricId={this.props.id}
              metric_type={this.props.metric_type}
              result={this.props.data.find(result => result.date === date) || 'none'}
              date={date}
              status={this.props.status}
            />
          )}
        </div>
      </div>
    );
  };
};

export default Metric;