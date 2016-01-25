# confirmation click directive
An angular-ui based directive that replaes ng-click for use-cases where user confirmation is needed prior to calling the click handler.  Ex: deletes, etc.

[View Project Website w/ Demo](http://surgeforward.github.io/angular-confirmation-click/)

Installation:

Just include the script file: confirmationClickDirective.js

1) Add an ng-confirmation-message attribute to the button or link.  Set it's value to a string containing the confirmation message to display upon click.

2) Add an ng-confirmation-click attribute to point to your click handler.  This handler will only get called if the user accepts the confirmation dialog that will appear.

```
<button ng-confirmation-click="Really Rage Quit?" ng-confirmation-click="rageQuit()" class="btn btn btn-default">Rage Quit</button>
```