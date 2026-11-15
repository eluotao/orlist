# orlist 订单列表抓取

- 类型：frida
- 版本：1.0.0

## 功能

Hook `com.google.gson.Gson.fromJson` 的两个常用重载：

- `fromJson(String, java.lang.reflect.Type)`
- `fromJson(String, java.lang.Class)`

当 JSON 字符串中包含 `group_list` 或 `reward_info` 时，将完整 JSON 打印到日志，原方法照常执行，不影响 App 运行。

## 使用

1. 在 JsHook 中对目标 App 启用本脚本（frida 模式）
2. 打开目标 App，刷新订单列表
3. 在 JsHook 日志中查看 `[JsHook 拦截到目标接口 ...]` 输出

如需匹配其他接口，修改脚本中的关键词 `group_list` / `reward_info` 即可。

## 注意

若目标 App 未使用 Gson（或已混淆类名），会输出 `[-] 挂载失败`。
