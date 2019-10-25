import { createNamespace } from '../utils';
import { inherit, emit } from '../utils/functional';
import { preventDefault } from '../utils/dom/event';
import Field from '../field';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

const [createComponent, bem, t] = createNamespace('search');

export type SearchProps = {
  shape: 'sqaure' | 'round';
  value?: string;
  label?: string;
  leftIcon: string;
  rightIcon?: string;
  clearable: boolean;
  background: string;
  actionText?: string;
  showAction?: boolean;
  removeForm?: boolean;
};

export type SearchSlots = DefaultSlots & {
  label?: ScopedSlot;
  action?: ScopedSlot;
  'left-icon'?: ScopedSlot;
  'right-icon'?: ScopedSlot;
};

export type SearchEvents = {
  onCancel?(): void;
  onInput?(value: string): void;
  onSearch?(value: string): void;
  onKeypress?(event: KeyboardEvent): void;
};

function Search(
  h: CreateElement,
  props: SearchProps,
  slots: SearchSlots,
  ctx: RenderContext<SearchProps>
) {
  function Label() {
    if (slots.label || props.label) {
      return <div class={bem('label')}>{slots.label ? slots.label() : props.label}</div>;
    }
  }

  function Action() {
    if (!props.showAction) {
      return;
    }

    function onCancel() {
      if (slots.action) {
        return;
      }

      emit(ctx, 'input', '');
      emit(ctx, 'cancel');
    }

    return (
      <div class={bem('action')} role="button" tabindex="0" onClick={onCancel}>
        {slots.action ? slots.action() : props.actionText || t('cancel')}
      </div>
    );
  }

  const fieldData = {
    attrs: ctx.data.attrs,
    on: {
      ...ctx.listeners,
      keypress(event: KeyboardEvent) {
        // press enter
        if (event.keyCode === 13) {
          preventDefault(event);
          emit(ctx, 'search', props.value);
        }
        emit(ctx, 'keypress', event);
      }
    }
  };

  const inheritData = inherit(ctx);
  delete inheritData.attrs;

  function SearchInput() {
    return (
      <div
        class={bem({ 'show-action': props.showAction })}
        style={{ background: props.background }}
        {...inheritData}
      >
        <div class={bem('content', props.shape)}>
          {Label()}
          <Field
            type="search"
            border={false}
            value={props.value}
            leftIcon={props.leftIcon}
            rightIcon={props.rightIcon}
            clearable={props.clearable}
            scopedSlots={{
              'left-icon': slots['left-icon'],
              'right-icon': slots['right-icon']
            }}
            {...fieldData}
          />
        </div>
        {Action()}
      </div>
    );
  }

  if (props.removeForm) {
    return SearchInput();
  }

  return (
    // 在 input 外层增加 form 标签，且 action 不为空，同时 input 的 type 为 search，即可在 iOS 输入法中显示搜索按钮。
    // eslint-disable-next-line
    <form action="javascript:;">
      {SearchInput()}
    </form>
  );
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  actionText: String,
  showAction: Boolean,
  shape: {
    type: String,
    default: 'square'
  },
  clearable: {
    type: Boolean,
    default: true
  },
  background: {
    type: String,
    default: '#fff'
  },
  leftIcon: {
    type: String,
    default: 'search'
  },
  removeForm: {
    type: Boolean,
    default: false
  }
};

export default createComponent<SearchProps, SearchEvents, SearchSlots>(Search);
