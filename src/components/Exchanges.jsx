import React from 'react';
import { Typography as Typo } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Exchanges = ({mode}) => {
  return (
    <div className={mode=="dark"?"dark pt-10 bg-[#0d0d0d]":"pt-10"}>
      <div className="flex flex-col items-center justify-center">
      <Typo variant="h3" className="text-center dark:text-gray-300">
        This is a <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white dark:text-gray-300 rounded">Pro</span> component.
      </Typo>
      <Typo variant="h5" className="text-center">
        <p className="mt-6 text-blue-700">To access this component, subscribe to our pro plan.</p>
      </Typo>
      <img src="https://i.ibb.co/ck1SGFJ/Group.png" className='w-1/2 mx-auto' />

      <Typo variant="h6" className="text-center dark:text-gray-300 px-2">
        <p className='my-8'>This feature is unavailable in your current plan/Subscription. Kindly upgrade to the <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Pro</span> plan or Higher in order to enjoy this service.</p>
      </Typo>

      <Link to="/pricing">
      <Button variant="contained" className="mx-auto">
        Subscribe to Pro
      </Button>
      </Link>
      </div>
    </div>
  );
};

export default Exchanges;