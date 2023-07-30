interface props {
	size?: string;
	height?: string;
	color?: string;
}

export default function Whatsapp({ size = '35', color = '#0878BA' }: props) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_272_66)">
				<path
					d="M20 0C8.97154 0 0 8.97154 0 20C0 23.7623 1.04538 27.4146 3.02846 30.5862C2.23846 33.3538 0.811538 38.5892 0.796154 38.6438C0.722308 38.9146 0.801538 39.2038 1.00385 39.3985C1.20615 39.5931 1.49846 39.6623 1.76462 39.5808L9.69231 37.1423C12.7977 39.0131 16.3538 40 20 40C31.0285 40 40 31.0285 40 20C40 8.97154 31.0285 0 20 0ZM20 38.4615C16.5238 38.4615 13.1377 37.49 10.2069 35.6531C10.0831 35.5754 9.94077 35.5362 9.79846 35.5362C9.72231 35.5362 9.64615 35.5477 9.57231 35.57L2.65 37.7008C3.15846 35.8446 4.07231 32.5246 4.60231 30.6777C4.66385 30.4638 4.62923 30.2331 4.50846 30.0462C2.56538 27.0562 1.53846 23.5823 1.53846 20C1.53846 9.82077 9.82077 1.53846 20 1.53846C30.1792 1.53846 38.4615 9.82077 38.4615 20C38.4615 30.1792 30.1792 38.4615 20 38.4615Z"
					fill={color}
				/>
				<path
					d="M33.0654 24.7124C31.6454 23.9239 30.4361 23.1332 29.5538 22.5562C28.88 22.1162 28.3931 21.7985 28.0362 21.6193C27.0385 21.1216 26.2823 21.4732 25.9946 21.7639C25.9585 21.8001 25.9262 21.8393 25.8985 21.8809C24.8623 23.4355 23.5092 24.9224 23.1131 25.0024C22.6554 24.9309 20.5131 23.7132 18.3838 21.9401C16.21 20.1285 14.8423 18.3939 14.6415 17.2124C16.0362 15.777 16.5385 14.8739 16.5385 13.8462C16.5385 12.787 14.0677 8.3647 13.6208 7.91777C13.1723 7.47008 12.1623 7.40008 10.6185 7.70777C10.47 7.73777 10.3331 7.81085 10.2254 7.91777C10.0385 8.1047 5.66461 12.5639 7.74307 17.9685C10.0246 23.9001 15.8808 30.7947 23.3469 31.9147C24.1954 32.0416 24.9908 32.1047 25.7354 32.1047C30.1277 32.1047 32.72 29.8947 33.45 25.5109C33.5046 25.1901 33.35 24.8701 33.0654 24.7124ZM23.5754 30.3932C15.68 29.2093 10.7069 21.387 9.17923 17.4162C7.66384 13.4778 10.4585 9.96624 11.16 9.17239C11.7308 9.07547 12.3315 9.0347 12.5823 9.07393C13.1062 9.80239 14.92 13.2293 15 13.8462C15 14.2501 14.8685 14.8124 13.3023 16.3793C13.1577 16.5232 13.0769 16.7185 13.0769 16.9232C13.0769 20.9509 21.5723 26.5385 23.0769 26.5385C24.3854 26.5385 26.0915 24.3393 27.0631 22.9062C27.1192 22.9085 27.2138 22.9278 27.3485 22.9955C27.6254 23.1347 28.1054 23.4478 28.7123 23.8447C29.5138 24.3685 30.5785 25.0639 31.8354 25.7847C31.2646 28.5309 29.6692 31.3085 23.5754 30.3932Z"
					fill={color}
				/>
				<path
					d="M9.53191 11C9.70213 10.4773 9.23191 9.77727 12.5 8.52273L13.1064 8.52271V9.04543L14.6383 12.7045L15.1489 14.2727L14.1277 15.8409L13.1064 16.8863L14.1277 19.5L16.6809 22.6363L19.7447 24.7272L21.7872 26.2954H23.8298L25.8723 24.7272L27.4043 23.1591L28.4255 24.2045L30.9787 24.7272L32 26.2954V27.8636L30.4681 29.4318L26.8936 31H22.8085L20.2553 29.9545L17.1915 27.8636L14.1277 25.7727L12.0851 23.1591L10.5532 22.1136L9.53191 18.4545L8.51064 16.8863L8 14.2727L8.51064 12.7045L9.53191 11Z"
					fill={color}
					stroke={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_272_66">
					<rect width="40" height="40" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}