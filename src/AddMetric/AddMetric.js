import React, { Component } from 'react';
import TractionMissionControlContext from '../TractionMissionControlContext';
import ValidationError from '../ValidationError/ValidationError';
import moment from 'moment';
//import config from '../config';
import './AddMetric.css';

class AddMetric extends Component {
    static contextType = TractionMissionControlContext;

    constructor(props) {
        super(props);
        this.state = {
            metric: {
                value: '',
                touched: false
            },
            who: {
                value: '',
                touched: false
            },
        };
    };

    handleSubmit = event => {
        event.preventDefault();
        const newMetric = {
            id: 24,
            sort: 10,
            status: 'active',
            who: this.state.who.value,
            metric_name: this.state.metric.value,
            metric_type: ">",
            metric_format: "dollars",
            created: moment(Date.now()).format('YYYY-MM-DD'),
            archived: "",
            data: []
        };
        this.context.addMetric(newMetric);
        this.props.history.goBack();
    };

    updateMetric(metric) {
        this.setState({
            metric: {
                value: metric,
                touched: true
            }
        });
    };

    updateWho(who) {
        this.setState({
            who: {
                value: who,
                touched: true
            }
        });
    };


    validateMetric() {
        const metric = this.state.metric.value.trim();
        if (metric === '') {
            return 'Enter a metric!'
        }
    };

    validateWho() {
        const who = this.state.who.value.trim();
        if (who === '--Select an owner!--' || who === '') {
            return 'Someone needs to own it!'
        }
    };

    render() {
        const { team, metrics } = this.context;
        const activeMetrics = metrics.filter(metric => metric.status === 'active');
        console.log(activeMetrics.length);
        const metricError = this.validateMetric();
        const whoError = this.validateWho();
        return (
            <div className='add-metric'>
                <h2 className='add-metric-title'>Add a Metric!</h2>
                <form
                    className='add-metric-form'
                    onSubmit={this.handleSubmit}>
                        <div className='add-metric-inputs'>
                            <div className='add-metric-metric'>
                                <label htmlFor='metric'>
                                    What's the to-do?
                                </label>
                                <textarea
                                    type='string'
                                    name='metric'
                                    id='metric'
                                    placeholder='Metric!'
                                    onChange={e => this.updateMetric(e.target.value)}/>
                            </div>
                            {this.state.metric.touched && <ValidationError message={metricError} />}
                            <div className='add-metric-who'>
                                <label htmlFor='who'>
                                    Whose metric is it?
                                </label>
                                <select
                                    type='string'
                                    name='who'
                                    id='who'
                                    onChange={e => this.updateWho(e.target.value)}>
                                        <option>--Select an owner!--</option>
                                        {team.map(name =>
                                            <option
                                                key={name}>
                                                    {name}
                                            </option>
                                        )}
                                </select>
                            </div>
                            {this.state.who.touched && <ValidationError message={whoError} />}
                        </div>
                        <div className='add-metric-buttons'>
                            <button
                                type='submit'
                                disabled={
                                    this.validateMetric() ||
                                    this.validateWho()}>
                                Add Metric!
                            </button>
                            <button
                                type='button'
                                onClick={() => this.props.history.goBack()}>
                                    Cancel
                            </button>
                        </div>
                </form>
            </div>
        );
    };
};

export default AddMetric;