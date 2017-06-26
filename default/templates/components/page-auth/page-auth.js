import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './page-auth.less';
import view from './page-auth.stache';

export const ViewModel = DefineMap.extend({
  section: 'string'
});

export default Component.extend({
  tag: 'page-auth',
  ViewModel,
  view
});
