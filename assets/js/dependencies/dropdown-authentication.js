/**
 * @dropdown-authentication.js A simple navigation dropdown login / registration form for Boostrap.
 * @author Craig van Tonder
 * @version 0.0.0
 */

$(document).ready(function() {

  // Contains information relating to the component element selectors
  var selector = {};
  // Link to reset forgotten password
  selector.promptId = '#promptForgotPassword';
  // Form submission button
  selector.buttonId = '#authButton';
  // Link used to switch between sign in / up states
  selector.element = '#linkSignSwitcher';
  // Tag wrapping value of the element above
  selector.elementInner = '#linkSignSwitcher strong';

  // When the signin/up link was clicked
  $(selector.element).click(function(e) {
    // Get the inner elements value
    selector.elementInnerValue = $(selector.elementInner).text();
    // Open the values storage object
    var values = {};
    // If we are viewing sign in
    if (selector.elementInnerValue == 'Sign In') {
      // Define the new values
      values.prompt = true;
      values.buttonValue = 'Sign In';
      values.linkValue = 'Sign Up';
      // Toggle the selector values
      toggleselector (selector, values);
    }
    // Else we are viewing sign up
    else if (selector.elementInnerValue == 'Sign Up') {
      // Define the new values
      values.prompt = false;
      values.buttonValue = 'Sign Up';
      values.linkValue = 'Sign In';
      // Toggle the selector values
      toggleselector (selector, values);
    }
    // Prevent the modal from closing now
    e.stopPropagation();
  });

  // Toggles values of the components selectors
  function toggleselector (selector, values) {
    // Toggle the forgot password link
    if (values.prompt) {
      // Show it
      $(selector.promptId).show('fast');
    } else {
      // Hide it
      $(selector.promptId).hide('fast');
    }
    // Change the button value
    $(selector.buttonId).text(values.buttonValue);
    // Change the inner elements value
    $(selector.elementInner).text(values.linkValue);
  }

});
