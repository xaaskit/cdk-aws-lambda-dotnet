import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { DotNetFunction } from '../src';

describe('DotNetFunction', () => {
  it('Should match snapshots', () => {
    // Given
    const stack = new Stack();
    new DotNetFunction(stack, 'Function', { projectDir: 'test/fixtures/EmptyFunction' });

    // When
    const template = Template.fromStack(stack);

    // Then
    expect(template ).toMatchSnapshot();
  });
});