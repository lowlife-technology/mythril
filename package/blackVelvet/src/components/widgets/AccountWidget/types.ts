export interface IFormInput {
  value: string;
  label?: string;
}

export interface IAccountWidgetProps {
  /**
   * An @IInput array form to be rendered
   */
  form: IFormInput[];
  /**
   * A function that is run whenever any @IFormInput "change" event happens.
   * @event the regular input event.
   * @input the IFormInput that the "change" event happened on.
   * @index current IFormInput index that the "change" event happened on.
   */
  onChange(event: React.ChangeEvent<HTMLInputElement>, input: IFormInput, index: number): void;
  /**
   * A function that is run when the submit button is clicked
   * @param event a regular Mouse event
   */
  onSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}
