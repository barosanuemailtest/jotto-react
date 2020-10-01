import Enzime from 'enzyme';
import { checkPropTypes } from 'prop-types';

export function findByTestAttr(wrapper: Enzime.ShallowWrapper, value: string) {
    return wrapper.find(`[data-test="${value}"]`);
}

export const checkProps = (component: any, conformingProps:any) => {
    const propError = checkPropTypes(
      component.propTypes,
      conformingProps,
      'prop',
      component.name);
    expect(propError).toBeUndefined();
  }
  