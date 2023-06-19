import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div>
            <div className="divider"></div> 
            <div className="divider text-3xl">{title}</div> 
            <div className="divider"></div> 

        </div>
    );
};

export default SectionTitle;