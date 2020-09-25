layui.define(["jquery", "layer"], function (exports) {
    var $ = layui.$,
        layer = layui.layer;

    var miniTheme = {

        /**
         * 主题配置项
         * @param bgcolorId
         * @returns {{headerLogo, menuLeftHover, headerRight, menuLeft, headerRightThis, menuLeftThis}|*|*[]}
         */
        config: function (bgcolorId) {
            var bgColorConfig = {
                headerRightBg: '#ffffff', //头部右侧背景色
                headerRightBgThis: '#e4e4e4', //头部右侧选中背景色,
                headerRightColor: 'rgba(107, 107, 107, 0.7)', //头部右侧字体颜色,
                headerRightChildColor: 'rgba(107, 107, 107, 0.7)', //头部右侧下拉字体颜色,
                headerRightColorThis: '#565656', //头部右侧鼠标选中,
                headerRightNavMore: 'rgba(160, 160, 160, 0.7)', //头部右侧更多下拉颜色,
                headerRightNavMoreBg: '#1E9FFF', //头部右侧更多下拉列表选中背景色,
                headerRightNavMoreColor: '#ffffff', //头部右侧更多下拉列表字体色,
                headerRightToolColor: '#565656', //头部缩放按钮样式,
                headerLogoBg: '#192027', //logo背景颜色,
                headerLogoColor: 'rgb(191, 187, 187)', //logo字体颜色,
                leftMenuNavMore: 'rgb(191, 187, 187)', //左侧菜单更多下拉样式,
                leftMenuBg: '#28333E', //左侧菜单背景,
                leftMenuBgThis: '#1E9FFF', //左侧菜单选中背景,
                leftMenuChildBg: '#0c0f13', //左侧菜单子菜单背景,
                leftMenuColor: 'rgb(191, 187, 187)', //左侧菜单字体颜色,
                leftMenuColorThis: '#ffffff', //左侧菜单选中字体颜色,
                tabActiveColor: '#1e9fff', //tab选项卡选中颜色,
            };
            return bgColorConfig;
        },

        /**
         * 初始化
         * @param options
         */
        render: function (options) {
            options.bgColorDefault = options.bgColorDefault || false;
            options.listen = options.listen || false;
            var bgcolorId = sessionStorage.getItem('layuiminiBgcolorId');
            if (bgcolorId === null || bgcolorId === undefined || bgcolorId === '') {
                bgcolorId = options.bgColorDefault;
            }
            miniTheme.buildThemeCss(bgcolorId);
        },

        /**
         * 构建主题样式
         * @param bgcolorId
         * @returns {boolean}
         */
        buildThemeCss: function (bgcolorId) {
            if (!bgcolorId) {
                return false;
            }
            var bgcolorData = miniTheme.config(bgcolorId);
            var styleHtml = '/*头部右侧背景色 headerRightBg */\n' +
                '.layui-layout-admin .layui-header {\n' +
                '    background-color: ' + bgcolorData.headerRightBg + ' !important;\n' +
                '}\n' +
                '\n' +
                '/*头部右侧选中背景色 headerRightBgThis */\n' +
                '.layui-layout-admin .layui-header .layuimini-header-content > ul > .layui-nav-item.layui-this, .layuimini-tool i:hover {\n' +
                '    background-color: ' + bgcolorData.headerRightBgThis + ' !important;\n' +
                '}\n' +
                '\n' +
                '/*头部右侧字体颜色 headerRightColor */\n' +
                '.layui-layout-admin .layui-header .layui-nav .layui-nav-item a {\n' +
                '    color:  ' + bgcolorData.headerRightColor + ';\n' +
                '}\n' +
                '/**头部右侧下拉字体颜色 headerRightChildColor */\n' +
                '.layui-layout-admin .layui-header .layui-nav .layui-nav-item .layui-nav-child a {\n' +
                '    color:  ' + bgcolorData.headerRightChildColor + '!important;\n' +
                '}\n'+
                '\n' +
                '/*头部右侧鼠标选中 headerRightColorThis */\n' +
                '.layui-header .layuimini-menu-header-pc.layui-nav .layui-nav-item a:hover, .layui-header .layuimini-header-menu.layuimini-pc-show.layui-nav .layui-this a {\n' +
                '    color: ' + bgcolorData.headerRightColorThis + ' !important;\n' +
                '}\n' +
                '\n' +
                '/*头部右侧更多下拉颜色 headerRightNavMore */\n' +
                '.layui-header .layui-nav .layui-nav-more {\n' +
                '    border-top-color: ' + bgcolorData.headerRightNavMore + ' !important;\n' +
                '}\n' +
                '\n' +
                '/*头部右侧更多下拉颜色 headerRightNavMore */\n' +
                '.layui-header .layui-nav .layui-nav-mored, .layui-header .layui-nav-itemed > a .layui-nav-more {\n' +
                '    border-color: transparent transparent ' + bgcolorData.headerRightNavMore + ' !important;\n' +
                '}\n' +
                '\n' +
                '/**头部右侧更多下拉配置色 headerRightNavMoreBg headerRightNavMoreColor */\n' +
                '.layui-header .layui-nav .layui-nav-child dd.layui-this a, .layui-header .layui-nav-child dd.layui-this, .layui-layout-admin .layui-header .layui-nav .layui-nav-item .layui-nav-child .layui-this a {\n' +
                '    background-color: ' + bgcolorData.headerRightNavMoreBg + ' !important;\n' +
                '    color:' + bgcolorData.headerRightNavMoreColor + ' !important;\n' +
                '}\n' +
                '\n' +
                '/*头部缩放按钮样式 headerRightToolColor */\n' +
                '.layui-layout-admin .layui-header .layuimini-tool i {\n' +
                '    color: ' + bgcolorData.headerRightToolColor + ';\n' +
                '}\n' +
                '\n' +
                '/*logo背景颜色 headerLogoBg */\n' +
                '.layui-layout-admin .layuimini-logo {\n' +
                '    background-color: ' + bgcolorData.headerLogoBg + ' !important;\n' +
                '}\n' +
                '\n' +
                '/*logo字体颜色 headerLogoColor */\n' +
                '.layui-layout-admin .layuimini-logo h1 {\n' +
                '    color: ' + bgcolorData.headerLogoColor + ';\n' +
                '}\n' +
                '\n' +
                '/*左侧菜单更多下拉样式 leftMenuNavMore */\n' +
                '.layuimini-menu-left .layui-nav .layui-nav-more,.layuimini-menu-left-zoom.layui-nav .layui-nav-more {\n' +
                '    border-top-color: ' + bgcolorData.leftMenuNavMore + ';\n' +
                '}\n' +
                '\n' +
                '/*左侧菜单更多下拉样式 leftMenuNavMore */\n' +
                '.layuimini-menu-left .layui-nav .layui-nav-mored, .layuimini-menu-left .layui-nav-itemed > a .layui-nav-more,   .layuimini-menu-left-zoom.layui-nav .layui-nav-mored, .layuimini-menu-left-zoom.layui-nav-itemed > a .layui-nav-more {\n' +
                '    border-color: transparent transparent  ' + bgcolorData.leftMenuNavMore + ' !important;\n' +
                '}\n' +
                '\n' +
                '/*左侧菜单背景 leftMenuBg */\n' +
                '.layui-side.layui-bg-black, .layui-side.layui-bg-black > .layuimini-menu-left > ul, .layuimini-menu-left-zoom > ul {\n' +
                '    background-color:  ' + bgcolorData.leftMenuBg + ' !important;\n' +
                '}\n' +
                '\n' +
                '/*左侧菜单选中背景 leftMenuBgThis */\n' +
                '.layuimini-menu-left .layui-nav-tree .layui-this, .layuimini-menu-left .layui-nav-tree .layui-this > a, .layuimini-menu-left .layui-nav-tree .layui-nav-child dd.layui-this, .layuimini-menu-left .layui-nav-tree .layui-nav-child dd.layui-this a, .layuimini-menu-left-zoom.layui-nav-tree .layui-this, .layuimini-menu-left-zoom.layui-nav-tree .layui-this > a, .layuimini-menu-left-zoom.layui-nav-tree .layui-nav-child dd.layui-this, .layuimini-menu-left-zoom.layui-nav-tree .layui-nav-child dd.layui-this a {\n' +
                '    background-color: ' + bgcolorData.leftMenuBgThis + ' !important\n' +
                '}\n' +
                '\n' +
                '/*左侧菜单子菜单背景 leftMenuChildBg */\n' +
                '.layuimini-menu-left .layui-nav-itemed > .layui-nav-child{\n' +
                '    background-color: ' + bgcolorData.leftMenuChildBg + ' !important;\n' +
                '}\n' +
                '\n' +
                '/*左侧菜单字体颜色 leftMenuColor */\n' +
                '.layuimini-menu-left .layui-nav .layui-nav-item a, .layuimini-menu-left-zoom.layui-nav .layui-nav-item a {\n' +
                '    color:  ' + bgcolorData.leftMenuColor + ' !important;\n' +
                '}\n' +
                '\n' +
                '/*左侧菜单选中字体颜色 leftMenuColorThis */\n' +
                '.layuimini-menu-left .layui-nav .layui-nav-item a:hover, .layuimini-menu-left .layui-nav .layui-this a, .layuimini-menu-left-zoom.layui-nav .layui-nav-item a:hover, .layuimini-menu-left-zoom.layui-nav .layui-this a {\n' +
                '    color:' + bgcolorData.leftMenuColorThis + ' !important;\n' +
                '}\n' +
                '\n' +
                '/**tab选项卡选中颜色 tabActiveColor */\n' +
                '.layuimini-tab .layui-tab-title .layui-this .layuimini-tab-active {\n' +
                '    background-color: ' + bgcolorData.tabActiveColor + ';\n' +
                '}\n';
            $('#layuimini-bg-color').html(styleHtml);
        }
    };

    exports("miniTheme", miniTheme);

})