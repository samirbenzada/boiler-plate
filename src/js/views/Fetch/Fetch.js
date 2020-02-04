import React, { useContext } from 'react';
import styles from './Fetch.module.css';
import { UserContext } from '../../../UserContext';

const Fetch = () => {

    const {futurama, setFuturama} = useContext(UserContext);

    const fetchHandler = () => {
        console.log('helooo');
        fetch('http://futuramaapi.herokuapp.com/api/v2/characters')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setFuturama(res);
                })
            .catch(error => console.log(error));
    }

    return (
        <div className={styles.mainDiv}>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <button 
                            className="btn btn-warning" 
                            onClick={fetchHandler}
                        >Click To Fecth</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        {!futurama ? "Loading..." : futurama.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item.Species} || {item.Name} || <img src={item.PicUrl} alt={item.Name} width="30px" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fetch;