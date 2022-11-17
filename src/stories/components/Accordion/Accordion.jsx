import React, { useState } from 'react';
import { dataTab1, dataTab2 } from '../../../lib/data';
import { useToggleBtn, useToggleExp } from '../../../lib/action';
// import { jobExperiences, backgroundExperiences } from '../data/data';
// import JobCard from '../components/JobCard';
// import BackgroundCard from '../components/BackgroundCard';

// import '../components/scss/Experiences.scss';


const Accordion = () => {
  const { activeTab, handleAccordionTab1, handleAccordionTab2 } = useToggleExp()
  const { isShowing, handleToggle } = useToggleBtn()




  return (
    <div id='experiences' className='experiences-container'>
      <div className=''>
        <ul className='experiences-switch-btn grid grid-cols-2 w-full items-center justify-around place-items-center' >
          <li className={activeTab === 'tab1' ? 'bg-gray-300 p-2 flex items-center justify-center w-full' : ''} onClick={handleAccordionTab1}>Tab 1</li>
          <li className={activeTab === 'tab2' ? 'bg-gray-300 p-2 flex items-center justify-center w-full' : ''} onClick={handleAccordionTab2}>Tab 2</li>
        </ul>

        <div className='outlet flex'>
          {activeTab === 'tab1' ?
            <div className='accordion-wrapper-tab1'>
              <span>Text Tab 1</span>

              {dataTab1?.map((data, id) =>
                <div key={id}>
                  {/* <JobCard
                    handleToggle={() => handleToggle(id)}
                    isShowing={isShowing === id}
                    title={data.title}
                    company={data.company}
                    src={data.logo}
                    alt={data.alt}
                    location={data.location}
                    dateBeg={data.dateBeg}
                    dateEnd={data.dateEnd}
                    description={data.description}
                    stacks={data.stacks}
                  /> */}
                </div>
              )}
            </div>
            :
            <div className='accordion-wrapper-tab2'>
              <span>Text Tab 2</span>
              {dataTab2?.map((data, id) =>
                <div key={id}>
                  {/* <BackgroundCard
                    title={data.title}
                    location={data.location}
                    description={data.description}
                    date={data.dateEnd}
                    src={data.logo}
                    alt={data.alt}
                    stacks={data.stacks}
                  /> */}
                </div>
              )}
            </div>
          }
        </div>
      </div>





      {/* <div className="experiences-background-wrapper"></div> */}
    </div>
  )
}

export default Accordion;
