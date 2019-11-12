import { createNamespace } from '../utils';
import Field from '../field';
import ActionSheet from '../action-sheet';
import { stopPropagation } from '../utils/dom/event';

const selectProps = {
  options: {
    type: Array,
    default: () => [],
  },

  sheetAttrs: {
    type: Object,
    default: () => ({}),
  },
};

const fieldSlots = [
  'label',
  'left-icon',
  'right-icon',
  'button',
];

const [createComponent, bem] = createNamespace('select');

export default createComponent({
  props: {
    ...selectProps,
  },

  data() {
    return {
      showSheet: false,
    };
  },

  computed: {
    showValue() {
      const { value } = this.$attrs;
      const targetOption = this.options.find(item => item.value === value || item.name === value);
      return targetOption && targetOption.name;
    },
  },

  methods: {
    onCancel($event) {
      stopPropagation($event);
      this.$emit('cancel');
    },

    onSelect(item, index) {
      this.$emit('input', item.value || item.name);
      this.$emit('select', item, index);
    },

    triggle(value) {
      this.showSheet = value;
    },

    inheritSlots() {
      return fieldSlots.map(slotName => (
        this.slots(slotName) && <template slot={slotName}>
          {this.slots(slotName)}
        </template>
      ));
    },
  },

  render() {
    return (
      <Field
        class={bem()}
        readonly={true}
        onClick={() => this.triggle(true)}
        {...{ attrs: this.$attrs }}
        {...{ listeners: this.$listeners }}
        // 这个 value 必须在继承的 attrs 下面，为了 emit value，而显示 name
        value={this.showValue}
      >
        {this.inheritSlots()}
        <ActionSheet
          class={bem('options')}
          {...{ attrs: this.sheetAttrs }}
          onCancel={this.onCancel}
          onSelect={this.onSelect}
          value={this.showSheet}
          actions={this.options}
          closeOnClickAction={true}
          onInput={this.triggle}
        />
      </Field>
    );
  },
});
