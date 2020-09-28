import Block from '@sandika_components/core/Block';
import { Form, FormRow, FormGroup, Radio } from '@sandika_components/commons/Form';
import { useState } from 'react';

const ProductMediaOptions = ({ options, activeOptions }) => {
	const [activeAttribute, setActiveAttribue] = useState(activeOptions);
	const activeSwatch = (code) => {
		let _temp = {};
		activeAttribute.map((data) => { if (data.code === code) { _temp = data.label } })
		return _temp;
	}

	return (
		<>
			<Block style={'product__media__options'}>
				<Form>
					{options.map((swatchType, i) => {
						let _temp = activeSwatch(swatchType.attribute_code);
						console.log(swatchType)
						return (
							<FormRow key={i}>
								<FormGroup title={swatchType.label}>
									{swatchType.values.map((swatch, j) => {
										return (
											<Radio
												type={'radio'}
												label={swatch.label}
												value={JSON.stringify({ ...swatch })}

												name={swatchType.attribute_code}
												id={swatchType.attribute_code}
												checked={_temp === swatch.label ? true : false}
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

