import React from 'react';
import { Button } from '../Button/Button'; // Asegúrate de que la ruta de importación sea correcta.

interface HeaderProps {
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonPrimary?: boolean;
  buttonBackgroundColor?: string; // Nueva prop para personalizar el color de fondo del botón.
  buttonColor?: string; // Nueva prop para personalizar el color del texto del botón.
}

export const Header: React.FC<HeaderProps> = ({
  title,
  buttonText,
  onButtonClick,
  buttonPrimary = true,
  buttonBackgroundColor,
  buttonColor,
}) => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1>{title}</h1>
      <Button 
        label={buttonText} 
        primary={buttonPrimary} 
        onClick={onButtonClick}
        backgroundColor={buttonBackgroundColor} 
        color={buttonColor}
      />
    </header>
  );
};