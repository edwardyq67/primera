import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({ lists }) => {
    return (
        <div>
            {
                lists?.map(list => (
                    <ResidentInfo residentUrl={list} key={list} />

                ))
            }
        </div>

    );


};


export default ResidentList;