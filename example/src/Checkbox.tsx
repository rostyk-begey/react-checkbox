import { ChangeEvent, ReactNode, useEffect, useRef } from 'react';

const Checkbox = ({
  children,
  indeterminate,
  checked,
  onChange,
}: {
  children: ReactNode;
  indeterminate: boolean;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [checked, indeterminate]);

  return (
    <li>
      <label>
        <input
          ref={checkboxRef}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {children}
      </label>
    </li>
  );
};

export default Checkbox;
