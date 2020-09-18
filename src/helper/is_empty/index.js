function is_empty(variable) {
  if (
    typeof variable == 'undefined' ||
    variable == undefined ||
    variable == null ||
    variable == '' ||
    variable.length == 0
  ) {
    return true;
  }
  return false;
}

export default is_empty;
