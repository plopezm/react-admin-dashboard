import React from 'react';

export default class ProgressBar extends React.Component{

    componentWillReceiveProps(nextProps){
        if(nextProps >= 100){
            this.props.onComplete();
        }
    }

    render(){
        return <progress className="progress is-large" value={this.props.value} max="100">{this.props.value}%</progress>
    }
}