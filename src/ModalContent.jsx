import React from 'react';
import {
	Button,
	DialogContentText,
	FormGroup,
	TextField,
	Typography,
	Select,
	MenuItem
} from "@material-ui/core";

import GitHubButton from "react-github-btn";
import takeScreenshot from "leaflet.patchwork";

const ModalContent = (props) => {
	const [textfieldValue, setTextfieldValue] = React.useState("");
	const [filetype, setFiletype] = React.useState("image/jpeg");
	return (
		<React.Fragment>
			<Typography variant="h5">1. マップタイルを読み込む</Typography>
			<DialogContentText id="description-for-loading-maptile">
				マップタイルのURLを入力して読み込みボタンを押すと、表示される地図が変わります。
			</DialogContentText>
			<FormGroup row={true}>
				<TextField
					id="maptileURL"
					label="URL"
					variant="outlined"
					onChange={(event) => {
						setTextfieldValue(event.target.value);
						props.setErrorflag(false);
					}}
					error={props.errorflag}
					helperText={props.errorflag ? "入力値が不正です" : false}
				/>
				<Button variant="contained" color="primary" style={{ marginLeft: "10px" }} onClick={() => props.setTilelayer(textfieldValue)}>
					読み込み
				</Button>
			</FormGroup>
			<Typography variant="h5">2. 地図を画像ファイルとして保存する</Typography>
			<DialogContentText id="description-for-saving-image">
				保存ボタンを押すと画像ファイルを保存できます。
			</DialogContentText>
			<FormGroup row={true}>
				<Select
					variant="outlined"
					value={filetype}
					onChange={(event) => { setFiletype(event.target.value) }}
					inputProps={{
						name: 'filetype',
						id: 'filetype',
					}}
				>
					<MenuItem value="image/jpeg">JPEG</MenuItem>
					<MenuItem value="image/png">PNG</MenuItem>
				</Select>
				<Button variant="contained" color="primary" style={{ marginLeft: "10px" }} onClick={() => takeScreenshot(filetype)}>
					保存
				</Button>
			</FormGroup>
			<GitHubButton href="https://github.com/YUUKIToriyama">Follow @YUUKIToriyama</GitHubButton>
		</React.Fragment>
	)
}
export default ModalContent;