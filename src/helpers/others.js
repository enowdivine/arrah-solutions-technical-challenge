import React from "react";

// export const onRefresh = React.useCallback(() => {
//   setRefreshing(true);
//   setTimeout(() => {
//     refreshFunction();
//     setRefreshing(false);
//   }, 2000);
// }, []);

export const formatMoney = (amount) => {
  let dollarUSLocale = Intl.NumberFormat("en-US");
  return dollarUSLocale.format(amount);
};
