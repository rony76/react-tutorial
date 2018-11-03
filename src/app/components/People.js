import React, { Component } from 'react';
import { Person } from './Person';

export class People extends Component {
    render() {
        let people = [{ name: 'Rony', initialAge: 42 }, { name: 'Ariela', initialAge: 44 }];

        return (
            <div>
                {
                    people.map((p) =>
                        <div key={p.name} className="row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <Person {...p} />
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
