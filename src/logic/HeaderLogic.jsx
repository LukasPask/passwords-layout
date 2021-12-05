import { useState } from 'react';

const HeaderLogic = ({ render }) => {
  // Hooks
  // State
  // For Hamburger animation
  const [isActive, setIsActive] = useState('');
  // For toggling navbar (modal) in tablet mode
  const [isOpen, setIsOpen] = useState(false);

  // Custom functions
  // This functions works only when the screen size is smaller than 900px
  const toggleNavigation = () => {
    if (!isActive) {
      // Adding 'is-active' class to the toggler
      setIsActive('is-active');
      // Opening navbar (modal)
      setIsOpen(true);
    } else if (isActive === 'is-active') {
      // removing class from the toggler
      setIsActive('');
      // Hiding the navbar (modal)
      setIsOpen(false);
    }
  };

  return render(
    //   State
    isActive,
    isOpen,
    // Functions
    toggleNavigation
  );
};

export default HeaderLogic;
