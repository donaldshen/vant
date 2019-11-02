### Before submitting a pull request, please make sure the following is done:

1. Read the [contributing guide](https://github.com/youzan/vant/blob/dev/.github/CONTRIBUTING.md).
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes (`npm test`).

#### Title Format

type(ComponentName?)：commit message

Example：

- docs: fix typo in quickstart
- build: optimize build speed
- fix(Button): incorrect style
- feat(Button): add color prop

Allowed Types:

- fix
- feat
- docs
- perf
- test
- types
- build
- chore
- refactor
- breaking change

#### 屏幕截图

运行 eslint 屏幕截图

运行 test 屏幕截图

```
如果你的改动只涉及到部分组件
则只需要针对性的运行 `test` 即可

e.g.
这次 pr 只改动了 地址列表组件(src/address-list)
则可以运行 `yarn test src/address-list` 测试改动

再把运行结果截图贴在这里!
```
