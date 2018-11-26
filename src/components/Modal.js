import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {

	componentWillMount() {
    	document.addEventListener("click", this.handleClick, false);
	}

	componentWillUnmount() {
    	document.addEventListener("click", this.handleClick, false);
	}

	handleClick = e => {
		if(!this.node || this.node.contains(e.target)) {
			return
		}
        this.props.onClose();
	};

    render() {
		const { children, onClose } = this.props;

		return createPortal(
			<div className="modalPortal">
				<div ref={node => this.node = node} className="modalPortal__modal">
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
