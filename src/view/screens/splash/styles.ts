import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  image: {
    width: '80%',
  },
});

export default styles;
