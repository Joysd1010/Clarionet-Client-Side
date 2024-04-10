import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PopularClass from '../Home/PopularClass';
import SectionTitle from '../Shared/SectionTitle';
import ClassCard from './ClassCard';

const Class = () => {
    const data=useLoaderData()
const classes=data.filter(classobj=>classobj?.status!=='pending')
// console.log(classes)
    return (
        <div className='py-10 px-5 bg-white md:px-20'>
            <SectionTitle title={'Musical Classes For You'}/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {classes.map((session) => (
        
        <ClassCard key={session._id} classs={session} />
        ))}
      </div>
        </div>
    );
};

export default Class;