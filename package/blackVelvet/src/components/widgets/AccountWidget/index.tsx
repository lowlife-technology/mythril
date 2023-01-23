import { forwardRef } from "react";
import { Button, Input, Text } from "../../index";
import { IAccountWidgetProps } from "./types";

import styles from "./AccountWidget.module.scss";

export const AccountWidget = forwardRef<HTMLDivElement, IAccountWidgetProps>(
  ({ form, onChange, onSubmit }, ref) => {
    const disabled = form.some(({ value }) => value === "");

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      onChange(event, form[index], index);
    };

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onSubmit(event);
    };

    return (
      <div ref={ref} className={styles.createAccountWidget}>
        <Text variant="title1">Create Your Account</Text>
        {form.map(({ value, label }, index) => (
          <Input key={index} {...{ label, value }} onChange={(e) => inputChangeHandler(e, index)} />
        ))}
        <Button {...{ disabled }} title="Be part" onClick={clickHandler} />
      </div>
    );
  }
);
