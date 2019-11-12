# Select 表单选择器

### 引入

Select 组件由 Felid 和 ActionSheet 组成，因此需要同时引入这两个基础组件

``` javascript
import Vue from 'vue';
import { Select, Felid, ActionSheet } from 'vant';

Vue.use(Felid);
Vue.use(ActionSheet);
Vue.use(Select);
```

## 代码演示

### 基础用法

v-model 用于绑定当前的选中值，[ActionSheetItem](https://femessage.github.io/vant/#/zh-CN/action-sheet#action-shu-ju-jie-gou) 中的 `name` 属性值。

```html
<van-select v-model="value" :options="options" :placeholder="placeholder" />

export default {
  data() {
    return {
      value: '',
      placeholder: '请选择性别',
      options: [
        { name: '男', value: 1 },
        { name: '女', value: 2 },
      ]
    }
  }
}
```

### 事件监听

Select 组件支持所有 Field 组件的事件，同时增加 `select` 和 `cancel` 事件，分别在点击选项和点击取消时触发。

```html
<van-select v-model="value" :options="options" @select="onSelect" @cancel="onCancel" />
```

## API

### Props

Select 默认支持 Input 标签所有的原生属性，比如 `maxlength`、`placeholder`、`autofocus` 等，同时继承了 Field 的所有属性。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| options | 菜单选项，参考 ActionSheetItem | *ActionSheetItem[]* | `[]` | - |
| sheetAttrs | 扩展 ActionSheet 的属性 | *object* | `{}` | - |

### Events

Select 同时支持 Field 的所有事件。

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 选择选项时 | item: 当前选项; index: 选项的索引 |
| cancel | 点击取消时 | - |

### Slots

默认支持 Field 的所有 slot，除了 `input` 插槽
