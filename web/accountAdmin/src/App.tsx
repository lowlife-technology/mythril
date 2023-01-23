import { useState } from "react";
import { AccountWidget } from "@mythril/black-velvet";
import { addIdentity, IAddIdentityData } from "./graphql/login/addIdentity";

const App = () => {
  const [form, setForm] = useState([
    { key: "name", value: "", label: "A name of your choice," },
    { key: "email", value: "", label: "an eletronic mail," },
    { key: "password", value: "", label: "and finally, a password." },
  ]);

  const getFormValues = () => {
    let obj = { email: "" } satisfies IAddIdentityData;

    form.forEach(({ value, key }) => (obj = { ...obj, [key as keyof typeof obj]: value }));

    return obj;
  };

  const onChange = (event: any, input: any, index: number) => {
    const formCopy = [...form];
    formCopy[index].value = event.target.value;
    setForm(formCopy);
  };

  const submitHandler = async () => {
    try {
      const res = await addIdentity(getFormValues());

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AccountWidget form={form} onChange={onChange} onSubmit={submitHandler} />
    </div>
  );
};

export default App;
