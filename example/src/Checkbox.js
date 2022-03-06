import React, { useEffect, useRef } from 'react';

const Checkbox = ({ children, indeterminate, checked, onChange }) => {
  const checkboxRef = useRef();
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [checked, indeterminate]);

  return (
    <label>
      <input
        ref={checkboxRef}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
};

export default Checkbox;
