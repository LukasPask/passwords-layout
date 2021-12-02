import { useState } from 'react';

const HeaderLogic = ({ render }) => {
  // Hooks
  // State
  // For Hamburger animation
  const [isActive, setIsActive] = useState('');
  // For toggling navigation in tablet mode
  const [isOpen, setIsOpen] = useState(false);

  // Custom functions
  const toggleNavigation = () => {
    if (!isActive) {
      setIsActive('is-active');
      setIsOpen(true);
    } else if (isActive === 'is-active') {
      setIsActive('');
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
