import React, { Component } from 'react'

export class User extends Component {
    render() {
        return (
            <div className='col-xs-10 col-xs-offset-1'>
                <p>User id #{this.props.match.params.userId}</p>
            </div>
        )
    }
}
