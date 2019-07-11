import ReactDOM from 'react-dom';
import React from 'react';
import './index.less';

class HomeList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: ['A', 'B', 'C', 'D', 'E'],
        };
    }

    render() {
        return (
            <div>{
                this.state.list.map((item, key) => {
                    return (<div key={key} className="item">{item}</div>);
                })
            }</div>
        );
    }
}

ReactDOM.render(
    <HomeList/>,
    document.getElementById('root')
);



