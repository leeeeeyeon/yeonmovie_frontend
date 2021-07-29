import React from 'react';
import axios from 'axios';

class Api extends React.Component{
    state = {
        isLoading: true,
        data: []
    }
    getApi = async () => {
        const {data} = await axios.get("http://localhost:3002/api");
        this.setState({data, isLoading: false});
    }
    
    async componentDidMount(){
        this.getApi();
    }

    render(){
        const {isLoading, data} = this.state;

        return (
        <section>
            {isLoading ?
            <div>
                <span>Loading...</span>
            </div>
            :
            <div style={{position: 'absolute', top: '50%', left: '50%'}}>
                <h3>{data.success}</h3>
            </div>
            }
        </section>
        );
    }
}

export default Api;