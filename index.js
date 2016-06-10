angular.module('ngSubscription', [])
  .filter('async', [function () {

    function async(input) {
      //Make sure input is an observable.

      //Subscribe to observable.

      //subscribe to error,

      //on complete then shut down subscription and if possible remove stateful flag
    }

    async.$stateful = true;
    return async;

  }]);