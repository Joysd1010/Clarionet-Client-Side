import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import PopularTeacher from '../Home/PopularTeacher';
import useTitle from '../../HOOKS/useTitle';

const Instructors = () => {
  useTitle('Instructors')
    const data=useLoaderData()
    return (
        <div className='mx-20 my-10'>
            <SectionTitle title="Our Instructors"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {data.map((teacher) => (
          <PopularTeacher key={teacher._id} sir={teacher} />
        ))}
      </div>
        </div>
    );
};

export default Instructors;