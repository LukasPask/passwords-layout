import { useState, useEffect, useRef } from 'react';

// Logic (custom hooks)
import useFetch from '../hooks/useFetch';
// Data
import { FAQData } from '../data/Data';

const HomePageLogic = ({ render }) => {
  //  --- Custom hooks
  // Getting data from API
  const {
    data: passwords,
    isLoading,
    error,
  } = useFetch(`https://playground.nordsec.com/v2/worst-psw.json`);
  //  --- State
  // for controlling shown data count
  const [showAll, setShowAll] = useState(10);
  // for controlling data count button text
  const [showAllButtonText, setShowAllButtonText] = useState('Show all (50)');
  // for sorting passwords by filter
  const [sortedPassword, setSortedPassword] = useState([]);
  // For showing and hiding FAQ content default value is the first FAQ
  const [showText, setShowText] = useState(FAQData[0].title);
  //  --- Ref
  const passwordFilter = useRef(true);
  //  --- Side effects
  useEffect(() => {
    // Trigger this sorting only if data from API is got
    if (!isLoading) {
      // If passwordFilter = true then filter data by count
      if (passwordFilter.current) {
        setSortedPassword(
          passwords.passwords.sort((a, b) => {
            return b.count - a.count;
          })
        );
      } else if (!passwordFilter.current) {
        // If passwordFilter = false then filter data by count
        setSortedPassword(
          passwords.passwords.sort((a, b) => {
            if (a.value.toLowerCase() < b.value.toLowerCase()) return -1;
            if (a.value.toLowerCase() > b.value.toLowerCase()) return 1;
            return 0;
          })
        );
      }
    }
    // Reload component if isLoading, passwords or sortedPasswords changes
  }, [isLoading, passwords, sortedPassword]);
  // For sorting data
  const sortHandler = (e) => {
    // Clean the sorted passwords so if the filter changes it would get new data
    setSortedPassword([]);
    // filter by count makes passwordFilter true which triggers useEffect to sort it
    if (e.target.value === 'Count') {
      passwordFilter.current = true;
    }
    // filter Alphabetically makes passwordFilter false which triggers useEffect to sort it
    else if (e.target.value === 'ABC') {
      passwordFilter.current = false;
    }
  };

  const showAllPasswords = () => {
    // By default showAll is 10 so when the button is clicked it triggers to change the showAll state to 50 and shows all passwords, also changes button text
    if (showAll === 10) {
      setShowAllButtonText('Show less');
      setShowAll(50);
    }
    // after button is clicked when all data is shown the showAll and showButtonText states values will be set to default
    if (showAll === 50) {
      setShowAllButtonText('Show all (50)');
      setShowAll(10);
    }
  };

  return render(
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
  );
};

export default HomePageLogic;
