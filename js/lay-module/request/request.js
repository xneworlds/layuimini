layui.define(['jquery', 'layer'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer;

    var request = {
        serverUrl: 'http://colorfulboxes.cn:9528', // 服务器地址
        scope: 'colorfulboxes',  // 作用域
        autoRender: false,  // 窗口大小改变后是否自动重新渲染表格，解决layui数据表格非响应式的问题
        request: {
            //页码的参数名称，默认：page
            pageName: 'current',
            //每页数据量的参数名，默认：limit
            limitName: 'size'
        },
        parseData: function (res) { //res 即为原始返回的数据
            return {
                "code": res.status, //解析接口状态
                "msg": res.msg, //解析提示文本
                // "count": res.count, //解析数据长度
                "data": res.data.records //解析数据列表
            };
        },
        response: {
            // statusName: 'status', //规定数据状态的字段名称，默认：code
            statusCode: 200, //规定成功的状态码，默认：0
        },
        //ajax封装
        get: function (url, params, success) {
            params.method = "GET";
            return this.toRequest(this.serverUrl + url, params, success);
        },
        post: function (url, params, success) {
            params.method = "POST";
            return this.toRequest(this.serverUrl + url, params, success);
        },
        put: function (url, params, success) {
            params.method = "PUT";
            return this.toRequest(this.serverUrl + url, params, success);
        },
        delete: function (url, params, success) {
            params.method = "DELETE";
            return this.toRequest(this.serverUrl + url, params, success);
        },
        toRequest: function (url, params, success) {
            params.method = params.method ? params.method : "GET";
            if (!params.contentType) {
                switch (params.method) {
                    case "GET":
                        params.contentType = '';
                        break;
                    case "POST":
                        params.data = JSON.stringify(params);
                        params.contentType = 'application/json; charset=UTF-8';
                        break;
                    case "PUT":
                        params.data = JSON.stringify(params);
                        params.contentType = 'application/json; charset=UTF-8';
                        break;
                    case "DELETE":
                        params.contentType = '';
                        break;
                    default:
                        params.contentType = '';
                }
            }
            $.ajax({
                url: url,
                data: params.data ? params.data : {},
                type: params.method,
                contentType: params.contentType,
                xhrFields: {
                    withCredentials: false
                },
                async: params.async !== false,
                crossDomain: true,
                success: function (data) {
                    if(data.status === 200) {
                        success(data)
                    }else {
                        layer.msg(data.msg, {icon: 5})
                    }
                },
                error: function () {
                    layer.msg("操作失败！", {icon: 5})
                    layer.closeAll('loading')
                }
            });
        },
    };
    exports('request', request);
});
