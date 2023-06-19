import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import useCart from '../../../HOOKS/useCart';

const DashBoardHeader = () => {
const [cart]=useCart()
  return (
    <div>
      <SectionTitle title={'WelCome To DashBord'}/>
      <h1 className='text-2xl text-center'>You have {cart.length} Classes Selected</h1>
    </div>
  );
};

export default DashBoardHeader;