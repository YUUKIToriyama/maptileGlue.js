import React from "../_snowpack/pkg/react.js";
import {
  Button,
  DialogContentText,
  FormGroup,
  TextField,
  Typography,
  Select,
  MenuItem
} from "../_snowpack/pkg/@material-ui/core.js";
import GitHubButton from "../_snowpack/pkg/react-github-btn.js";
import takeScreenshot from "../_snowpack/pkg/leaflet.patchwork.js";
const ModalContent = (props) => {
  const [textfieldValue, setTextfieldValue] = React.useState("");
  const [filetype, setFiletype] = React.useState("image/jpeg");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
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
  }, "Follow @YUUKIToriyama"));
};
export default ModalContent;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvbWFwdGlsZUdsdWUvbWFwdGlsZUdsdWUvc3JjL01vZGFsQ29udGVudC5qc3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFFQSxNQUFNLGVBQWUsQ0FBQyxVQUFVO0FBQy9CLFFBQU0sQ0FBQyxnQkFBZ0IscUJBQXFCLE1BQU0sU0FBUztBQUMzRCxRQUFNLENBQUMsVUFBVSxlQUFlLE1BQU0sU0FBUztBQUMvQyxTQUNDLG9DQUFDLE1BQU0sVUFBUCxNQUNDLG9DQUFDLFlBQUQ7QUFBQSxJQUFZLFNBQVE7QUFBQSxLQUFLLG1CQUN6QixvQ0FBQyxtQkFBRDtBQUFBLElBQW1CLElBQUc7QUFBQSxLQUFrQyw4Q0FHeEQsb0NBQUMsV0FBRDtBQUFBLElBQVcsS0FBSztBQUFBLEtBQ2Ysb0NBQUMsV0FBRDtBQUFBLElBQ0MsSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLElBQ04sU0FBUTtBQUFBLElBQ1IsVUFBVSxDQUFDLFVBQVU7QUFDcEIsd0JBQWtCLE1BQU0sT0FBTztBQUMvQixZQUFNLGFBQWE7QUFBQTtBQUFBLElBRXBCLE9BQU8sTUFBTTtBQUFBLElBQ2IsWUFBWSxNQUFNLFlBQVksYUFBYTtBQUFBLE1BRTVDLG9DQUFDLFFBQUQ7QUFBQSxJQUFRLFNBQVE7QUFBQSxJQUFZLE9BQU07QUFBQSxJQUFVLE9BQU8sQ0FBRSxZQUFZO0FBQUEsSUFBVSxTQUFTLE1BQU0sTUFBTSxhQUFhO0FBQUEsS0FBaUIsVUFJL0gsb0NBQUMsWUFBRDtBQUFBLElBQVksU0FBUTtBQUFBLEtBQUssd0JBQ3pCLG9DQUFDLG1CQUFEO0FBQUEsSUFBbUIsSUFBRztBQUFBLEtBQStCLDRCQUdyRCxvQ0FBQyxXQUFEO0FBQUEsSUFBVyxLQUFLO0FBQUEsS0FDZixvQ0FBQyxRQUFEO0FBQUEsSUFDQyxTQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVLENBQUMsVUFBVTtBQUFFLGtCQUFZLE1BQU0sT0FBTztBQUFBO0FBQUEsSUFDaEQsWUFBWTtBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sSUFBSTtBQUFBO0FBQUEsS0FHTCxvQ0FBQyxVQUFEO0FBQUEsSUFBVSxPQUFNO0FBQUEsS0FBYSxTQUM3QixvQ0FBQyxVQUFEO0FBQUEsSUFBVSxPQUFNO0FBQUEsS0FBWSxTQUU3QixvQ0FBQyxRQUFEO0FBQUEsSUFBUSxTQUFRO0FBQUEsSUFBWSxPQUFNO0FBQUEsSUFBVSxPQUFPLENBQUUsWUFBWTtBQUFBLElBQVUsU0FBUyxNQUFNLGVBQWU7QUFBQSxLQUFXLFFBSXJILG9DQUFDLGNBQUQ7QUFBQSxJQUFjLE1BQUs7QUFBQSxLQUFtQztBQUFBO0FBSXpELGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
