import React from 'react';
import styled from 'styled-components';

export function Extras({ extras, checkExtra }) {
  return (
    <ExtrasGrid>
      {extras.map((extra, index) => (
        <CheckboxLabel>
          <ExtrasCheckbox
            type={`checkbox`}
            checked={extra.checked}
            onClick={() => {
              checkExtra(index);
            }}
          />
          {extra.name}
        </CheckboxLabel>
      ))}
    </ExtrasGrid>
  );
}

const ExtrasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ExtrasCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;
