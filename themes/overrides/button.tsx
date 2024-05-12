// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button() {
  const containedStyle = {
    "&.MuiButton-contained": {
      boxShadow: "0px 1px 3px 0px #00000040",
      background: "#000000",
      color: "#fff",
      borderRadius: "30px",
      textTransform: "capitalize",
      padding: "8px 24px",
      fontSize: "14px",

      "&:hover": {
        background: "#000000",
        color: "#fff",
      },
      "&.Mui-disabled": {
        backgroundColor: "#B8BABE !important",
        color: "#FFFFFF !important",
      },
    },
  };

  const outlinedStyle = {
    "&.MuiButton-outlined": {
      borderRadius: "90px",
      boxShadow: "0px 4px 4px 0px #0000000D",

      border: "1px solid #E6E6E6",
      fontWeight: "400",
      color: "#000",
      fontSize: "15px",
      background: "#fff",
      textTransform: "capitalize",

      "&:hover": { background: "#FDFBF4" },
      "&.Mui-disabled": {
        backgroundColor: "transparent",
        border: "1px solid #BDC5BE !important",
        color: "#BDC5BE !important",
      },
    },
  };

  // const textStyle = {};

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: false,
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: "15px",

          letterSpacing: "0.04em",
          borderRadius: "10px",
          color: "#000",
        },
        contained: {
          ...containedStyle,
        },
        outlined: {
          ...outlinedStyle,
        },
        // text: {
        //   ...textStyle,
        // },
      },
    },
  };
}
