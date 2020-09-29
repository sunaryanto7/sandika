import Block from '@sandika_components/core/Block';
import { Form, FormRow, FormGroup, Radio } from '@sandika_components/commons/Form';
import { useState } from 'react';

const ProductMediaOptions = ({ options, activeOptions }) => {
	const [activeAttribute, setActiveAttribute] = useState(activeOptions);

	const sortArrayOfObject = (array) => {
		const _result = [];
		array.map((unordered) => {
			let _temp = {};
			Object.keys(unordered).sort().forEach((key) => {
				_temp[key] = unordered[key];
			});
			_result.push(_temp);
		})
		return _result;
	}

	const activeSwatch = (code) => {
		let _temp = {};
		activeAttribute.map((data) => { if (data.code === code) { _temp = data.label } });
		return _temp;
	};

	const handleSetActiveAttribute = (swatch, attribute_code) => {
		let _temp = { 'code': attribute_code, ...swatch };
		let _result = [];
		activeAttribute.filter((data) => {
			if (data.code === _temp.code) { _temp['__typename'] = "ConfigurableAttributeOption"; _result.push(_temp); }
			if (data.code !== _temp.code) { _result.push(data) }
		});
		setActiveAttribute(sortArrayOfObject(_result));
	};

	return (
		<>
			<Block style={'product__media__options'}>
				<Form>
					{options.map((swatchType, i) => {
						let _temp = activeSwatch(swatchType.attribute_code);
						return (
							<FormRow key={i}>
								<FormGroup title={swatchType.label}>
									{swatchType.values.map((swatch, j) => {
										return (
											<Radio
												type={'radio'}
												label={swatch.label}
												value={JSON.stringify({ ...swatch })}

												name={`swatch__opt-${swatch.label.toLowerCase()}`}
												id={`swatch__opt-${swatch.label.toLowerCase()}`}
												checked={_temp === swatch.label ? true : false}
												onClick={() => { handleSetActiveAttribute({ ...swatch }, swatchType.attribute_code) }}
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

