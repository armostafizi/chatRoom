//import ServiceConfiguration from "meteor/service-configuration";

ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: "1022030267906634",
      loginStyle: "popup",
      secret: "cb2d98dd89b61003db8e7c1d9e6ec766"
    }
  }
);


ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: "367014798593-ddbfjuuq7h0bee16fllaog6kuna6jm4d.apps.googleusercontent.com",
      loginStyle: "popup",
      secret: "v7h6oV2L4cUU-wFU7rJ0nEaV"
    }
  }
);


ServiceConfiguration.configurations.upsert(
  { service: "twitter" },
  {
    $set: {
      consumerKey: "IE9SbOqksaPua9vvAxt4H1x6k",
      loginStyle: "popup",
      secret: "62osolXR30TDithpIwKB25YQqaXivYAf2cSRnAcBXTfRxK5Via"
    }
  }
);
