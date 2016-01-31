# confirmation click directive
An angular-ui based directive that replaces ng-click for use-cases where user confirmation is needed prior to calling the click handler.  Ex: deletes, etc.

## Installation:


Include the confirmationClickDirective.js script in your project.  It's defined in module 'app' which it assumes will exist.


1) Add an ng-confirmation-message attribute to the button or link.  Set it's value to a string containing the confirmation message to display upon click.

2) Add an ng-confirmation-click attribute to point to your click handler.  This handler will only get called if the user accepts the confirmation dialog that will appear.

3) Optionally add an ng-confirmation-title attribute to set the dialog header content

4) Optionally add an ng-confirmation-cancel-click attribute to respond to dialog cancellations


```
<button ng-confirmation-click="rageQuit()" 
		ng-confirmation-message="Really rage quit?" 
		ng-confirmation-title="Decision time"
		ng-confirmation-cancel-click="dontRageQuit()"
		class="btn btn-danger">Rage quit</button>
```

## Options


- `ng-confirmation-click`: callback function to execute if user accepts confirmation dialog
- `ng-confirmation-message`: confirmation message to display in dialog
- `ng-confirmation-title`: (optional) title of confirmation dialog box
- `ng-confirmation-cancel-click`: (optional) callback function to execute if user cancels confirmation dialog
