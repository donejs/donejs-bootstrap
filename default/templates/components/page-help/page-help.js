import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './page-help.less';
import view from './page-help.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the page-help component'
  }
});

export default Component.extend({
  tag: 'page-help',
  ViewModel,
  view
});
