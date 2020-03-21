import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Splash from './Splash/Splash';
import L10Meeting from './L10Meeting/L10Meeting';
import Archive from './Archive/Archive';
import AddTodo from './AddTodo/AddTodo';
import AddIssue from './AddIssue/AddIssue';
import EditTodo from './EditTodo/EditTodo';
import EditIssue from './EditIssue/EditIssue';
import Loading from './Loading/Loading';
import Scorecard from './Scorecard/Scorecard';
import AddMetric from './AddMetric/AddMetric';
import EditMetric from './EditMetric/EditMetric';
import TractionMissionControlContext from './TractionMissionControlContext';
import data from './dummy-store';
import config from './config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      todos: [],
      issues: [],
      team: [],
      todosReady: false,
      issuesReady: false,
      teamReady: false
    };
  };

  componentDidMount() {
    this.setState({
      metrics: data.metrics,
      endOfWeek: data.endOfWeek,
      currentWeek: data.currentWeek
    });

    fetch(config.API_ENDPOINT + '/api/todos')
      .then(todosResponse => {
        if (!todosResponse.ok) {
          throw new Error(todosResponse.status)
        }
        return todosResponse.json()
     })
      .then(todos => {
        this.setState({ todos, todosReady: true})
      })
      .catch(todosError => this.setState({ todosError }));
    fetch(config.API_ENDPOINT + '/api/issues')
      .then(issuesResponse => {
        if (!issuesResponse.ok) {
          throw new Error(issuesResponse.status)
        }
        return issuesResponse.json()
      })
      .then(issues => {
        this.setState({ issues, issuesReady: true})
      })
      .catch(issuesError => this.setState({ issuesError }));
    
    this.setState({
      team: data.team,
      teamReady: true
    });
  };

  handleAddTodo = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  handleAddIssue = newIssue => {
    this.setState({
      issues: [...this.state.issues, newIssue]
    });
  };

  handleEditTodo = updatedTodo => {
    const newTodos = this.state.todos.map(todo =>
      (Number(todo.id) === Number(updatedTodo.id))
        ? updatedTodo
        : todo
      );
    this.setState({
      todos: newTodos
    });
  };

  handleEditIssue = updatedIssue => {
    const newIssues = this.state.issues.map(issue =>
      (Number(issue.id) === Number(updatedIssue.id))
        ? updatedIssue
        : issue
      );
    this.setState({
      issues: newIssues
    });
  };

  handleDeleteTodo = todoId => {
    const newTodos = this.state.todos.filter(todo => Number(todo.id) !== Number(todoId));
    this.setState({
      todos: newTodos
    });
  };

  handleDeleteIssue = issueId => {
    const newIssues = this.state.issues.filter(issue => Number(issue.id) !== Number(issueId));
    this.setState({
      issues: newIssues
    });
  };

  handleEditMetric = metricsToUpdate => {
    const metrics = this.state.metrics;
    const newMetrics = metrics.map(metric => 
      (metricsToUpdate.find(updatedMetric => Number(updatedMetric.id) === Number(metric.id)))
      ? (metricsToUpdate.find(updatedMetric => Number(updatedMetric.id) === Number(metric.id)))
      : metric
    );
    this.setState({
      metrics: newMetrics
    });
  };

  handleAddMetric = newMetric => {
    this.setState({
      metrics: [...this.state.metrics, newMetric]
    });
  };

  handleRollScorecard = nextWeek => {
    this.setState({
      currentWeek: nextWeek
    });
  };

  renderRoutes() {
    return(
      <>
        <Route
          exact
          path='/'
          component={Splash}
        />
        <Route
          exact
          path='/L10Meeting'
          component={L10Meeting}
        />
        <Route
          exact
          path='/Archive'
          component={Archive}
        />
        <Route
          exact
          path='/AddTodo'
          component={AddTodo}
        />
        <Route
          exact
          path='/AddIssue'
          component={AddIssue}
        />
        <Route
          exact
          path='/EditTodo/:id'
          component={EditTodo}
        />
        <Route
          exact
          path='/EditIssue/:id'
          component={EditIssue}
        />
        <Route
          exact
          path='/Scorecard'
          component={Scorecard}
        />
        <Route
          exact
          path='/AddMetric'
          component={AddMetric}
        />
        <Route
          exact
          path='/EditMetric/:id'
          component={EditMetric}
        />
      </>
    )
  };

  render() {
    if(!this.state.todosReady || !this.state.issuesReady || !this.state.teamReady) {
      return (
        <Loading />
      )
    } else {
      const contextValue = {
        todos: this.state.todos,
        issues: this.state.issues,
        metrics: this.state.metrics,
        team: this.state.team,
        endOfWeek: this.state.endOfWeek,
        currentWeek: this.state.currentWeek,
        addTodo: this.handleAddTodo,
        addIssue: this.handleAddIssue,
        editTodo: this.handleEditTodo,
        editIssue: this.handleEditIssue,
        deleteTodo: this.handleDeleteTodo,
        deleteIssue: this.handleDeleteIssue,
        addMetric: this.handleAddMetric,
        editMetric: this.handleEditMetric,
        rollScorecard: this.handleRollScorecard,
      };
      return (
        <TractionMissionControlContext.Provider value={contextValue}>
          <main className='App'>
              {this.renderRoutes()}
          </main>
        </TractionMissionControlContext.Provider>
      )
    };
  };
};

export default App;