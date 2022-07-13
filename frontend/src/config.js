const config = {
  // Backend config
  SENTRY_DSN: "https://1426d697b98447659c1f16e412197f1a@o1317971.ingest.sentry.io/6571503",
  STRIPE_KEY: "pk_test_51LIyjMDlWsNPAHMXUeGSjjQlVsPP5scXBEAsQpjOP81EJRZoSZ5xrp1JL3jhq2QHw5OojawsVG2dMQuqYrlzO4aJ00v9LA0ptl",
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;