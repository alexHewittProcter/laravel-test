import React, {Component} from 'react';

//A simple header with styling for top of pages
export default class PageHeader extends Component {
    render() {
        return (
            <div className="border-bottom mt-4 mb-2 pb-2">
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}