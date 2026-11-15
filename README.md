# orlist

个人 [JsHook](https://doc.jshook.org/#/md2) 自建脚本仓库。

## 订阅地址

在 JsHook 仓库界面右上角菜单中添加以下任一地址：

| 格式 | 地址 |
| --- | --- |
| 完整格式（推荐） | `https://raw.githubusercontent.com/eluotao/orlist/main/store.json` |
| 列表格式 | `https://raw.githubusercontent.com/eluotao/orlist/main/list.json` |

国内访问 GitHub raw 不稳定时，可改用 jsDelivr 镜像（有缓存延迟）：
`https://cdn.jsdelivr.net/gh/eluotao/orlist@main/store.json`

## 目录结构

```
.
├── store.json            # 仓库信息（完整格式，订阅入口）
├── list.json             # 脚本列表（列表格式）
└── scripts/
    └── <脚本名>/
        ├── <脚本名>.js    # 脚本本体
        └── README.md     # 脚本详细说明
```

## 脚本列表

| 名称 | 类型 | 版本 | 说明 |
| --- | --- | --- | --- |
| [orlist 订单列表抓取](scripts/orlist) | frida | 1.0.0 | Hook Gson 解析，打印订单列表接口 JSON |

## 新增脚本

1. 新建 `scripts/<脚本名>/`，放入脚本 `.js` 和 `README.md`
2. 在 `list.json` 追加一项（`id` 用 `uuidgen` 生成，`type` 为 `frida` 或 `rhino`，`desc` 控制在 30 字内）
3. 提交并推送到 `main`
