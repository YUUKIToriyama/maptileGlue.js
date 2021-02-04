/* ModalMenu.jsx */

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
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
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import GitHubButton from "react-github-btn";

import takeScreenshot from "./screenShot";

const useStyles = makeStyles(() => ({
	actionButton: {
		position: 'fixed',
		zIndex: 1000, //Leafletよりも上に表示しなければならない
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

	return (
		<div>
			<Fab color="primary" aria-label="open modal" onClick={handleClickOpen} className={classes.actionButton}>
				<EditIcon />
			</Fab>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					How to use
				</DialogTitle>
				<DialogContent>
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
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>
						閉じる
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
export default ModalMenu;