# ngSubscriptionFilter
Rxjs subscription filter for Angular 1. Much like the | async filter for Angular 2

## Installation
npm and bower coming soon

## Usage

```
angular.module('myModule',['ngSubscription'])
....
//In your component,directive, or controller
$ctrl.subject = new Subject(); //<--- Can be any Rxjs observable
//In your template

{{$ctrl.subject | async ... other filters }}

or
<div ng-repeat="item in $ctrl.subject | async"> as items come into the event stream they will be displayed</div>

```
## Demo
Basic demo https://plnkr.co/mThT29CV0hGqryzuYTXU
