import { IButtonProps } from "./types";
import styles from "./Button.module.scss";
import { Text } from "../Text";

export const Button = ({ title, className, ...rest }: IButtonProps) => {
  return (
    <button
      className={`${rest.disabled ? styles.buttonDisabled : styles.button} ${className || ""}`}
      {...rest}
    >
      <Text emphasize className={rest.disabled ? styles.buttonTitleDisabled : styles.buttonTitle}>
        {title}
      </Text>
    </button>
  );
};
