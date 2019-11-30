const dev = {
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

const prod = {
  STRIPE_KEY: 'pk_test_tHrq4wGpXuzsyVLb2Ptglomb00ZueadHzK',
  s3: {
    REGION: 'eu-west-1',
    BUCKET: 'notes-app-api-prod-attachmentsbucket-a6qe1i20s6t6'
  },
  apiGateway: {
    REGION: 'eu-west-1',
    URL: 'https://xqic6hby37.execute-api.eu-west-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'eu-west-1',
    USER_POOL_ID: 'eu-west-1_GMresltya',
    APP_CLIENT_ID: '5lv6ldfkvn0bokjq2rnh3krtfi',
    IDENTITY_POOL_ID: 'eu-west-1:cdad69da-beb2-48fd-b736-f3199e4ff112'
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
