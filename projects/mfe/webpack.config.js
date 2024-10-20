const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe',
  exposes: {
    './Component': './projects/mfe/src/app/app.component.ts',
    './Bootstrap': './projects/mfe/src/bootstrap.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    'shared-lib': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    }
  },

});
