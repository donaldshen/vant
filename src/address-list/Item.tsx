import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

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
  slots: DefaultSlots,
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
      <Icon
        name="edit"
        class={bem('edit')}
        onClick={(event: Event) => {
          event.stopPropagation();
          emit(ctx, 'edit');
        }}
      />
      <Icon
        name="delete"
        class={bem('delete')}
        onClick={(event: Event) => {
          event.stopPropagation();
          emit(ctx, 'delete');
        }}
      />
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
        <Radio name={data.id} onClick={onSetDefault} class={bem('set-default')}>
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
  disabled: Boolean,
};

export default createComponent<AddressItemProps, AddressItemEvents>(AddressItem);
