module.exports = {
    title: 'L的个人博客',
    description: '笔记分享',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    base: "/",
    // theme: 'reco',
    themeConfig: {
        lastUpdated: '更新时间', // string | boolean
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        nav: [
            { text: '分布式架构', link: '/distributedsystem/' },
            { 
                text: '关于我', 
                items: [
                    { text: 'Github', link: 'https://github.com/yinglin2' }
                ]
            }
        ],
        sidebar:{ 
            "/distributedsystem/": getDistributedSystem()
        }
    }
}

function getDistributedSystem() {
    return [
    {
        title: "分布式系统通信",
        collapsable: true, // 不折叠
        children: ["communication/RPC"]
    }];
}