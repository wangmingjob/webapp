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
                    return <Item key={key} content={item}/>;
                })
            }</div>
        );
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="item">{this.props.content}</div>
        );
    }
}

ReactDOM.render(
    <HomeList/>,
    document.getElementById('root')
);



