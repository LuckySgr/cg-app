let menuList = [
    {
        id: 1,
        menuIcon: 'location',
        menuName: '测试一',
        children: [
            {
                id: 11,
                menuIcon: 'location',
                menuName: '子目录一',
                menuRoute: 'test1'
            },
            {
                id: 12,
                menuIcon: 'location',
                menuName: '子目录二',
                menuRoute: 'test2'
            },
        ]
    },
    {
        id: 2,
        menuIcon: 'location',
        menuName: '测试二',
        children: [{
            id: 21,
            menuIcon: 'location',
            menuName: '子目录一',
            menuRoute: 'test3'
        }]
    }
]

export {menuList}