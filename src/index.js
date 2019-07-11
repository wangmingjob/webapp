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
            <div>
                {
                    this.state.list.map((item, key) => {
                        return <Item key={key} content={item} a={100} b={200}/>;
                    })
                }
            </div>
        );
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {content, a, b} = this.props;
        return (
            <div className="item">
                <span className="itemSpan">{content}</span>
                <span className="itemSpan">{a}</span>
                <span className="itemSpan">{b}</span>
                <img src="https://f12.baidu.com/it/u=692257718,1533707439&fm=76"></img>
                <span>2018-10-13</span>
            </div>
        );
    }
}

ReactDOM.render(
    <HomeList/>,
    document.getElementById('root')
);



