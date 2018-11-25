import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
	render() {
		const { children, onClose } = this.props;

		return createPortal(
			<div className="modalPortal">
				<div className="modalPortal__modal">
					{children}
					<button
						className="btnDefault btnDefault--pink"
						onClick={onClose}
					>
						CLOSE
					</button>
				</div>
			</div>,
			modalRoot
		);
	}
}

export default Modal;
