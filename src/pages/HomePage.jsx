import React, { useState, useEffect } from 'react';
// Components
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import Button from '../components/Button';
// Logic (custom hooks)
import useFetch from '../hooks/useFetch';
// Style
import {
  DisplayFlex,
  StyledH6Text,
  StyledSelect,
  OrderedList,
  StyledListItem,
  ButtonWrapper,
} from '../style/HomePage.style';
// filter data
const filterData = [
  { name: 'aaaaa', value: 'AbbbBC' },
  { name: 'Count', value: 'Count' },
  { name: 'Alphabetically', value: 'ABC' },
];
// FAQ data
const FAQData = [
  {
    title: 'Why should you use a password manager for business?',
    context:
      'Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager. With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!',
  },
  {
    title: 'How to choose the best password manager for business?',
    context:
      'Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager. With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!',
  },
  {
    title: 'How can I get a business password manager?',
    context:
      'Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager. With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!',
  },
];

const HomePage = () => {
  // Custom hooks
  const {
    data: passwords,
    isLoading,
    error,
  } = useFetch(`https://playground.nordsec.com/v2/worst-psw.json`);
  // State
  const [showAll, setShowAll] = useState(10);
  const [showAllButtonText, setShowAllButtonText] = useState('Show all (50)');
  const [sortedPassword, setSortedPassword] = useState([]);

  useEffect(() => {
    const pass = [];
    setSortedPassword(pass);
    console.log(pass);
  }, []);
  // console.log(sortedPassword);
  const sortHandler = (e) => {
    setSortedPassword([]);
    if (e.target.value === 'Count') {
      setSortedPassword(
        passwords.passwords.sort((a, b) => {
          return b.count - a.count;
        })
      );
    } else if (e.target.value === 'ABC') {
      setSortedPassword(
        passwords.passwords.sort((a, b) => {
          if (a.value.toLowerCase() < b.value.toLowerCase()) return -1;
          if (a.value.toLowerCase() > b.value.toLowerCase()) return 1;
          return 0;
        })
      );
    }
  };
  console.log(sortedPassword);

  const showAllPasswords = () => {
    if (showAll === 10) {
      setShowAllButtonText('Show less');
      setShowAll(50);
    }
    if (showAll === 50) {
      setShowAllButtonText('Show all (50)');
      setShowAll(10);
    }
  };

  return (
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
      {/* <Section headText='Frequently asked questions'>
        {FAQData.map(({ title, context }) => (
          <div>
            <p>{title}</p>
            <p>{context}</p>
          </div>
        ))}
      </Section> */}
    </>
  );
};

export default HomePage;
