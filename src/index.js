import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import './index.less';

const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};

function request(method = HttpMethod.GET, url, data = {}, credentials = false) {
    const options = {
        method: method,
        url: url,
        headers: {
            Accept: 'application/json',
            OSName: 'iphone9',
            OSVersionCode: 'iphone9',
            OSVersionName: 'iphone9',
            Brand: 'iphone9',
            DeviceID: 'iphone9',
            IMEI: 'iphone9',
            admin: 'xiaobala891007'
        },
        withCredentials: credentials,
    };

    if (method === HttpMethod.GET) {
        options.params = data;
    } else {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };
        options.data = data;
    }

    return axios(options)
        .then(function (response) {
            console.log('[response]=>', response);
            if (response.status === 200) {
                return response.data;
            }
            return {};
        })
        .then(function (result) {
            console.log('[response body]=>', result);
            if (result.code === 200) {
                return result.data;
            }
            return {};
        })
        .catch(function (error) {
            console.log(error);
        });
}

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
                    return <Item key={key} title={item.resourceName} img={item.resourceImageUrl}
                                 createdTime={item.createdTime}/>;
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




