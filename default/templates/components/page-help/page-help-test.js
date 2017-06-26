import QUnit from 'steal-qunit';
import { ViewModel } from './page-help';

// ViewModel unit tests
QUnit.module('<%= pkgName %>/components/page-help');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the page-help component');
});
