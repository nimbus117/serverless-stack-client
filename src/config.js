export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: 'pk_test_tHrq4wGpXuzsyVLb2Ptglomb00ZueadHzK',
  s3: {
    REGION: 'eu-west-1',
    BUCKET: 'notes-app-api-dev-attachmentsbucket-1q0clb241bo7s'
  },
  apiGateway: {
    REGION: 'eu-west-1',
    URL: 'https://u48hcugfie.execute-api.eu-west-1.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'eu-west-1',
    USER_POOL_ID: 'eu-west-1_yd120jnfn',
    APP_CLIENT_ID: '360guga9uttidrqk0qt8s79k0p',
    IDENTITY_POOL_ID: 'eu-west-1:52d5a9f1-6d47-4353-ae32-0bb172fe55f9'
  }
};
