import React from 'react'
import { Button } from '@mui/material'
const Mission = ({mode}) => {
  return (
    <div className={mode=="dark"?"dark bg-[#0d0d0d]":""}>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 pt-20 pb-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/random/900X900/?cypto/graphs/bitcoin/success"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-300">We plan to change the world!</h1>
      <p class="mb-8 leading-relaxed dark:text-gray-400">We started out as a bunch of guys trying to bring the best to the cryptoheads out there. Now that passion has developed into a full-fledged mission to create a world where everyone knows about the latest crypto trends so that they can invest their hard-earned money in the right place, at the right time.</p>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font mx-10">
  <div class="container px-5 pb-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 text-center md:text-left dark:text-gray-300">A glimpse into our Journey</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-center md:text-left dark:text-gray-400">Trust us when we say nothing can describe the roller coaster of a journey we went through to bring you this platform. But still here's a little glimpse of the events that happened throughout this time.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://www.iafastro.org/assets/image-cache/images/static/awards/industry-award/excellence-industry-award.e71e187e.jpg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEYZ7weZATnRs_Eu1hkkmdqA84qUnp_EwO1AdD_6ZhH2r_1kHzIcaeV6P_nfOu772qR8&usqp=CAU"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://cm.telangana.gov.in/wp-content/uploads/2022/09/Telangana-gets-CSI-Nihilent-e-Governance-Award-of-Excellence-2016.jpg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://www.telangana.gov.in/PublishingImages/Awards/Telangana-recognized-as-a-Top-Performer-in-the-State-Startup-Rankings-2021.jpg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://assets.thehansindia.com/h-upload/2022/03/15/1600x960_1281800-unicef.jpg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://www.biospectrumindia.com/uploads/articles/ccamp-21230.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="text-gray-600 body-font">
  <div class="container px-5 pb-24 mx-auto">
    <div class=" lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg dark:text-gray-400">As a child I was very curious about cryptocurrency and wanted to know how it worked. But there was no one who could teach me the same and as a result I had to spend a lot of time doing research about the crypto market and I learnt it the hard way that numbers never lie. The beast way to invest in the crypto market was to look at data and stats and predict the future using those. So now my dream is to make this process easier for the upcoming generations and to provide them with everything they need to know before investing into the crypto market.</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm dark:text-gray-200">DIPEN KALSI</h2>
      <p class="text-gray-500 dark:text-gray-300">Founder,CEO</p>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 pb-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded dark:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4 mx-auto md:mx-0" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6 text-center md:text-left dark:text-gray-400">The purpose of cryptobizz is not to educate but to inspire. To motivate more and more people into investing into the market for this is the future and we al should be ready for it. And so far we've been doing a great job at that.</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://www.looper.com/img/gallery/robin-on-how-i-met-your-mother-was-almost-played-by-a-different-actress/intro-1594563946.jpg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900 dark:text-gray-200">ROBIN SCHERBATSKY</span>
              <span class="text-gray-500 text-sm dark:text-gray-300">Co-Founder,Markteing Head</span>
            </span>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded dark:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4 mx-auto md:mx-0" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6 text-center md:text-left dark:text-gray-400">Starting out as college dropouts, we got a lot of criticism and people laughed at us for having such big dreams. I am so glad i kept moving even after all the doubt and uncertainity in my mind for hardwork always pays off.</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://home.adelphi.edu/~br21822/Ted.jpg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900 dark:text-gray-200">TED MOSBY</span>
              <span class="text-gray-500 text-sm dark:text-gray-300">Co-Founder</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font overflow-hidden mx-5">
  
  <div class="container px-5 pb-24 mx-auto">
  <h1 class="title-font sm:text-4xl text-3xl mb-14 my-4 font-medium text-gray-900 text-center dark:text-gray-300">Blogs</h1>
    <div class="flex flex-wrap -m-12">
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest mx-auto">EDUCATION</span>
        <h2 class="sm:text-2xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 dark:text-gray-300 text-center">Why cryptocurrency is the future of transactions and exchange?</h2>
        <p class="leading-relaxed mb-8 dark:text-gray-400 text-center">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center"><Button variant="outlined" className="dark:text-indigo-200 dark:border-indigo-200 dark:hover:border-indigo-100">Read Blog
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Button>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 dark:text-gray-400">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.23M
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6.3K
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src="https://prod-images.tcm.com/Master-Profile-Images/LeonardoDiCaprio.jpg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900 uppercase dark:text-gray-300">Leonardo Di Caprio</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">Research Head</span>
          </span>
        </a>
      </div>
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest mx-auto">SPIRITUAL</span>
        <h2 class="sm:text-2xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 dark:text-gray-300 text-center">Manifestation - A secret the successful don't want you to know.</h2>
        <p class="leading-relaxed mb-8 dark:text-gray-400 text-center">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, eum!</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center"><Button variant="outlined" className="dark:text-indigo-200 dark:border-indigo-200 dark:hover:border-indigo-100">Read Blog
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Button>
            
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 dark:text-gray-400">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>2.46M
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>12K
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src="https://ca-times.brightspotcdn.com/dims4/default/4db8940/2147483647/strip/true/crop/8192x5464+0+0/resize/1486x991!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F50%2F1a%2Fa46d8e094a40a62508e84fd235b2%2Fbritain-amsterdam-premiere-26027.jpg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900 dark:text-gray-300">CHRISTIAN BALE</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">HR Manager</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Mission
