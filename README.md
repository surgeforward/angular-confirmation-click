# confirmation click directive
An angular-ui based directive that replaces ng-click for use-cases where user confirmation is needed prior to calling the click handler.  Ex: deletes, etc.

Installation:

Add a reference to ng-confirmation-click in app.js

```
var app = angular.module('myApp', [..., 'ng-confirmation-click'])
```


1) Add an ng-confirmation-message attribute to the button or link.  Set it's value to a string containing the confirmation message to display upon click.

2) Add an ng-confirmation-click attribute to point to your click handler.  This handler will only get called if the user accepts the confirmation dialog that will appear.

```
<button ng-confirmation-click="Really Rage Quit?" ng-confirmation-click="rageQuit()" class="btn btn btn-default">Rage Quit</button>
```