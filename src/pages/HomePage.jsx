import React from 'react';
// Components
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import Button from '../components/Button';
// Icons
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
// Data
// Data
import { filterData, FAQData } from '../data/Data';

import {
  DisplayFlex,
  StyledH6Text,
  StyledSelect,
  OrderedList,
  StyledListItem,
  ButtonWrapper,
  SectionWrapper,
  FAQSection,
  FAQBox,
  FAQTitle,
  FAQContext,
} from '../style/HomePage.style';
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
            <DisplayFlex>
              <StyledH6Text>Password</StyledH6Text>
              <StyledSelect onChange={sortHandler}>
                {filterData.map(({ name, value }) => (
                  <option key={value} value={value}>
                    {name}
                  </option>
                ))}
              </StyledSelect>
            </DisplayFlex>
            <DisplayFlex>
              <OrderedList>
                {isLoading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>Error...</p>
                ) : (
                  sortedPassword.slice(0, showAll).map(({ value, count }) => (
                    <StyledListItem key={value}>
                      <span>{value}</span>
                      <span>{count}</span>
                    </StyledListItem>
                  ))
                )}
              </OrderedList>
            </DisplayFlex>
            <ButtonWrapper>
              <Button
                text={showAllButtonText}
                paddingX='20px'
                paddingY='9px'
                action={showAllPasswords}
              />
            </ButtonWrapper>
          </Section>
          <SectionWrapper>
            <Section headText='Frequently asked questions'>
              {FAQData.map(({ title, context1, context2 }) => (
                <FAQSection
                  key={title}
                  // Checking the values of title and showText if they are equal then return null if not return new title
                  onClick={() => setShowText(title === showText ? null : title)}
                >
                  <FAQBox>
                    <FAQTitle>{title}</FAQTitle>
                    {/* If context is shown change the icon from arrow down to arrow up  */}
                    {showText === title ? <HiChevronUp /> : <HiChevronDown />}
                  </FAQBox>
                  {/* If showText and title are equal then show the context */}
                  {showText === title && (
                    <>
                      <FAQContext>{context1}</FAQContext>
                      <FAQContext>{context2}</FAQContext>
                    </>
                  )}
                </FAQSection>
              ))}
            </Section>
          </SectionWrapper>
        </>
      )}
    />
  );
};

export default HomePage;
