export default {
    title: 'Welcome Test Site',
    layout: 'horizontal',
    menuCollapse: false,
    menus: [
        { name: 'Home', link: '/', icon: '' },
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
        { name: 'Component', link: '/', icon: 'Setting', submenu: [] },
        { name: 'Control', link: '/', icon: 'Menu', submenu: [] },
    ]
}