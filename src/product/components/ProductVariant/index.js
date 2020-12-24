import Block from '@sandika_components/core/Block';
import { FormRow, FormGroup } from '@sandika_components/commons/Form';
import { RadioButton } from '@sandika_components/commons/Utilities';
import * as theme from './productvariant.module.scss';
import { useState } from 'react';

const ProductVariant = ({ options, activeOptions }) => {
  const [activeAttribute, setActiveAttribute] = useState(activeOptions);

  const styles = {
    product__variants: theme['product__variants'],
    form__row: theme['form__row'],
    form__gruop: theme['form__group']
  };

  const sortArrayOfObject = (array) => {
    const _result = [];
    array.map((unordered) => {
      let _temp = {};
      Object.keys(unordered)
        .sort()
        .forEach((key) => {
          _temp[key] = unordered[key];
        });
      _result.push(_temp);
    });
    return _result;
  };

  const activeSwatch = (code) => {
    let _temp = {};
    activeAttribute.map((data) => {
      if (data.code === code) {
        _temp = data.label;
      }
    });
    return _temp;
  };

  const handleSetActiveAttribute = (swatch, attribute_code) => {
    let _temp = { code: attribute_code, ...swatch };
    let _result = [];
    activeAttribute.filter((data) => {
      if (data.code === _temp.code) {
        _temp['__typename'] = 'ConfigurableAttributeOption';
        _result.push(_temp);
      }
      if (data.code !== _temp.code) {
        _result.push(data);
      }
    });
    setActiveAttribute(sortArrayOfObject(_result));
  };

  return (
    <>
      <Block title={'Check Availability'} style={styles.product__variants}>
        <form>
          {options.map((swatchType, i) => {
            return (
              <FormRow title={swatchType.label} key={i} style={styles.form__row}>
                <FormGroup style={styles.form__group}>
                  {swatchType.values.map((swatch, j) => {
                    return (
                      <RadioButton
                        label={swatch.label}
                        value={JSON.stringify({ ...swatch })}
                        name={`swatch__opt-${swatchType.attribute_code.toLowerCase()}`}
                        id={`swatch__opt-${swatch.label.toLowerCase()}`}
                        key={j}
                      />
                    );
                  })}
                </FormGroup>
              </FormRow>
            );
          })}
        </form>
      </Block>
    </>
  );
};

export default ProductVariant;
