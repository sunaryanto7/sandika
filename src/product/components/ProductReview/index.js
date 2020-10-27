import { Media, MediaBody, MediaImage } from '@sandika_components/commons/Media';
import BoyIcon from '@public/media/icons/boy.svg';
import GirlIcon from '@public/media/icons/girl.svg';
import theme from './productreview.module.scss';

const ProductReview = ({ children, review, style }) => {
	const styles = {
		'product__review': [theme['product__review'], style].filter(Boolean).join(' '),
		'product__review__media': theme['product__review--media'],
		'product__review__media_image': theme['product__review--media-image'],
		'product__review__media_body': theme['product__review--media-body'],
		'product__review__from': theme['product__review--from'],
		'product__review__date': theme['product__review--date'],
		'product__review__review': theme['product__review--review']
	};

	return (
		<>
			<div className={styles.product__review}>
				{review.map((item, i) => {
					if (i > 4) { return }
					return (
						<Media style={styles.product__review__media} key={i}>
							<MediaImage style={styles.product__review__media_image}>
								{i % 2 === 0 ? <BoyIcon /> : <GirlIcon />}
							</MediaImage>
							<MediaBody style={styles.product__review__media_body}>
								<p className={styles.product__review__from}><strong>From : </strong>{item.title}</p>
								{/* <p className={styles.product__review__date}><strong>Date : </strong>{'20 Oktober 2020'}</p> */}
								<p className={styles.product__review__review}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								</p>
							</MediaBody>
						</Media>
					);
				})}
			</div>
		</>
	);
};

export default ProductReview;