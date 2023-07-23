interface props {
	width?: string;
	height?: string;
	primary?: string;
	secondary?: string;
	third?: string;
}

export default function Logo({
	width = '200',
	height = '50',
	primary = '#0878BA',
	secondary = '#2389CB',
	third = '#3C99D6',
}: props) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 200 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M50.7903 46.2837C50.6013 46.1806 50.4639 46.0375 50.3666 45.8599C38.8916 25.2576 32.4555 13.754 32.4555 13.754C35.1295 7.66718 36.4637 4.62665 36.4637 4.62665C36.6527 4.26018 36.9504 4.01969 37.3512 3.90517C37.6375 3.72766 38.1701 3.80782 38.9488 4.14566C40.5922 7.80461 41.4167 9.63122 41.4167 9.63122C51.0136 31.0753 56.5106 42.9969 56.5106 42.9969C56.8256 43.81 56.8943 44.2796 56.7053 44.4113C56.6309 44.6117 56.3789 44.7892 55.9495 44.9323C53.0063 45.9115 51.5347 46.3982 51.5347 46.3982C51.2541 46.4326 51.0079 46.3925 50.7903 46.2837Z"
				fill={primary}
				stroke={primary}
				stroke-width="0.199839"
				stroke-miterlimit="22.9256"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M32.5185 36.515C32.6444 36.2803 32.7074 36.1657 32.7074 36.1657C44.2454 16.3021 51.3858 3.66467 51.3858 3.66467C51.5404 3.28103 51.7809 3.04053 52.1187 2.94319C52.3363 2.86302 52.6112 2.84012 52.9376 2.86875C55.2051 3.6704 56.7568 4.23728 57.5871 4.57511C57.8791 4.71827 58.028 4.9015 58.0223 5.13627C58.0738 5.31377 58.0624 5.49701 57.9822 5.69169C57.255 7.28926 56.8885 8.09091 56.8885 8.09091C48.5342 25.9333 42.9857 37.5572 42.9857 37.5572C40.2143 43.3519 38.8286 46.2493 38.8286 46.2493C38.4907 46.5184 38.1014 46.6501 37.6719 46.6444C37.042 46.57 36.6011 46.2436 36.3435 45.6595C33.7954 39.567 32.5185 36.515 32.5185 36.515Z"
				fill={secondary}
				stroke={secondary}
				stroke-width="0.199839"
				stroke-miterlimit="22.9256"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M25.5785 41.5139C25.4468 41.3535 25.3552 41.1302 25.3036 40.8497V10.4901C25.2063 9.72283 25.4124 9.08724 25.9335 8.58908C26.0767 8.39439 26.8898 7.95921 28.3556 7.28354C33.7667 4.58657 36.4752 3.23522 36.4752 3.23522C37.105 2.89165 37.8838 3.20659 38.4163 3.60741C38.6568 3.78492 38.8744 4.00251 38.9488 4.14566C38.8858 4.10558 38.7999 4.02541 38.6682 3.96243C38.4907 3.87654 38.2674 3.825 38.1644 3.825C37.8093 3.825 37.5918 4.29454 37.5459 4.59802C37.4944 4.97021 37.5345 5.38249 37.5345 5.76613C37.5574 32.4037 37.5688 45.7225 37.5688 45.7225C37.5803 45.8485 37.5746 45.9401 37.6719 46.0489C37.8781 46.2837 38.2846 46.4784 38.5995 46.3467C38.7198 46.3009 38.8114 46.2321 38.8515 46.215C38.7484 46.4841 38.3991 46.7131 38.0613 46.9078C37.8151 47.051 37.4429 47.0796 37.2825 47.091C36.7787 47.1082 36.3778 47.0395 36.0858 46.8735C33.5721 45.6424 32.3123 45.0239 32.3123 45.0239C28.3785 43.1401 26.4145 42.201 26.4145 42.201C26.0309 42.0407 25.7503 41.8174 25.5785 41.5139Z"
				fill={third}
				stroke={third}
				stroke-width="0.199839"
				stroke-miterlimit="22.9256"
			/>
			<path
				d="M67.4989 35.3641L67.4073 33.4401C67.0981 33.7665 66.7717 34.0643 66.4339 34.3391C66.096 34.6197 65.7238 34.8545 65.3173 35.0606C64.905 35.2553 64.4641 35.4156 63.9831 35.5244C63.5021 35.6389 62.9811 35.6905 62.4084 35.6905C61.6526 35.6905 60.9884 35.5817 60.4158 35.3584C59.8489 35.1351 59.3679 34.8258 58.9785 34.4308C58.5892 34.0299 58.2971 33.5547 58.0967 32.9992C57.902 32.4381 57.799 31.8197 57.799 31.1383C57.799 30.4454 57.9479 29.7984 58.2399 29.2086C58.5376 28.6188 58.99 28.1149 59.597 27.6912C60.2039 27.2617 60.9598 26.9296 61.8645 26.6891C62.7692 26.4486 63.8285 26.3284 65.0539 26.3284H66.9893V25.4408C66.9893 25.0629 66.932 24.7194 66.829 24.4159C66.7202 24.1067 66.5541 23.849 66.3136 23.6371C66.0731 23.4253 65.7696 23.2592 65.3917 23.139C65.0138 23.0245 64.55 22.9672 64.0003 22.9672C63.1299 22.9672 62.2653 23.0645 61.4236 23.2649C60.5761 23.4654 59.7516 23.7402 58.9614 24.0952V21.2723C59.6714 20.9917 60.4788 20.7569 61.4007 20.568C62.3283 20.3847 63.2903 20.2931 64.2866 20.2931C65.3745 20.2931 66.3193 20.3962 67.1038 20.6023C67.8826 20.8142 68.5296 21.1234 69.0392 21.5414C69.5431 21.9594 69.921 22.4748 70.1615 23.0989C70.4077 23.723 70.528 24.456 70.528 25.2862V35.3641H67.4989ZM66.9893 28.8536H64.8191C64.2179 28.8536 63.7083 28.9166 63.2903 29.0254C62.8723 29.1456 62.5402 29.3059 62.2768 29.5063C62.0134 29.7125 61.8187 29.9415 61.6984 30.2049C61.5782 30.474 61.5152 30.7546 61.5152 31.0581C61.5152 31.6536 61.7099 32.1174 62.0992 32.4266C62.4886 32.7416 63.0154 32.8962 63.6854 32.8962C64.1778 32.8962 64.6931 32.7187 65.2257 32.3636C65.7582 32.0029 66.348 31.4876 66.9893 30.8291V28.8536ZM86.7556 35.2152C86.1143 35.3584 85.473 35.4729 84.8202 35.5645C84.1732 35.6504 83.5605 35.6905 82.9764 35.6905C82.0145 35.6905 81.1727 35.5931 80.4741 35.3927C79.7698 35.1866 79.1915 34.8774 78.7334 34.4594C78.2696 34.0414 77.9318 33.5146 77.7142 32.8733C77.4966 32.2262 77.3878 31.4647 77.3878 30.5714V23.3852H73.4368V20.6195H77.3878V16.8403L81.0181 15.8898V20.6195H86.7556V23.3852H81.0181V30.3137C81.0181 31.1612 81.2071 31.791 81.5965 32.2262C81.9801 32.6557 82.6329 32.8675 83.5433 32.8675C84.1216 32.8675 84.6942 32.816 85.2439 32.7244C85.7936 32.627 86.2975 32.5182 86.7556 32.3923V35.2152ZM100.424 26.357C100.447 25.8073 100.418 25.3378 100.344 24.9484C100.269 24.5648 100.16 24.2384 100 23.9864C99.8339 23.7402 99.645 23.557 99.4102 23.4367C99.1754 23.3222 98.912 23.2649 98.6143 23.2649C98.0932 23.2649 97.5492 23.4825 96.9938 23.912C96.4441 24.3472 95.8314 25.0629 95.1615 26.0593V35.3641H91.5369V20.6195H94.7435L94.8694 22.7897C95.1157 22.406 95.3848 22.0682 95.694 21.759C95.9975 21.4555 96.3353 21.1921 96.7075 20.9745C97.0797 20.7512 97.4977 20.5852 97.9501 20.4706C98.4081 20.3504 98.9063 20.2931 99.4503 20.2931C100.195 20.2931 100.853 20.4191 101.431 20.6768C102.004 20.9344 102.491 21.3124 102.886 21.8163C103.275 22.3259 103.567 22.9557 103.756 23.7173C103.945 24.4789 104.025 25.355 103.991 26.357H100.424ZM115.97 16.5826C115.97 16.9033 115.913 17.2068 115.798 17.4816C115.678 17.7622 115.518 18.0142 115.311 18.2203C115.1 18.4264 114.853 18.5925 114.573 18.7127C114.292 18.833 113.989 18.896 113.662 18.896C113.33 18.896 113.021 18.833 112.735 18.7127C112.448 18.5925 112.202 18.4264 111.996 18.2203C111.784 18.0142 111.624 17.7622 111.504 17.4816C111.389 17.2068 111.332 16.9033 111.332 16.5826C111.332 16.262 111.389 15.9585 111.504 15.6837C111.624 15.4031 111.784 15.1511 111.996 14.9393C112.202 14.7274 112.448 14.5556 112.735 14.4411C113.021 14.3151 113.33 14.2579 113.662 14.2579C113.989 14.2579 114.292 14.3151 114.573 14.4411C114.853 14.5556 115.1 14.7274 115.311 14.9393C115.518 15.1511 115.678 15.4031 115.798 15.6837C115.913 15.9585 115.97 16.262 115.97 16.5826ZM112.048 23.3852H107.885V20.6195H115.672V32.5984H119.927V35.3641H107.375V32.5984H112.048V23.3852ZM136.481 26.8552C136.481 27.0957 136.475 27.4049 136.458 27.7943C136.446 28.1779 136.418 28.5444 136.389 28.8822H126.701C126.701 29.535 126.798 30.1019 126.993 30.6C127.193 31.0925 127.474 31.5105 127.84 31.8426C128.201 32.1804 128.636 32.4324 129.14 32.6041C129.649 32.7759 130.211 32.8675 130.829 32.8675C131.551 32.8675 132.312 32.816 133.131 32.7015C133.95 32.5927 134.797 32.4095 135.679 32.1518V34.9805C135.301 35.0835 134.889 35.1751 134.442 35.2668C133.996 35.3526 133.543 35.4271 133.079 35.4958C132.616 35.5588 132.146 35.6103 131.671 35.6447C131.196 35.679 130.743 35.6905 130.297 35.6905C129.174 35.6905 128.172 35.5359 127.279 35.2095C126.391 34.8946 125.63 34.425 125.011 33.8009C124.393 33.1767 123.923 32.4037 123.597 31.4818C123.265 30.5657 123.099 29.5006 123.099 28.2867C123.099 27.09 123.265 26.002 123.597 25.0114C123.923 24.0322 124.387 23.1905 124.988 22.4919C125.59 21.7876 126.317 21.2494 127.17 20.8657C128.023 20.4821 128.98 20.2931 130.039 20.2931C131.081 20.2931 132.003 20.4535 132.81 20.7798C133.612 21.1062 134.282 21.5529 134.826 22.1369C135.364 22.7152 135.776 23.4081 136.057 24.2097C136.343 25.0114 136.481 25.8932 136.481 26.8552ZM132.885 26.357C132.89 25.7787 132.816 25.2691 132.661 24.8339C132.513 24.4044 132.295 24.0494 132.037 23.7631C131.768 23.4883 131.453 23.2821 131.104 23.139C130.749 23.0073 130.371 22.9386 129.964 22.9386C129.071 22.9386 128.344 23.2363 127.771 23.8318C127.204 24.4273 126.861 25.2691 126.758 26.357H132.885ZM144.738 17.6133H140.575V14.8534H148.368V32.5984H152.617V35.3641H140.071V32.5984H144.738V17.6133Z"
				fill={secondary}
				stroke={secondary}
				stroke-width="0.0699437"
				stroke-miterlimit="22.9256"
			/>
			<path
				d="M15.9015 35.9539L2.86325 24.9599L15.9015 13.9945L18.9191 17.0522L9.32796 24.9255L18.9191 32.8962L15.9015 35.9539Z"
				fill={primary}
				stroke={primary}
				stroke-width="0.0699437"
				stroke-miterlimit="22.9256"
			/>
			<path
				d="M161.441 40.7294H156.854L170.373 9.21894H174.977L161.441 40.7294ZM184.03 15.0423L197.085 26.0135L184.03 37.0075L181.029 33.944L190.626 26.0535L181.029 18.1058L184.03 15.0423Z"
				fill={primary}
				stroke={primary}
				stroke-width="0.0699437"
				stroke-miterlimit="22.9256"
			/>
		</svg>

		// <svg
		// 	xmlns="http://www.w3.org/2000/svg"
		// 	xml:space="preserve"
		// 	width={`${width}px`}
		// 	height={`${height}px`}
		// 	// version="1.0"
		// 	// style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
		// 	// viewBox="0 0 349 87.07"
		// 	// xmlns:xlink="http://www.w3.org/1999/xlink"
		// 	// xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
		// >
		// 	<g id="Camada_x0020_1">
		// 		<metadata id="CorelCorpID_0Corel-Layer" />
		// 		<g id="_1367493863456">
		// 			<g>
		// 				<path
		// 					fill={primary}
		// 					stroke={primary}
		// 					d="M88.56 80.83c-0.33,-0.18 -0.57,-0.43 -0.74,-0.74 -20.04,-35.98 -31.28,-56.07 -31.28,-56.07 4.67,-10.63 7,-15.94 7,-15.94 0.33,-0.64 0.85,-1.06 1.55,-1.26 0.5,-0.31 1.43,-0.17 2.79,0.42 2.87,6.39 4.31,9.58 4.31,9.58 16.76,37.45 26.36,58.27 26.36,58.27 0.55,1.42 0.67,2.24 0.34,2.47 -0.13,0.35 -0.57,0.66 -1.32,0.91 -5.14,1.71 -7.71,2.56 -7.71,2.56 -0.49,0.06 -0.92,-0.01 -1.3,-0.2z"
		// 				/>
		// 				<path
		// 					fill={secondary}
		// 					stroke={secondary}
		// 					d="M56.65 63.77c0.22,-0.41 0.33,-0.61 0.33,-0.61 20.15,-34.69 32.62,-56.76 32.62,-56.76 0.27,-0.67 0.69,-1.09 1.28,-1.26 0.38,-0.14 0.86,-0.18 1.43,-0.13 3.96,1.4 6.67,2.39 8.12,2.98 0.51,0.25 0.77,0.57 0.76,0.98 0.09,0.31 0.07,0.63 -0.07,0.97 -1.27,2.79 -1.91,4.19 -1.91,4.19 -14.59,31.16 -24.28,51.46 -24.28,51.46 -4.84,10.12 -7.26,15.18 -7.26,15.18 -0.59,0.47 -1.27,0.7 -2.02,0.69 -1.1,-0.13 -1.87,-0.7 -2.32,-1.72 -4.45,-10.64 -6.68,-15.97 -6.68,-15.97z"
		// 				/>
		// 				<path
		// 					fill={third}
		// 					stroke={third}
		// 					d="M44.53 72.5c-0.23,-0.28 -0.39,-0.67 -0.48,-1.16l0 -53.02c-0.17,-1.34 0.19,-2.45 1.1,-3.32 0.25,-0.34 1.67,-1.1 4.23,-2.28 9.45,-4.71 14.18,-7.07 14.18,-7.07 1.1,-0.6 2.46,-0.05 3.39,0.65 0.42,0.31 0.8,0.69 0.93,0.94 -0.11,-0.07 -0.26,-0.21 -0.49,-0.32 -0.31,-0.15 -0.7,-0.24 -0.88,-0.24 -0.62,0 -1,0.82 -1.08,1.35 -0.09,0.65 -0.02,1.37 -0.02,2.04 0.04,46.52 0.06,69.78 0.06,69.78 0.02,0.22 0.01,0.38 0.18,0.57 0.36,0.41 1.07,0.75 1.62,0.52 0.21,-0.08 0.37,-0.2 0.44,-0.23 -0.18,0.47 -0.79,0.87 -1.38,1.21 -0.43,0.25 -1.08,0.3 -1.36,0.32 -0.88,0.03 -1.58,-0.09 -2.09,-0.38 -4.39,-2.15 -6.59,-3.23 -6.59,-3.23 -6.87,-3.29 -10.3,-4.93 -10.3,-4.93 -0.67,-0.28 -1.16,-0.67 -1.46,-1.2z"
		// 				/>
		// 			</g>
		// 			<path
		// 				fill={secondary}
		// 				stroke={secondary}
		// 				d="M117.74 61.76l-0.16 -3.36c-0.54,0.57 -1.11,1.09 -1.7,1.57 -0.59,0.49 -1.24,0.9 -1.95,1.26 -0.72,0.34 -1.49,0.62 -2.33,0.81 -0.84,0.2 -1.75,0.29 -2.75,0.29 -1.32,0 -2.48,-0.19 -3.48,-0.58 -0.99,-0.39 -1.83,-0.93 -2.51,-1.62 -0.68,-0.7 -1.19,-1.53 -1.54,-2.5 -0.34,-0.98 -0.52,-2.06 -0.52,-3.25 0,-1.21 0.26,-2.34 0.77,-3.37 0.52,-1.03 1.31,-1.91 2.37,-2.65 1.06,-0.75 2.38,-1.33 3.96,-1.75 1.58,-0.42 3.43,-0.63 5.57,-0.63l3.38 0 0 -1.55c0,-0.66 -0.1,-1.26 -0.28,-1.79 -0.19,-0.54 -0.48,-0.99 -0.9,-1.36 -0.42,-0.37 -0.95,-0.66 -1.61,-0.87 -0.66,-0.2 -1.47,-0.3 -2.43,-0.3 -1.52,0 -3.03,0.17 -4.5,0.52 -1.48,0.35 -2.92,0.83 -4.3,1.45l0 -4.93c1.24,-0.49 2.65,-0.9 4.26,-1.23 1.62,-0.32 3.3,-0.48 5.04,-0.48 1.9,0 3.55,0.18 4.92,0.54 1.36,0.37 2.49,0.91 3.38,1.64 0.88,0.73 1.54,1.63 1.96,2.72 0.43,1.09 0.64,2.37 0.64,3.82l0 17.6 -5.29 0zm-0.89 -11.37l-3.79 0c-1.05,0 -1.94,0.11 -2.67,0.3 -0.73,0.21 -1.31,0.49 -1.77,0.84 -0.46,0.36 -0.8,0.76 -1.01,1.22 -0.21,0.47 -0.32,0.96 -0.32,1.49 0,1.04 0.34,1.85 1.02,2.39 0.68,0.55 1.6,0.82 2.77,0.82 0.86,0 1.76,-0.31 2.69,-0.93 0.93,-0.63 1.96,-1.53 3.08,-2.68l0 -3.45zm34.52 11.11c-1.12,0.25 -2.24,0.45 -3.38,0.61 -1.13,0.15 -2.2,0.22 -3.22,0.22 -1.68,0 -3.15,-0.17 -4.37,-0.52 -1.23,-0.36 -2.24,-0.9 -3.04,-1.63 -0.81,-0.73 -1.4,-1.65 -1.78,-2.77 -0.38,-1.13 -0.57,-2.46 -0.57,-4.02l0 -12.55 -6.9 0 0 -4.83 6.9 0 0 -6.6 6.34 -1.66 0 8.26 10.02 0 0 4.83 -10.02 0 0 12.1c0,1.48 0.33,2.58 1.01,3.34 0.67,0.75 1.81,1.12 3.4,1.12 1.01,0 2.01,-0.09 2.97,-0.25 0.96,-0.17 1.84,-0.36 2.64,-0.58l0 4.93zm23.87 -15.47c0.04,-0.96 -0.01,-1.78 -0.14,-2.46 -0.13,-0.67 -0.32,-1.24 -0.6,-1.68 -0.29,-0.43 -0.62,-0.75 -1.03,-0.96 -0.41,-0.2 -0.87,-0.3 -1.39,-0.3 -0.91,0 -1.86,0.38 -2.83,1.13 -0.96,0.76 -2.03,2.01 -3.2,3.75l0 16.25 -6.33 0 0 -25.75 5.6 0 0.22 3.79c0.43,-0.67 0.9,-1.26 1.44,-1.8 0.53,-0.53 1.12,-0.99 1.77,-1.37 0.65,-0.39 1.38,-0.68 2.17,-0.88 0.8,-0.21 1.67,-0.31 2.62,-0.31 1.3,0 2.45,0.22 3.46,0.67 1,0.45 1.85,1.11 2.54,1.99 0.68,0.89 1.19,1.99 1.52,3.32 0.33,1.33 0.47,2.86 0.41,4.61l-6.23 0zm27.15 -17.07c0,0.56 -0.1,1.09 -0.3,1.57 -0.21,0.49 -0.49,0.93 -0.85,1.29 -0.37,0.36 -0.8,0.65 -1.29,0.86 -0.49,0.21 -1.02,0.32 -1.59,0.32 -0.58,0 -1.12,-0.11 -1.62,-0.32 -0.5,-0.21 -0.93,-0.5 -1.29,-0.86 -0.37,-0.36 -0.65,-0.8 -0.86,-1.29 -0.2,-0.48 -0.3,-1.01 -0.3,-1.57 0,-0.56 0.1,-1.09 0.3,-1.57 0.21,-0.49 0.49,-0.93 0.86,-1.3 0.36,-0.37 0.79,-0.67 1.29,-0.87 0.5,-0.22 1.04,-0.32 1.62,-0.32 0.57,0 1.1,0.1 1.59,0.32 0.49,0.2 0.92,0.5 1.29,0.87 0.36,0.37 0.64,0.81 0.85,1.3 0.2,0.48 0.3,1.01 0.3,1.57zm-6.85 11.88l-7.27 0 0 -4.83 13.6 0 0 20.92 7.43 0 0 4.83 -21.92 0 0 -4.83 8.16 0 0 -16.09zm42.67 6.06c0,0.42 -0.01,0.96 -0.04,1.64 -0.02,0.67 -0.07,1.31 -0.12,1.9l-16.92 0c0,1.14 0.17,2.13 0.51,3 0.35,0.86 0.84,1.59 1.48,2.17 0.63,0.59 1.39,1.03 2.27,1.33 0.89,0.3 1.87,0.46 2.95,0.46 1.26,0 2.59,-0.09 4.02,-0.29 1.43,-0.19 2.91,-0.51 4.45,-0.96l0 4.94c-0.66,0.18 -1.38,0.34 -2.16,0.5 -0.78,0.15 -1.57,0.28 -2.38,0.4 -0.81,0.11 -1.63,0.2 -2.46,0.26 -0.83,0.06 -1.62,0.08 -2.4,0.08 -1.96,0 -3.71,-0.27 -5.27,-0.84 -1.55,-0.55 -2.88,-1.37 -3.96,-2.46 -1.08,-1.09 -1.9,-2.44 -2.47,-4.05 -0.58,-1.6 -0.87,-3.46 -0.87,-5.58 0,-2.09 0.29,-3.99 0.87,-5.72 0.57,-1.71 1.38,-3.18 2.43,-4.4 1.05,-1.23 2.32,-2.17 3.81,-2.84 1.49,-0.67 3.16,-1 5.01,-1 1.82,0 3.43,0.28 4.84,0.85 1.4,0.57 2.57,1.35 3.52,2.37 0.94,1.01 1.66,2.22 2.15,3.62 0.5,1.4 0.74,2.94 0.74,4.62zm-6.28 -0.87c0.01,-1.01 -0.12,-1.9 -0.39,-2.66 -0.26,-0.75 -0.64,-1.37 -1.09,-1.87 -0.47,-0.48 -1.02,-0.84 -1.63,-1.09 -0.62,-0.23 -1.28,-0.35 -1.99,-0.35 -1.56,0 -2.83,0.52 -3.83,1.56 -0.99,1.04 -1.59,2.51 -1.77,4.41l10.7 0zm20.7 -15.27l-7.27 0 0 -4.82 13.61 0 0 30.99 7.42 0 0 4.83 -21.91 0 0 -4.83 8.15 0 0 -26.17z"
		// 			/>
		// 			<polygon
		// 				fill={primary}
		// 				stroke={primary}
		// 				points="27.63,62.79 4.86,43.59 27.63,24.44 32.9,29.78 16.15,43.53 32.9,57.45 "
		// 			/>
		// 			<path
		// 				fill={primary}
		// 				stroke={primary}
		// 				d="M281.8 71.13l-8.01 0 23.61 -55.03 8.04 0 -23.64 55.03zm39.45 -44.86l22.8 19.16 -22.8 19.2 -5.24 -5.35 16.76 -13.78 -16.76 -13.88 5.24 -5.35z"
		// 			/>
		// 		</g>
		// 	</g>
		// </svg>
	);
}
