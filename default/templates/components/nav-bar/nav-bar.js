import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './nav-bar.less';
import view from './nav-bar.stache';

export const ViewModel = DefineMap.extend({
  page: 'string',
  goToSignup () {
    this.page = 'signup';
  }
});

export default Component.extend({
  tag: 'nav-bar',
  ViewModel,
  view
});
