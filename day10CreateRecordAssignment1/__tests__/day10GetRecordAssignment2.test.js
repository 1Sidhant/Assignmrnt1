import { createElement } from 'lwc';
import Day10CreateRecordAssignment1 from 'c/day10CreateRecordAssignment1';

describe('c-day10-create-record-assignment1', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-day10-create-record-assignment1', {
            is: Day10CreateRecordAssignment1
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});