import { type ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  lable: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({
  lable, id, ...props},
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{lable}</label>
      <input id={id} name={id} {...props} ref={ref} />
  </p>
  )
});

export default Input;