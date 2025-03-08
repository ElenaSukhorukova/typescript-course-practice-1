import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
  type FormEvent
} from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
};

const Form = forwardRef<FormHandle, FormProps>(function Form({
  onSave,
  children,
  ...props},
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("CLEARING");
        form.current?.reset();
      }
    }
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    onSave(data);
    form.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...props} ref={form}>
      {children}
    </form>
  )
});

export default Form;