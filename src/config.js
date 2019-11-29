export default {
  s3: {
    REGION: 'eu-west-1',
    BUCKET: 'n117-serverless-notes-app-uploads'
  },
  apiGateway: {
    REGION: 'eu-west-1',
    URL: 'https://j2480ebprh.execute-api.eu-west-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'eu-west-1',
    USER_POOL_ID: 'eu-west-1_lcWGak1Zn',
    APP_CLIENT_ID: '3nnun8dsp22tqpi6jnubuekh35',
    IDENTITY_POOL_ID: 'eu-west-1:130db55e-8e34-4f3f-96be-5e967c100a50'
  }
};
