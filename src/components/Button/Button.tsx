import PropTypes from 'prop-types';
import { CSSProperties } from 'react';
import './Button.scss';

interface IButton {
  onClick?: () => void;
  label?: string;
  bgColor?: string;
}

const Button = ({ onClick, label, bgColor }: IButton) => {
  const buttonStyles: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 24px',
    borderRadius: '8px',
    fontFamily: 'var(--font-family)',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '150%',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: bgColor ? `var(${bgColor})` : 'var(--primary-color)',
    color: bgColor ? '#000' : '#fff',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      {label ? label : 'Button'}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Button;
