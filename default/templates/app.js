import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import Session from '~/models/session';
// Uncomment this line if you don't have a Feathers Server running, but want to test auth.
// import '~/models/fixtures/';

window.route = route;

const AppViewModel = DefineMap.extend({

  /**
   * Make it so viewModel attributes will not be serialized automatically into
   * the URL as route attributes.
   */
  '*': {
    serialize: false
  },

  /**
   * Session.current is provided by the can-connect-feathers session behavior.
   * It will automatically populate when `new Session().save()` occurs in the app
   * or on refresh after login.
   */
  session: {
    get () {
      return Session.current;
    }
  },

  logout () {
    return Session.current.destroy();
  },

  message: {
    value: 'Hello World!'
  },

  page: {
    type: 'string',
    serialize: true
  },

  section: {
    type: 'string',
    serialize: true
  },

  /**
   * The `title` attribute is used in index.stache as the HTML title.
   */
  title: {
    value: '<%= pkgName %>'
  }
});

route('/login', {page: 'auth', section: 'login'});
route('/signup', {page: 'auth', section: 'signup'});
route('/{page}', {page: 'home'});

export default AppViewModel;
