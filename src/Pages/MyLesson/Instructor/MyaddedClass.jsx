import React, { useEffect, useState } from 'react';
import useAuth from '../../../HOOKS/useAuth';
import SectionTitle from '../../Shared/SectionTitle';

const MyaddedClass = () => {
    const {user}=useAuth()
const [myClass,setMyclass]=useState([])
    useEffect(() => {
        fetch("http://localhost:5000/class")
          .then((res) => res.json())
          .then((data) => {
            setMyclass(data.filter(classobj=>classobj?.email===user?.email));
          });
      }, []);
console.log({myClass})
    return (
        <div>
             <SectionTitle title={`My added classes`} />
      <div className="w-full">
        <div className="w-full overflow-x-auto bg-indigo-300 rounded-lg">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>#</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Total Seat</th>
                <th>Feedback</th>
                <th>Enrolled</th>

                
              </tr>
            </thead>
            <tbody className="">
              {myClass?.map((item, index) => (
                <tr key={item._id}>
                  <td className="">{index + 1}</td>
                  <td>{item.class_name}</td>
                  <td>{item.price}</td>
                  <td><div class="badge badge-warning">{item?.status==='pending'?item.status:'Apporved'}</div></td>
                  <td className="">{item.available_seats}</td>
                  <td className="">{item.feedback?item.feedback:'feedback pending'}</td>
                  <td className="">0</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default MyaddedClass;