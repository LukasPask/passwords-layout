import React from 'react';
// Components
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import Button from '../components/Button';
// Icons
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
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
        // For showing and hiding FAQ content default value is the first FAQ
        showText,
        setShowText,
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
          <Section headText='Top leaked passwords'>
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
                paddingX='1.25rem'
                paddingY='0.563rem'
                action={showAllPasswords}
              />
            </div>
          </Section>
          <div className='questions'>
            <Section headText='Frequently asked questions'>
              {FAQData.map(({ title, context1, context2 }) => (
                <div
                  className='questions__box'
                  key={title}
                  // Checking the values of title and showText if they are equal then return null if not return new title
                >
                  <div
                    className='questions__titleBox'
                    onClick={() =>
                      setShowText(title === showText ? null : title)
                    }
                  >
                    <p>{title}</p>
                    {/* If context is shown change the icon from arrow down to arrow up  */}
                    {showText === title ? <HiChevronUp /> : <HiChevronDown />}
                  </div>
                  {/* If showText and title are equal then show the context */}
                  {showText === title && (
                    <div className='questions__contextBox'>
                      <p className='questions__context'>{context1}</p>
                      <p className='questions__context'>{context2}</p>
                    </div>
                  )}
                </div>
              ))}
            </Section>
          </div>
        </>
      )}
    />
  );
};

export default HomePage;
