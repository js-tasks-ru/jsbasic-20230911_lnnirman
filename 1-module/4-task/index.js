function checkSpam(str) {
  str = str.toLowerCase();
  if (str.indexOf('1xbet') == -1 && str.indexOf('xxx') == -1) {
    return false;
  } else {
    return true;
  }

}
