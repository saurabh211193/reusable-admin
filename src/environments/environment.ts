// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://13.127.200.252:3001',
  domain: '13.127.200.252:3001',
  awsConfig: {
    accessKeyId: 'AKIAIOUNPIKVUT4QHFPQ',
    secretAccessKey: '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',
    region: 'ap-south-1'
  }
};
