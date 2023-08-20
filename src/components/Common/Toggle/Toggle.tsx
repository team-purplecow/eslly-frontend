import { useState } from 'react';
import { ToggleContainer } from './Toggle.styled';
import { ToggleProps } from './Toggle.types';

export const Toggle = ({ label, onChecked, ...props }: ToggleProps) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <ToggleContainer {...props} className={isOn ? 'on' : 'off'}>
      {label.map((item, index) => (
        <div
          key={index}
          className={isOn == !!index ? 'on' : 'off'}
          onClick={() => {
            setIsOn(!!index);
            if (onChecked) onChecked(!!index);
          }}
        >
          {item}
        </div>
      ))}
    </ToggleContainer>
  );
};
