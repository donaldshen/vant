import { cellProps, SharedCellProps } from '../cell/shared';

export type SharedFieldProps = SharedCellProps & {
  error?: boolean;
  readonly?: boolean,
  autosize?: boolean | object;
  leftIcon?: string;
  rightIcon?: string;
  clearable?: boolean;
  labelClass?: any;
  labelWidth?: number | string;
  labelAlign?: string;
  inputAlign?: string;
  errorMessage?: string;
  errorMessageAlign?: string;
  type: string;
}

export const fieldProps = {
  ...cellProps,
  error: Boolean,
  readonly: Boolean,
  autosize: [Boolean, Object],
  leftIcon: String,
  rightIcon: String,
  clearable: Boolean,
  labelClass: null as any,
  labelWidth: [Number, String],
  labelAlign: String,
  inputAlign: String,
  errorMessage: String,
  errorMessageAlign: String,
  type: {
    type: String,
    default: 'text'
  }
};
