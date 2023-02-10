export const util={

              axeInjectAndAxeRun(obj:Object)
              {
                browser.axeInject()
                .axeRun('body',obj)
                return browser;
              },
}


export const rulesExcludeObj = {
  rules: {
      'color-contrast': {
          enabled: false
      },
      'region': {
          enabled: false
      }
  }
};

export const runOnlyObj= {
  runOnly: ['image-alt','page-has-heading-one', 'region','color-contrast',
  'p-as-heading']
};

export const selectorSpecificRules= {
  rules: {
      'color-contrast': {
          enabled: false
      },
      'region': {
          enabled: false
      }
  }
};