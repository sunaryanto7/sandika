import Block from '@sandika_components/core/Block';
import { Form, FormRow, FormGroup, Radio } from '@sandika_components/commons/Form';

const ProductMediaOptions = ({ options }) => {
	return (
		<>
			<Block style={'product__media__options'}>
				<Form>
					{options.map((swatchType, i) => {
						return (
							<FormRow key={i}>
								<FormGroup title={swatchType.label}>
									{swatchType.values.map((swatchValues, j) => {
										return (
											<Radio
												type={'radio'}
												label={swatchValues.label}
												name={swatchType.label}
												id={swatchValues.label}
												value={swatchType.label}
												key={j} />
										)
									})}
								</FormGroup>
							</FormRow>
						)
					})}
				</Form>
			</Block>
		</>
	)
};

export default ProductMediaOptions

