module.exports = context => {
  const { petriScopes } = context.config.load('kyiv-rn-workshop-server');
  return {
    petriScopes,
  };
};
