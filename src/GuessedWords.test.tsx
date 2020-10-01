import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/TestUtils';
import GuesedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{
        guessedWord: 'train',
        letterMatchCount: 3
    }]
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuesedWords{...setupProps} />)
};

test('does not throw warning with expected props', () => {
    checkProps(GuesedWords, defaultProps);
})
describe('no words guessed', () => {
    let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    test('renders withot error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});
describe('some words guessed', () => {
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5}
    ]
    let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeEach(() => {
        wrapper = setup({ guessedWords: guessedWords });
    });
    test('renders withot error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders "guessed words" section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(3);
    });
});