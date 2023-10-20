export default {
    title: 'Welcome Test Site',
    layout: 'horizontal',
    menuCollapse: false,
    menus: [
        { name: 'Home', link: '/', icon: '', submenu: [] },
        { name: 'Setting', link: '/Setting', icon: 'Setting', submenu: [] },
        {
            name: 'Screen',
            link: '/Default',
            icon: 'Menu',
            submenu: [
                { name: 'Default', link: '/Default', icon: 'Menu', submenu: [] },
                {
                    name: 'Horizontal',
                    link: '/Horizontal',
                    icon: 'Location',
                    submenu: [],
                },
                { name: 'Vertical', link: '/Vertical', icon: 'Setting', submenu: [] },
                { name: 'Horizontal2', link: '/Horizontal2', icon: 'Menu', submenu: [] },
                { name: 'Vertical2', link: '/Vertical2', icon: 'Location', submenu: [] },
                {
                    name: 'Horizontal3',
                    link: '/Horizontal3',
                    icon: 'Setting',
                    submenu: [],
                },
                { name: 'Dashboard', link: '/Dashboard', icon: 'Menu', submenu: [] },
                {
                    name: 'Dashboard1',
                    link: '/Dashboard1',
                    icon: 'Location',
                    submenu: [],
                },
                { name: 'Dashboard2', link: '/Dashboard2', icon: 'Setting', submenu: [] },
                { name: 'Dashboard3', link: '/Dashboard3', icon: 'Menu', submenu: [] },
                { name: 'Dynamic', link: '/Dynamic', icon: 'Location', submenu: [] },
            ],
        },
        { name: 'Component', link: '/', icon: 'Setting', submenu: [
            { name: 'Form', link: '/Form', icon: '', submenu: [] },
            { name: 'List', link: '/List', icon: '', submenu: [] },
            { name: 'ToolbarForm', link: '/ToolbarForm', icon: '', submenu: [] },
            { name: 'ToolbarList', link: '/ToolbarList', icon: '', submenu: [] },
            { name: 'Tabs', link: '/Tabs', icon: '', submenu: [] },
        ] },
        { name: 'Control', link: '/', icon: 'Menu', submenu: [] },
    ],
    tags: [
        { name: 'Form', link: '/Form' },        
        { name: 'ToolbarForm', link: '/ToolbarForm' },
        { name: 'List', link: '/List' },
        { name: 'ToolbarList', link: '/ToolbarList' },
        { name: 'Tabs', link: '/Tabs' }
    ],
    listData: [
        {
          date: '2016-05-08',
          name: 'Tom',
          amount: 8000,
          fixed: 'Fixed',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          amount: 7000,
          fixed: 'Fixed',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          amount: 6000,
          fixed: 'Fixed',
        },
        {
          date: '2016-05-05',
          name: 'Tom',
          amount: 5000,
          fixed: 'Fixed',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          amount: 4000,
          fixed: 'Fixed',
        },
        {
          date: '2016-05-03',
          name: 'Tom',
          amount: 3000,
          fixed: 'Fixed',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          amount: 2000,
          fixed: 'Fixed',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          amount: 1000,
          fixed: 'Fixed',
        },
    ],
    formData: [
        { type: 'text', label: 'text', data: 'text1' },
    ]
}