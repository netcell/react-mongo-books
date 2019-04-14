import { css } from 'styled-components';

export const styleBookItemWrapper = css`
	padding: 5px;
	box-sizing: border-box;
	&:hover {
		box-shadow: 0 0 20px rgba(0,0,0,.1);
		z-index: 1;
	}
`;

export const styleBookItemImageWrapper = css`
	text-align: center;
	height: 200px;
	overflow: hidden;
	img {
		height: 200px;
	}
`;

export const styleBookInfoWrapper = css`
	text-align: left;
	box-sizing: border-box;
	padding: 20px;
`

export const styleBookTitle = css`
	font-size: 18px;
`;

export const styleAuthorTitle = css`
	font-size: 14px;
`;