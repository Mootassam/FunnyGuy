class CheckAmoutn {
    static checkAmount(amount, theme) {
      if (
        ["redCross"].includes(theme) &&
        amount >= 1500
      ) {
        return false;
      }
    //   if (theme ==="paytm" && amount >= 105000) {
    //     return false;
    //   }
  
      return true;
    }
  }
  
  export default CheckAmoutn;
  