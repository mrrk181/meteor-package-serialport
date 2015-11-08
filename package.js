Package.describe({
  name: 'fourquet:serialport',
  summary: 'serialport npm module wrapped for Meteor.',
  version: '2.0.2_1',
  git: 'https://github.com/fourquet/meteor-package-serialport'
});

Npm.depends({
  'serialport': '2.0.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.export('SerialPort', ['server']);
  api.addFiles('serialport.js', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest', ['client', 'server']);
  api.use('fourquet:serialport', ['server']);
  api.addFiles('serialport-tests.js', ['client', 'server']);
});
