import { createElement } from 'lwc';
import Assignment_Day_2_AccountList from 'c/assignment_Day_2_AccountList';

describe('c-assignment-day-2-account-list', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-assignment-day-2-account-list', {
            is: Assignment_Day_2_AccountList
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});