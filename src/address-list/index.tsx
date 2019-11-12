import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import Button from '../button';
import RadioGroup from '../radio-group';
import AddressItem, { AddressItemData, AddressItemSlots } from './Item';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot } from '../utils/types';

export type AddressListProps = {
  value?: string | number;
  disabledText?: string;
  addButtonText?: string;
  list?: AddressItemData[];
  disabledList?: AddressItemData[];
};

export type AddressListSlots = AddressItemSlots & {
  top?: ScopedSlot;
};

const [createComponent, bem, t] = createNamespace('address-list');

function AddressList(
  h: CreateElement,
  props: AddressListProps,
  slots: AddressListSlots,
  ctx: RenderContext<AddressListProps>
) {
  function renderList(list?: AddressItemData[], disabled?: boolean) {
    if (!list) {
      return;
    }

    return list.map((item, index) => (
      <AddressItem
        data={item}
        key={item.id}
        disabled={disabled}
        scopedSlots={{
          radioIcon: slots.radioIcon,
          edit: slots.edit,
          delete: slots.delete,
        }}
        onEdit={() => {
          emit(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
        }}
        onClick={() => {
          emit(ctx, 'click-item', item, index);
        }}
        onDelete={() => {
          emit(ctx, 'delete', item, index);
        }}
        onDefault={() => {
          emit(ctx, disabled ? 'set-default-disabled' : 'set-default', item, index);

          if (!disabled) {
            emit(ctx, 'input', item.id);
          }
        }}
      />
    ));
  }

  const List = renderList(props.list);
  const DisabledList = renderList(props.disabledList, true);

  return (
    <div class={bem()} {...inherit(ctx)}>
      {slots.top && slots.top()}
      <RadioGroup value={props.value}>{List}</RadioGroup>
      {props.disabledText && <div class={bem('disabled-text')}>{props.disabledText}</div>}
      {DisabledList}
      {slots.default && slots.default()}
      <Button
        square
        size="large"
        type="danger"
        class={bem('add')}
        text={props.addButtonText || t('add')}
        onClick={() => {
          emit(ctx, 'add');
        }}
      />
    </div>
  );
}

AddressList.props = {
  list: Array,
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  value: [Number, String]
};

export default createComponent<AddressListProps>(AddressList);
