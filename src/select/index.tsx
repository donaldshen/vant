import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';

export type SelectEvents = {
  onChange?(event: Event): void;
  onInput?(value: String): void;
}

export type SelectOption = {
  label: string;
  value: any;
}

export type SelectProps = {
  value?: any;
  options?: [SelectOption];
  placeholder?: number | string;
}

const selectProps = {
  value: null as any,
  placeholder: {
    type: [Number, String],
    default: '点击选择'
  },
  options: {
    type: Array,
    default: () => []
  }
};

const [createComponent, bem] = createNamespace('select');

function Select(
  h: CreateElement,
  props: SelectProps,
  slots: {},
  ctx: RenderContext<SelectProps>
) {
  const {
    placeholder,
    options
  } = props;

  function onChange(event: Event) {
    const value = event && event.target && event.target.value;
    emit(ctx, 'input', value);
    emit(ctx, 'change', value);
  }

  function Placeholder(value: SelectProps['placeholder']) {
    return (
      <option
        label={value}
        value={undefined}
        disabled
        selected={!props.value || 'selected'}
        class={bem('placeholder')}
      />
    );
  }

  function Options(options: SelectProps['options']) {
    if (options && options.length) {
      return options.map(({ label, value }: SelectOption) => (
        <option
          class={bem('option')}
          selected={props.value === value && 'selected'}
          value={value}
          label={label}
        ></option>
      ));
    }
  }

  return (
    <select
      onChange={onChange}
      class={bem()}
      {...inherit(ctx)}
    >
      {Placeholder(placeholder)}
      {Options(options)}
    </select>
  );
}

Select.props = selectProps;

export default createComponent<SelectProps, SelectEvents>(Select);
