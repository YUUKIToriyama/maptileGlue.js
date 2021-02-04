import React from "../_snowpack/pkg/react.js";
import {makeStyles} from "../_snowpack/pkg/@material-ui/core/styles.js";
import {
  Fab,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormGroup,
  TextField,
  Typography,
  Select,
  MenuItem
} from "../_snowpack/pkg/@material-ui/core.js";
import EditIcon from "../_snowpack/pkg/@material-ui/icons/Edit.js";
import GitHubButton from "../_snowpack/pkg/react-github-btn.js";
import takeScreenshot from "./screenShot.js";
const useStyles = makeStyles(() => ({
  actionButton: {
    position: "fixed",
    zIndex: 1e3,
    bottom: 70,
    right: 50
  }
}));
const ModalMenu = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [textfieldValue, setTextfieldValue] = React.useState("");
  const [filetype, setFiletype] = React.useState("image/jpeg");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Fab, {
    color: "primary",
    "aria-label": "open modal",
    onClick: handleClickOpen,
    className: classes.actionButton
  }, /* @__PURE__ */ React.createElement(EditIcon, null)), /* @__PURE__ */ React.createElement(Dialog, {
    open,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /* @__PURE__ */ React.createElement(DialogTitle, {
    id: "alert-dialog-title"
  }, "How to use"), /* @__PURE__ */ React.createElement(DialogContent, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h5"
  }, "1. \u30DE\u30C3\u30D7\u30BF\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u3080"), /* @__PURE__ */ React.createElement(DialogContentText, {
    id: "description-for-loading-maptile"
  }, "\u30DE\u30C3\u30D7\u30BF\u30A4\u30EB\u306EURL\u3092\u5165\u529B\u3057\u3066\u8AAD\u307F\u8FBC\u307F\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u3001\u8868\u793A\u3055\u308C\u308B\u5730\u56F3\u304C\u5909\u308F\u308A\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement(FormGroup, {
    row: true
  }, /* @__PURE__ */ React.createElement(TextField, {
    id: "maptileURL",
    label: "URL",
    variant: "outlined",
    onChange: (event) => {
      setTextfieldValue(event.target.value);
      props.setErrorflag(false);
    },
    error: props.errorflag,
    helperText: props.errorflag ? "\u5165\u529B\u5024\u304C\u4E0D\u6B63\u3067\u3059" : false
  }), /* @__PURE__ */ React.createElement(Button, {
    variant: "contained",
    color: "primary",
    style: {marginLeft: "10px"},
    onClick: () => props.setTilelayer(textfieldValue)
  }, "\u8AAD\u307F\u8FBC\u307F")), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h5"
  }, "2. \u5730\u56F3\u3092\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u4FDD\u5B58\u3059\u308B"), /* @__PURE__ */ React.createElement(DialogContentText, {
    id: "description-for-saving-image"
  }, "\u4FDD\u5B58\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement(FormGroup, {
    row: true
  }, /* @__PURE__ */ React.createElement(Select, {
    variant: "outlined",
    value: filetype,
    onChange: (event) => {
      setFiletype(event.target.value);
    },
    inputProps: {
      name: "filetype",
      id: "filetype"
    }
  }, /* @__PURE__ */ React.createElement(MenuItem, {
    value: "image/jpeg"
  }, "JPEG"), /* @__PURE__ */ React.createElement(MenuItem, {
    value: "image/png"
  }, "PNG")), /* @__PURE__ */ React.createElement(Button, {
    variant: "contained",
    color: "primary",
    style: {marginLeft: "10px"},
    onClick: () => takeScreenshot(filetype)
  }, "\u4FDD\u5B58")), /* @__PURE__ */ React.createElement(GitHubButton, {
    href: "https://github.com/YUUKIToriyama"
  }, "Follow @YUUKIToriyama")), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: handleClose,
    color: "primary",
    autoFocus: true
  }, "\u9589\u3058\u308B"))));
};
export default ModalMenu;
//# sourceMappingURL=ModalMenu.js.map
