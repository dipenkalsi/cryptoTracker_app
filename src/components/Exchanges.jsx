import React from 'react';
import { Typography as Typo } from '@mui/material';
import Button from '@mui/material/Button';
const Exchanges = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
      <Typo variant="h3" className="text-center">
        This is a <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Pro</span> component.
      </Typo>
      <Typo variant="h5" className="text-center">
        <p className="mt-6 text-blue-700">To access this component, subscribe to our pro plan.</p>
      </Typo>
      <img src="https://i.ibb.co/ck1SGFJ/Group.png" className='w-1/2 mx-auto' />

      <Typo variant="h6" className="text-center">
        <p className='my-8'>This feature is unavailable in your current plan/Subscription. Kindly upgrade to the <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Pro</span> plan or Higher in order to enjoy this service.</p>
      </Typo>

      <Button variant="contained" className="mx-auto">
        Subscribe to Pro
      </Button>
      </div>
    </>
  );
};

export default Exchanges;