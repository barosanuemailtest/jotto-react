import Enzime from 'enzyme';

export function findByTestAttr(wrapper: Enzime.ShallowWrapper, value: string) {
    return wrapper.find(`[data-test="${value}"]`);
}