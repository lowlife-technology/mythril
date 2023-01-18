import { gql } from "@apollo/client";
import { useCallback, useState } from "react";
import { client } from "../../../App";
import { Button, Input, Text } from "../../ui";
import styles from "./CreateAccountWidget.module.scss";

export const CreateAccountWidget = () => {
  const [form, setForm] = useState([
    { value: "", label: "A name of your choice," },
    { value: "", label: "And eletronic mail," },
    { value: "", label: "And finally, a password." },
  ]);

  const disabled = form.some(({ value }) => value === "");

  const addIdentity = async () => {
    try {
      const res = await client.mutate({
        mutation: gql`
          mutation AddIdentity {
            addIdentity(email: "${form[1].value}") {
              id
              email
            }
          }
        `,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addIdentityCallback = useCallback(addIdentity, [addIdentity]);

  const inputChangeHandler = (
    { target: { value } }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const formCopy = [...form];
    formCopy[index].value = value;
    setForm(formCopy);
  };

  return (
    <div className={styles.createAccountWidget}>
      <Text variant="title1">Create Your Account</Text>
      {form.map(({ value, label }, index) => (
        <Input key={index} {...{ label, value }} onChange={(e) => inputChangeHandler(e, index)} />
      ))}
      <Button {...{ disabled }} title="Be part" onClick={addIdentityCallback} />
    </div>
  );
};
