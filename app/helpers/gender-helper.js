import Ember from 'ember';

export function genderHelper(params) {
  var gender = params[0].gender;

  if (gender === 'M') {
    return Ember.String.htmlSafe("<i class=\"fa fa-mars\" aria-hidden=\"true\"></i>");
  } else {
    return Ember.String.htmlSafe("<i class=\"fa fa-venus\" aria-hidden=\"true\"></i>");
  }
}

export default Ember.Helper.helper(genderHelper);
