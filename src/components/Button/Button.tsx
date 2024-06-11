import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}
interface ButtonProps2 {
  primary?: boolean;
  backgroundColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  label: string;
}

const baseStyles = {
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  border: 'none'
}

const StyledButton = styled.button<ButtonProps>((props) => ({
  ...baseStyles,
  backgroundColor: props.primary? 'blue' : props.backgroundColor || 'transparent',
  color: props.primary ? 'white' : props.color || 'black',
  ...(props.size === 'small' && {
    padding: '5px 10px',
    fontSize: '12px',
  }),
  ...(props.size === 'medium' && {
    padding: '10px 20px',
    fontSize: '14px',
  }),
  ...(props.size === 'large' && {
    padding: '15px 30px',
    fontSize: '16px',
  }),
}))

export function Button ({ 
  label,
  backgroundColor,
  color,
  primary = true,
  size,
  onClick }: ButtonProps2){
  return (
    <StyledButton 
      backgroundColor={backgroundColor}
      color={color}
      primary={primary}
      size={size}
      onClick={onClick} 
      >
      {label}
    </StyledButton>
  );
}
