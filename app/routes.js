const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/Subscribe',
       name: '',
       getComponent(nextState, comMod) {
         import('containers/Subscribe')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
      {
       path: '/Account',
       name: 'account',
       getComponent(nextState, comMod) {
         import('containers/Account')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
      {
       path: '/Cart',
       name: 'cart',
       getComponent(nextState, comMod) {
         import('containers/Cart')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
      {
       path: '/Checkout',
       name: 'checkout',
       getComponent(nextState, comMod) {
         import('containers/Checkout')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
      {
       path: '/Contact',
       name: 'contact',
       getComponent(nextState, comMod) {
         import('containers/Contact')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
      {
       path: '/Faq',
       name: 'faq',
       getComponent(nextState, comMod) {
         import('containers/Faq')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
      {
       path: '/About',
       name: 'about',
       getComponent(nextState, comMod) {
         import('containers/About')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
      {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
