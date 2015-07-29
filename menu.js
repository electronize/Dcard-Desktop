var remote = require('remote');
var Menu = remote.require('menu');
var template = [
  {
    label: 'Dcard for Desktop',
    submenu: [
      { label: 'About Dcard for Desktop', selector: 'orderFrontStandardAboutPanel:' },
      { type: 'separator' },
      { label: 'Services', submenu: [] },
      { type: 'separator' },
      { label: 'Hide Dcard for Desktop', accelerator: 'Command+H', selector: 'hide:' },
      { label: 'Hide Others', accelerator: 'Command+Shift+H', selector: 'hideOtherApplications:' },
      { label: 'Show All', selector: 'unhideAllApplications:' },
      { type: 'separator' },
      { label: 'Quit', accelerator: 'Command+Q', selector: 'terminate:'}
    ],
  },
  {
  label: 'View',
  submenu: [
    {
      label: 'Reload',
      accelerator: 'Command+R',
      click: function() { remote.getCurrentWindow().reload(); }
    },
    {
      label: 'Toggle DevTools',
      accelerator: 'Alt+Command+I',
      click: function() { remote.getCurrentWindow().toggleDevTools(); }
    },
  ],
},
];

menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);
