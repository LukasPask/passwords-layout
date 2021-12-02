import { useState } from 'react';

const HeaderLogic = ({ render }) => {
  // Hooks
  // State
  // For Hamburger animation
  const [isActive, setIsActive] = useState('');
  // For toggling navigation in tablet mode
  const [isOpen, setIsOpen] = useState('none');
  const [height, setHeight] = useState('0px');

  // Custom functions
  const toggleNavigation = () => {
    if (!isActive) {
      setIsActive('is-active');
      setIsOpen('block');
      setHeight('auto');
    } else if (isActive === 'is-active') {
      setIsActive('');
      setIsOpen('none');
      setHeight('0px');
    }
  };

  return render(
    //   State
    isActive,
    isOpen,
    height,
    // Functions
    toggleNavigation
  );
};

export default HeaderLogic;
