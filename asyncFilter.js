module.exports = ['$timeout', function ($timeout) {

  let subscriptions = {};
  let dataCache = {};

  function async(input, name) {
    if (!name) throw new Error('Async filter needs a name for the Observable subscription');
    //Throw if not observavble
    if (!('subscribe' in input)) throw new Error('Filter input is not and Observable');
    //Setup subscription if we don't have one on file
    if (!(name in subscriptions)) {
      //Make sure input is an observable.
      subscriptions[name] = input.subscribe(
        //Subscribe to observable
        function (data) {
          $timeout(function () {
            dataCache[name] = data;
          });
        },
        //Subscribe to error
        function (error) {
          throw new Error(error);
        },
        //Subscribe to complete
        function () {
          //subscription complete TODO
        });
      //on complete then shut down subscription and if possible remove stateful flag
    } else {
      return dataCache[name];
    }
  }

  async.$stateful = true;
  return async;

}];
