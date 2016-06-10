import {asyncFilter} from './asyncFilter';

angular.module('ngSubscription', [])
  
  .filter('async', asyncFilter);