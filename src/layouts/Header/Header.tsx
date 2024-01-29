import React from 'react';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Banner from 'layouts/Banner/Banner';

const LoginButtons: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <Button label="Sign Up" bgColor='--light-4'/>
      <Button label="Login" />
    </div>
  );
};

const NavbarLinks: React.FC = () => {
  const links = ['Home', 'Courses', 'About Us', 'Pricing', 'Contact'];

  return (
    <div className="flex justify-between items-center gap-8 font-normal">
      <Icon
        name="logo"
        className="w-8 h-8 font-bold size-6"
        style={{
          borderRadius: 'var(--border-radius)',
          background: 'var(--primary-color)',
        }}
      />
      {links.map((link, index) => (
        <span className="app-links" key={index}>
          {link}
        </span>
      ))}
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <>
      <div className="p-30">
        <Banner />
        <header
          className="bg-white w-full flex items-center justify-between"
          style={{ borderBottom: '1px solid var(--light-3)' }}
        >
          <div className="md:container md:mx-auto flex justify-between items-center py-2">
            <NavbarLinks />
            <LoginButtons />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
