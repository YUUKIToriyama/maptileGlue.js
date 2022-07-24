import React from 'react';
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"

export const ModalMenu = (props) => {
	// モーダルの開閉の状態管理
	const [open, setOpen] = React.useState(false);
	// トランジションを設定
	const Transition = React.forwardRef((props, ref) => {
		return <Slide direction="up" ref={ref} {...props} />;
	});
	// モーダルの開閉関数
	const handleClick = {
		open: () => setOpen(true),
		close: () => setOpen(false)
	};

	return (
		<React.Fragment>
			<div onClick={handleClick.open}>
				{props.triggerElement}
			</div>
			<Dialog
				fullScreen={props.fullScreen}
				scroll={props.scroll}
				TransitionComponent={(props.transition === true) ? Transition : undefined}
				open={open}
				onClose={handleClick.close}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{props.label.title}
				</DialogTitle>
				<DialogContent>
					<DialogContentText
						id='scroll-dialog-description'
						tabIndex={-1}
					>
						{props.children}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClick.close} color="primary" autoFocus>
						{props.label.closeButton}
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}