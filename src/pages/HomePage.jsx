import React from 'react';
// Components
import HeroSection from '../components/HeroSection';
import CustomSection from '../components/CustomSection';
import FAQSection from '../components/FAQSection';
import Button from '../components/Button';
// Icons
import { HiChevronDown } from 'react-icons/hi';
// Data
import { filterData, FAQData } from '../data/Data';
// Style
import '../style/HomePage.scss';
// Logic
import HomePageLogic from '../logic/HomePageLogic';

const HomePage = () => {
  return (
    <HomePageLogic
      render={(
        //   State
        // for controlling shown data count
        showAll,
        setShowAll,
        // for controlling data count button text
        showAllButtonText,
        setShowAllButtonText,
        // for sorting passwords by filter
        sortedPassword,
        setSortedPassword,
        // Custom functions
        sortHandler,
        showAllPasswords,
        // API DATA
        passwords,
        isLoading,
        error
      ) => (
        <>
          <HeroSection />
          <CustomSection headText='Top leaked passwords'>
            <div className='passwordsFilter'>
              <h6 className='passwordsFilter__name'>Password</h6>
              <select
                className='passwordsFilter__select'
                onChange={sortHandler}
              >
                {filterData.map(({ name, value }) => (
                  <option
                    className='passwordsFilter__option'
                    key={value}
                    value={value}
                  >
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className='password'>
              {isLoading ? (
                <p className='password__text'>Loading...</p>
              ) : error ? (
                <p className='password__text'>Error...</p>
              ) : (
                sortedPassword.slice(0, showAll).map(({ value, count }) => (
                  <div className='password__box' key={value}>
                    <span className='password__value'>{value}</span>
                    <span className='password__count'>{count}</span>
                  </div>
                ))
              )}
            </div>
            <div className='password__buttonWrapper'>
              <Button
                text={showAllButtonText}
                action={showAllPasswords}
                size='small-btn'
              />
            </div>
          </CustomSection>
          <FAQSection
            headText='Frequently asked questions'
            data={FAQData}
            icon={<HiChevronDown />}
          />
        </>
      )}
    />
  );
};

export default HomePage;
