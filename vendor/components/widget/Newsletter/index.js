import * as theme from './newsletter.module.scss';
import { useState } from 'react';
import { InputField } from '@sandika_components/commons/Utilities';
import Block from '@sandika_components/core/Block';

const Newsletter = ({ style }) => {
  const [email, setEmail] = useState('');

  const styles = {
    newsletter: [theme['newsletter'], style].filter(Boolean).join(' '),
    newsletter__title: theme['newsletter__title'],
    newsletter__content: theme['newsletter__content'],
    newsletter__caption: theme['newsletter__caption']
  };

  const handleChange = (value) => {
    setEmail(value);
  };

  return (
    <>
      <Block nopadding>
        <div className={styles.newsletter}>
          <h3 className={styles.newsletter__title}>JOIN OUR EMAIL LIST!</h3>
          <div className={styles.newsletter__content}>
            <form>
              <InputField
                type={'email'}
                placeholder={'Email Address'}
                name={'newsletter'}
                id={'newsletter'}
                value={email}
                onChange={handleChange}
              />
            </form>
            <p className={styles.newsletter__caption}>
              Subscribe to receive new product releases, exclusive discount codes, and newsletters By
              signing up, you are consenting to our privacy policy but you can opt out at any time.
          </p>
          </div>
        </div>
      </Block>
    </>
  );
};

export default Newsletter;
