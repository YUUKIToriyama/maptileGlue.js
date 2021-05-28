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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvbWFwdGlsZUdsdWUvbWFwdGlsZUdsdWUvc3JjL01vZGFsTWVudS5qc3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFFQTtBQUVBLE1BQU0sWUFBWSxXQUFXLE1BQU87QUFBQSxFQUNuQyxjQUFjO0FBQUEsSUFDYixVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUE7QUFBQTtBQUlULE1BQU0sWUFBWSxDQUFDLFVBQVU7QUFDNUIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sQ0FBQyxNQUFNLFdBQVcsTUFBTSxTQUFTO0FBQ3ZDLFFBQU0sQ0FBQyxnQkFBZ0IscUJBQXFCLE1BQU0sU0FBUztBQUMzRCxRQUFNLENBQUMsVUFBVSxlQUFlLE1BQU0sU0FBUztBQUUvQyxRQUFNLGtCQUFrQixNQUFNO0FBQzdCLFlBQVE7QUFBQTtBQUdULFFBQU0sY0FBYyxNQUFNO0FBQ3pCLFlBQVE7QUFBQTtBQUdULFNBQ0Msb0NBQUMsT0FBRCxNQUNDLG9DQUFDLEtBQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUFVLGNBQVc7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFpQixXQUFXLFFBQVE7QUFBQSxLQUN6RixvQ0FBQyxVQUFELFFBRUQsb0NBQUMsUUFBRDtBQUFBLElBQ0M7QUFBQSxJQUNBLFNBQVM7QUFBQSxJQUNULG1CQUFnQjtBQUFBLElBQ2hCLG9CQUFpQjtBQUFBLEtBRWpCLG9DQUFDLGFBQUQ7QUFBQSxJQUFhLElBQUc7QUFBQSxLQUFxQixlQUdyQyxvQ0FBQyxlQUFELE1BQ0Msb0NBQUMsWUFBRDtBQUFBLElBQVksU0FBUTtBQUFBLEtBQUssbUJBQ3pCLG9DQUFDLG1CQUFEO0FBQUEsSUFBbUIsSUFBRztBQUFBLEtBQWtDLDhDQUd4RCxvQ0FBQyxXQUFEO0FBQUEsSUFBVyxLQUFLO0FBQUEsS0FDZixvQ0FBQyxXQUFEO0FBQUEsSUFDQyxJQUFHO0FBQUEsSUFDSCxPQUFNO0FBQUEsSUFDTixTQUFRO0FBQUEsSUFDUixVQUFVLENBQUMsVUFBVTtBQUNwQix3QkFBa0IsTUFBTSxPQUFPO0FBQy9CLFlBQU0sYUFBYTtBQUFBO0FBQUEsSUFFcEIsT0FBTyxNQUFNO0FBQUEsSUFDYixZQUFZLE1BQU0sWUFBWSxhQUFhO0FBQUEsTUFFNUMsb0NBQUMsUUFBRDtBQUFBLElBQVEsU0FBUTtBQUFBLElBQVksT0FBTTtBQUFBLElBQVUsT0FBTyxDQUFFLFlBQVk7QUFBQSxJQUFVLFNBQVMsTUFBTSxNQUFNLGFBQWE7QUFBQSxLQUFpQixVQUkvSCxvQ0FBQyxZQUFEO0FBQUEsSUFBWSxTQUFRO0FBQUEsS0FBSyx3QkFDekIsb0NBQUMsbUJBQUQ7QUFBQSxJQUFtQixJQUFHO0FBQUEsS0FBK0IsNEJBR3JELG9DQUFDLFdBQUQ7QUFBQSxJQUFXLEtBQUs7QUFBQSxLQUNmLG9DQUFDLFFBQUQ7QUFBQSxJQUNDLFNBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLFVBQVUsQ0FBQyxVQUFVO0FBQUUsa0JBQVksTUFBTSxPQUFPO0FBQUE7QUFBQSxJQUNoRCxZQUFZO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixJQUFJO0FBQUE7QUFBQSxLQUdMLG9DQUFDLFVBQUQ7QUFBQSxJQUFVLE9BQU07QUFBQSxLQUFhLFNBQzdCLG9DQUFDLFVBQUQ7QUFBQSxJQUFVLE9BQU07QUFBQSxLQUFZLFNBRTdCLG9DQUFDLFFBQUQ7QUFBQSxJQUFRLFNBQVE7QUFBQSxJQUFZLE9BQU07QUFBQSxJQUFVLE9BQU8sQ0FBRSxZQUFZO0FBQUEsSUFBVSxTQUFTLE1BQU0sZUFBZTtBQUFBLEtBQVcsUUFJckgsb0NBQUMsY0FBRDtBQUFBLElBQWMsTUFBSztBQUFBLEtBQW1DLDJCQUV2RCxvQ0FBQyxlQUFELE1BQ0Msb0NBQUMsUUFBRDtBQUFBLElBQVEsU0FBUztBQUFBLElBQWEsT0FBTTtBQUFBLElBQVUsV0FBUztBQUFBLEtBQUM7QUFBQTtBQVE3RCxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
