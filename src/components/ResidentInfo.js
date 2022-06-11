import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const ResidentInfo = ({ residentUrl }) => {

    const [resident, setResident] = useState({})

    useEffect(() => {
        axios.get(residentUrl)
            .then(res => setResident(res.data))
    }, [residentUrl])

    console.log(resident)


    return (
        <div className="residentCard">
            <div className='card'>
            <img className="imgCard" src={resident.image} alt="" />
            <div className="infoResident">
                <h4 className="residentName">{resident.name}</h4>
                <h5>Gender: {resident.gender}</h5>
                <h5>Status: {resident.status}</h5>
                <h5>Specie: {resident.species}</h5>
                <h5>Origin: {resident.origin?.name}</h5>
                <h5>Episodes where appear: {resident.episode?.length}</h5>
            </div>
            </div>


        </div>
    );
};

export default ResidentInfo;