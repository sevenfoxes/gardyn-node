import { variables } from '../theme';

export const wrapper = {
  display: 'grid',
  margin: '0 auto',
  gridTemplateColumns: '1fr max-content',
  paddingLeft: `calc(env(safe-area-inset-left) + ${variables.baseMargin})`,
  paddingRight: `calc(env(safe-area-inset-right) + ${variables.baseMargin})`,
  width: '100%',
};
