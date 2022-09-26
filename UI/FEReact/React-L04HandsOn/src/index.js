import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    return (
    <NumberOfStudents />
    )

};


class NumberOfStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enrolledStudents: 0,
            waitlistedStudents: 0,
            addEnrolledAmount: '',
            addWaitlistAmount: '',
        }
    }

    enrolledIncrementByOne(event) {
        this.setState({enrolledStudents: this.state.enrolledStudents + 1})
    }

    waitlistedIncrementByOne(event) {
        this.setState({waitlistedStudents: this.state.waitlistedStudents + 1})
    }

    enrolledIncrementByAnyNumber(event) {
        this.setState({enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addEnrolledAmount)})
        this.setState({addEnrolledAmount: ''})
    }

    waitlistedIncrementByAnyNumber(event) {
        this.setState({waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addWaitlistAmount)})
        this.setState({addWaitlistAmount: ''})
        
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Enrolled Student: {this.state.enrolledStudents}</h2>
                    <button onClick={this.enrolledIncrementByOne.bind(this)}>Add 1 Enrolled Student</button>

                    <div>
                        <h4>Add Multiple Enrolled Students: </h4>
                        <input type="number" onChange={event => {this.setState({addEnrolledAmount: event.target.value})}} value={this.state.addEnrolledAmount} /><button onClick={this.enrolledIncrementByAnyNumber.bind(this)}>increase Students</button>
                    </div>
                </div>
                <div>
                    <h2>Waitlisted Students: {this.state.waitlistedStudents}</h2>
                    <button onClick={this.waitlistedIncrementByOne.bind(this)}>Add 1 Waitlisted Student</button>

                    <div>
                        <h4>Add Multiple Waitlisted Students: </h4>
                        <input type="number" onChange={event => {this.setState({addWaitlistAmount: event.target.value})}}  value={this.state.addWaitlistAmount}/><button onClick={this.waitlistedIncrementByAnyNumber.bind(this)}>increase Students</button>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));