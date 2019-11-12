import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../utils/types';

export type AddressItemData = {
  id: string | number;
  tel: string | number;
  name: string;
  address: string;
};

export type AddressItemProps = {
  data: AddressItemData;
  disabled?: boolean;
};

export type AddressItemSlots = DefaultSlots & {
  radioIcon?: ScopedSlot;
  edit?: ScopedSlot;
  delete?: ScopedSlot;
};

export type AddressItemEvents = {
  onEdit(): void;
  onClick(): void;
  onDelete(): void;
  onDefault(): void;
};

const [createComponent, bem] = createNamespace('address-item');

function AddressItem(
  h: CreateElement,
  props: AddressItemProps,
  slots: AddressItemSlots,
  ctx: RenderContext<AddressItemProps>
) {
  const { disabled } = props;

  function onClick() {
    emit(ctx, 'click');
  }

  function onSetDefault() {
    emit(ctx, 'default');
  }

  const renderRightIcon = () => (
    <div class={bem('icons-wrapper')}>
      <span
        style="display: flex"
        class={bem('edit')}
        onClick={(event: Event) => {
          event.stopPropagation();
          emit(ctx, 'edit');
        }}
      >
        {slots.edit ? slots.edit() : <Icon name="edit" />}
      </span>
      <span
        style="display: flex"
        class={bem('delete')}
        onClick={(event: Event) => {
          event.stopPropagation();
          emit(ctx, 'delete');
        }}
      >
        {slots.delete ? slots.delete() : <Icon name="delete" />}
      </span>
    </div>
  );

  const renderContent = () => {
    const { data } = props;
    const Info = [
      <div class={bem('content')} onClick={onClick}>
        <div class={bem('name')}>{`${data.name}，${data.tel}`}</div>
        <div class={bem('address')}>{data.address}</div>
      </div>,
      <div class={bem('bar')}>
        <Radio
          name={data.id}
          onClick={onSetDefault}
          class={bem('set-default')}
          scopedSlots={{ icon: slots.radioIcon }}
        >
          设为默认
        </Radio>
        {renderRightIcon()}
      </div>
    ];

    return Info;
  };

  return (
    <Cell
      class={bem({ disabled })}
      clickable={!disabled}
      scopedSlots={{
        default: renderContent
      }}
      {...inherit(ctx)}
    />
  );
}

AddressItem.props = {
  data: Object,
  disabled: Boolean
};

export default createComponent<AddressItemProps, AddressItemEvents>(AddressItem);
