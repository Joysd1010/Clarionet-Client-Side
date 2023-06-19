import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import useTitle from '../../../HOOKS/useTitle';

const AdminHome = () => {
    useTitle('Admin Home')
    return (
        <div>
            <SectionTitle title={'Welcome to Admin Home page' }/>
        </div>
    );
};

export default AdminHome;