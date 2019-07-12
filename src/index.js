import ReactDOM from 'react-dom';
import React from 'react';
import {HttpMethod, request} from './request.js';
import './index.less';

class Item extends React.Component {
    render() {
        return (
            <div>
                <h1 className='title'>{this.props.title}</h1>
                <img className='img' src={this.props.img}/>
                <p className='createdTime'>{this.props.createdTime}</p>
            </div>
        );
    }
}

class MusicList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    render() {
        return (<div>
            {
                this.state.list.map((item, key) => {
                    return (
                        <Item
                            key={key}
                            title={item.resourceName}
                            img={item.resourceImageUrl}
                            createdTime={item.createdTime}
                        />);
                })
            }
        </div>);
    }

    async componentWillMount() {
        let data = await this.getData();
        console.log('[data]=>', data);

        this.setState({
                list: data,
            },
        )
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    getData() {
        return request(
            HttpMethod.GET,
            'http://apibalabala.abalabala.com/v1/playlists/resource/list',
            {
                'startID': 0,
                'playlistID': 1
            }
        );
    }
}

ReactDOM.render(
    <MusicList/>,
    document.getElementById("root")
);




