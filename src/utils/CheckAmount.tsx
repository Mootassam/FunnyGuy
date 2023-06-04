class CheckAmoutn {
  static checkAmount(amount, theme) {
    if (["redCross"].includes(theme) && amount >= 1500) {
      return false;
    }
    //   if (theme ==="paytm" && amount >= 105000) {
    //     return false;
    //   }

    return true;
  }

  static checkbank(theme) {
    let amount = [200];

    if (["redCross"].includes(theme)) {
      amount = [200, 800];
      return amount;
    }
    //   if (theme ==="paytm" && amount >= 105000) {
    //     return false;
    //   }
    amount = [200, 800, 1500, 2500];
    return amount;
  }
}

export default CheckAmoutn;
