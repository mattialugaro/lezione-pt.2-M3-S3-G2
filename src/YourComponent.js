import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions';

const YourComponent = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const isLoading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error)

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if(isLoading) {
        return <p>Loading...</p>;
    }

    if(error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            {data.map((dataObj, index) => {
                return (
                    <div key={dataObj.id} 
                        style={{width: '15em', backgroundColor: '#35D841', padding: 2, borderRadius: 10, marginBlock: 10,}}>
                        <p style={{fontSize: 20, color: 'white'}}>{dataObj.name}</p>
                    </div>
                );
            })};
        </div>
    );
};

export default YourComponent;