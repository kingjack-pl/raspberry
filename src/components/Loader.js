import React from "react";
import { css } from "react-emotion";
import { PulseLoader } from "react-spinners";

const override = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const sweetLoading = css`
	width: 100%;
	height: 100%;
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	top: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 999;
`;

export default ({ loading }) => {
	if (!loading) {
		return null;
	}

	return (
		<div className={sweetLoading}>
			<PulseLoader
				className={override}
				sizeUnit={"px"}
				size={15}
				color={"#a83a5e"}
				loading={loading}
			/>
		</div>
	);
};
