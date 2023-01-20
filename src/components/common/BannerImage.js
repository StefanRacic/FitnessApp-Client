import React from 'react';
import styles from './common.module.css';

const BannerImage = ({ image }) => {
	return (
		<div
			className={styles.bannerImage}
			style={{ backgroundImage: `url(${image})` }}
		></div>
	);
};

export default BannerImage;
