import { Text } from "../Text";
import styles from "./Input.module.scss";
import { IInputProps } from "./types";

export const Input = ({ errorMessage, label, ...rest }: IInputProps) => {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor="input-component">
          {label}
        </label>
      )}
      <input
        id="input-component"
        className={`${styles.input} ${errorMessage ? styles.input__error : ""} ${
          rest.className || ""
        }`}
        {...rest}
      />
      {errorMessage && (
        <Text className={`${styles.message} ${errorMessage ? styles.message__error : ""}`}>
          {errorMessage}
        </Text>
      )}
    </div>
  );
};
