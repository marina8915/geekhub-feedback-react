import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SendingLetters extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render () {
        return (
            <div>
                <h1>Sending Letters</h1>
            </div>
        )
    }
}

export default withRouter(SendingLetters)