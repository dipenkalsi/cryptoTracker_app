import React from 'react'
import { Typography } from '@mui/material'
const Pricing = ({mode}) => {
  return (
    <div className={mode=="dark"?"pt-10 dark bg-[#0d0d0d]":"pt-10"}>
      <Typography variant='h3' className='text-center dark:text-gray-300'>
        Plans and Pricing
      </Typography>
   
<div class="bg-white dark:bg-[#0d0d0d]">
    <div class="container px-6 py-8 mx-auto">
        <div class="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-[#0d0d0d] dark:border-gray-700">
                <div class="flex-shrink-0">
                    <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                        Casual
                    </h2>
                </div>
                <div class="flex-shrink-0">
                     
                    <span
                        class="pt-2 text-4xl font-bold text-blue-600 uppercase dark:text-gray-100"
                    >
                        Free
                    </span>
                </div>
                <ul class="flex-1 space-y-4">
                    <li class="text-gray-500 dark:text-gray-400">
                        Up to 5 projects
                    </li>
                    <li class="text-gray-500 dark:text-gray-400">
                        Up to 10 collaborators
                    </li>
                    <li class="text-gray-500 dark:text-gray-400">
                        2Gb of storage
                    </li>
                </ul>

                <button
                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none"
                >
                   Change plan
                </button>
                <button
                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none"
                >
                   Manage subscription
                </button>
            </div>

            <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-[#0d0d0d] dark:border-gray-700">
                <div class="flex-shrink-0">
                    <h2
                        class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700"
                    >
                        Pro
                    </h2>
                </div>
                <div class="flex-shrink-0">
                    <span
                        class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                    >
                        $24.90
                    </span>
                    <span class="text-gray-500 dark:text-gray-400">
                        /month
                    </span>
                </div>
                <ul class="flex-1 space-y-4">
                    <li class="text-gray-500 dark:text-gray-400">
                        Up to 10 projects
                    </li>
                    <li class="text-gray-500 dark:text-gray-400">
                        Up to 20 collaborators
                    </li>
                    <li class="text-gray-500 dark:text-gray-400">
                        10Gb of storage
                    </li>
                    <li class="text-gray-500 dark:text-gray-400">
                        Real-time collaborations
                    </li>
                </ul>

                <button
                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                    Buy Now
                </button>
                <button
                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none"
                >
                    Start Free Trial
                </button>
            </div>

            <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-[#0d0d0d] dark:border-gray-700">
                <div class="flex-shrink-0">
                    <h2
                        class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700"
                    >
                        Ultra
                    </h2>
                </div>
                <div class="flex-shrink-0">
                    <span
                        class="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100"
                    >
                        $49.90
                    </span>
                    <span class="text-gray-500 dark:text-gray-400">
                        /month
                    </span>
                </div>
                <ul class="flex-1 space-y-4">
                    <li class="text-gray-500 dark:text-gray-400">
                        Unlimited projects
                    </li>
                    <li class="text-gray-500 dark:text-gray-400">
                        Unlimited collaborators
                    </li>
                    <li class="text-gray-500 dark:text-gray-400">
                        Unlimited storage
                    </li>
                    <li class="text-gray-500 dark:text-gray-400">
                        Real-time collaborations
                    </li>
                    <li class="text-gray-500 dark:text-gray-400">
                        24x7 Support
                    </li>
                </ul>

                <button
                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                    Buy Now
                </button>
                <button
                    class="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none"
                >
                    Start Free Trial
                </button>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Pricing
