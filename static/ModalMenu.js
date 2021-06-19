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
import takeScreenshot from "../_snowpack/pkg/leaflet.patchwork.js";
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Fab, {
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
  }, "1. マップタイルを読み込む"), /* @__PURE__ */ React.createElement(DialogContentText, {
    id: "description-for-loading-maptile"
  }, "マップタイルのURLを入力して読み込みボタンを押すと、表示される地図が変わります。"), /* @__PURE__ */ React.createElement(FormGroup, {
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
    helperText: props.errorflag ? "入力値が不正です" : false
  }), /* @__PURE__ */ React.createElement(Button, {
    variant: "contained",
    color: "primary",
    style: {marginLeft: "10px"},
    onClick: () => props.setTilelayer(textfieldValue)
  }, "読み込み")), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h5"
  }, "2. 地図を画像ファイルとして保存する"), /* @__PURE__ */ React.createElement(DialogContentText, {
    id: "description-for-saving-image"
  }, "保存ボタンを押すと画像ファイルを保存できます。"), /* @__PURE__ */ React.createElement(FormGroup, {
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
  }, "保存")), /* @__PURE__ */ React.createElement(GitHubButton, {
    href: "https://github.com/YUUKIToriyama"
  }, "Follow @YUUKIToriyama")), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: handleClose,
    color: "primary",
    autoFocus: true
  }, "閉じる"))));
};
export default ModalMenu;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvbWFwdGlsZUdsdWUvbWFwdGlsZUdsdWUvc3JjL01vZGFsTWVudS5qc3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFHQTtBQUVBLE1BQU0sWUFBWSxXQUFXLE1BQU87QUFBQSxFQUNuQyxjQUFjO0FBQUEsSUFDYixVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUE7QUFBQTtBQUlULE1BQU0sWUFBWSxDQUFDLFVBQVU7QUFDNUIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sQ0FBQyxNQUFNLFdBQVcsTUFBTSxTQUFTO0FBQ3ZDLFFBQU0sQ0FBQyxnQkFBZ0IscUJBQXFCLE1BQU0sU0FBUztBQUMzRCxRQUFNLENBQUMsVUFBVSxlQUFlLE1BQU0sU0FBUztBQUUvQyxRQUFNLGtCQUFrQixNQUFNO0FBQzdCLFlBQVE7QUFBQTtBQUdULFFBQU0sY0FBYyxNQUFNO0FBQ3pCLFlBQVE7QUFBQTtBQUdULFNBQ0Msb0NBQUMsTUFBTSxVQUFQLE1BQ0Msb0NBQUMsS0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQVUsY0FBVztBQUFBLElBQWEsU0FBUztBQUFBLElBQWlCLFdBQVcsUUFBUTtBQUFBLEtBQ3pGLG9DQUFDLFVBQUQsUUFFRCxvQ0FBQyxRQUFEO0FBQUEsSUFDQztBQUFBLElBQ0EsU0FBUztBQUFBLElBQ1QsbUJBQWdCO0FBQUEsSUFDaEIsb0JBQWlCO0FBQUEsS0FFakIsb0NBQUMsYUFBRDtBQUFBLElBQWEsSUFBRztBQUFBLEtBQXFCLGVBR3JDLG9DQUFDLGVBQUQsTUFDQyxvQ0FBQyxZQUFEO0FBQUEsSUFBWSxTQUFRO0FBQUEsS0FBSyxtQkFDekIsb0NBQUMsbUJBQUQ7QUFBQSxJQUFtQixJQUFHO0FBQUEsS0FBa0MsOENBR3hELG9DQUFDLFdBQUQ7QUFBQSxJQUFXLEtBQUs7QUFBQSxLQUNmLG9DQUFDLFdBQUQ7QUFBQSxJQUNDLElBQUc7QUFBQSxJQUNILE9BQU07QUFBQSxJQUNOLFNBQVE7QUFBQSxJQUNSLFVBQVUsQ0FBQyxVQUFVO0FBQ3BCLHdCQUFrQixNQUFNLE9BQU87QUFDL0IsWUFBTSxhQUFhO0FBQUE7QUFBQSxJQUVwQixPQUFPLE1BQU07QUFBQSxJQUNiLFlBQVksTUFBTSxZQUFZLGFBQWE7QUFBQSxNQUU1QyxvQ0FBQyxRQUFEO0FBQUEsSUFBUSxTQUFRO0FBQUEsSUFBWSxPQUFNO0FBQUEsSUFBVSxPQUFPLENBQUUsWUFBWTtBQUFBLElBQVUsU0FBUyxNQUFNLE1BQU0sYUFBYTtBQUFBLEtBQWlCLFVBSS9ILG9DQUFDLFlBQUQ7QUFBQSxJQUFZLFNBQVE7QUFBQSxLQUFLLHdCQUN6QixvQ0FBQyxtQkFBRDtBQUFBLElBQW1CLElBQUc7QUFBQSxLQUErQiw0QkFHckQsb0NBQUMsV0FBRDtBQUFBLElBQVcsS0FBSztBQUFBLEtBQ2Ysb0NBQUMsUUFBRDtBQUFBLElBQ0MsU0FBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsVUFBVSxDQUFDLFVBQVU7QUFBRSxrQkFBWSxNQUFNLE9BQU87QUFBQTtBQUFBLElBQ2hELFlBQVk7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQTtBQUFBLEtBR0wsb0NBQUMsVUFBRDtBQUFBLElBQVUsT0FBTTtBQUFBLEtBQWEsU0FDN0Isb0NBQUMsVUFBRDtBQUFBLElBQVUsT0FBTTtBQUFBLEtBQVksU0FFN0Isb0NBQUMsUUFBRDtBQUFBLElBQVEsU0FBUTtBQUFBLElBQVksT0FBTTtBQUFBLElBQVUsT0FBTyxDQUFFLFlBQVk7QUFBQSxJQUFVLFNBQVMsTUFBTSxlQUFlO0FBQUEsS0FBVyxRQUlySCxvQ0FBQyxjQUFEO0FBQUEsSUFBYyxNQUFLO0FBQUEsS0FBbUMsMkJBRXZELG9DQUFDLGVBQUQsTUFDQyxvQ0FBQyxRQUFEO0FBQUEsSUFBUSxTQUFTO0FBQUEsSUFBYSxPQUFNO0FBQUEsSUFBVSxXQUFTO0FBQUEsS0FBQztBQUFBO0FBUTdELGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
