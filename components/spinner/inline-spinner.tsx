import React from 'react';

import * as styles from './styles';

export default function InlineSpinner() {
  return (
    <styles.InlineSpinnerContainer data-testid="inline-spinner">
      <styles.InlineSpinner />
    </styles.InlineSpinnerContainer>
  );
}
