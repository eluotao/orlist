// JsHook 环境加载入口
Java.perform(function () {
    console.log("[*] JsHook 脚本已启动，正在寻找 Gson...");

    try {
        // 尝试获取 Gson 类
        var Gson = Java.use("com.google.gson.Gson");

        // 拦截第 1 种常用重载：fromJson(String json, Type typeOfT)
        Gson.fromJson.overload("java.lang.String", "java.lang.reflect.Type").implementation = function (jsonStr, type) {
            // 过滤：只打印包含我们特征词的 JSON
            if (jsonStr != null && (jsonStr.indexOf("group_list") !== -1 || jsonStr.indexOf("reward_info") !== -1)) {
                console.log("\n========== [JsHook 拦截到目标接口 Type] ==========");
                console.log(jsonStr);
                console.log("==================================================\n");
            }
            // 执行原方法，保证 App 正常运行
            return this.fromJson(jsonStr, type);
        };

        // 拦截第 2 种常用重载：fromJson(String json, Class classOfT)
        Gson.fromJson.overload("java.lang.String", "java.lang.Class").implementation = function (jsonStr, clazz) {
            if (jsonStr != null && (jsonStr.indexOf("group_list") !== -1 || jsonStr.indexOf("reward_info") !== -1)) {
                console.log("\n========== [JsHook 拦截到目标接口 Class] ==========");
                console.log(jsonStr);
                console.log("===================================================\n");
            }
            return this.fromJson(jsonStr, clazz);
        };

        console.log("[+] Gson 拦截器挂载成功！请刷新订单列表。");

    } catch (e) {
        console.log("[-] 挂载失败，目标 App 可能没有使用默认 Gson，错误信息: " + e);
    }
});
