import React, { useEffect, useState } from "react";
import axios from "axios";

function Api(){
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect( () => {
        const getApi = async () => {
            try{
                setError(null);
                setData(null);
                setLoading(true);

                const response = await axios.get('http://localhost:3002');
                setData(response.data);
            } catch (error){
                setError(error);
            }
            setLoading(false);
        };

        const postApi = () => {
            axios.post('http://localhost:3002/post',
            {
                userName: 'leeeeeyeon'
            },
            {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            )
            .then(() => { console.log('client - send post data'); })
            .catch((error) => { console.log(error); });
        };

        getApi();
        postApi();
    }, []);

    if (loading) return <div>Loading...</div>;
    if(error) return <div>Error!</div>
    if(!data) return null;
    return (
        <div style={{position: 'absolute', top: '5%', left: '15%'}}>
            <h3>{data.success}</h3>
        </div>
    );
}

export default Api;