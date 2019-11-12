<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell-group>
        <van-select
          v-model="value"
          label="基本用法"
          :options="options0"
          :placeholder="$t('genders')"
          @select="onSelect"
        />
      </van-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '自定义类型',
      title3: '禁用输入框',
      title4: '错误提示',
      title5: '高度自适应',
      title6: '插入按钮',
      message: '留言',
      phone: '手机号',
      sms: '短信验证码',
      sendSMS: '发送验证码',
      smsPlaceholder: '请输入短信验证码',
      phonePlaceholder: '请输入手机号',
      messagePlaceholder: '请输入留言',
      inputDisabled: '输入框已禁用',
      phoneError: '手机号格式错误',
      genders: '请选择性别',
      male: '男',
      female: '女'
    },
    'en-US': {
      title2: 'Custom type',
      title3: 'Disabled',
      title4: 'Error info',
      title5: 'Auto resize',
      title6: 'Insert button',
      message: 'Message',
      phone: 'Phone',
      sms: 'SMS',
      sendSMS: 'Send SMS',
      smsPlaceholder: 'SMS',
      phonePlaceholder: 'Phone',
      messagePlaceholder: 'Message',
      inputDisabled: 'Disabled',
      phoneError: 'Invalid phone',
      genders: 'Select your gender',
      male: 'male',
      female: 'female'
    }
  },

  data() {
    return {
      sms: '',
      value: 2,
      password: '',
      username: '',
      username2: '',
      message: '',
      phone: '1365577',
    };
  },

  computed: {
    options0() {
      return [
        { name: this.$t('male'), value: 1 },
        { name: this.$t('female'), value: 2 },
      ];
    }
  },

  watch: {
    value(val) {
      this.$toast(val);
    }
  },

  methods: {
    onSelect(item, index) {
      console.log(item, index);
    }
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-field {
  padding-bottom: 30px;

  .van-field__right-icon .van-icon {
    color: @blue;
  }
}
</style>
