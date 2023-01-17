# NFT Marketplace Style Guide

This style guide provides guidelines for coding standards, naming conventions, and best practices for contributing to the NFT Marketplace project.

## Coding Standards

- We use Prettier to format our code.
- We use ESLint to check for code quality and adherence to coding standards.
- We use ![Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) as a reference for our coding standards.

Please make sure your code adheres to these standards before submitting a pull request.

## Naming Conventions

- Use camelCase for variable and function names.
- Use PascalCase for component names.
- Use meaningful and descriptive names for variables, functions, and components.
- Use short and concise names for state and props.

## Best Practices

- Break down your code into small, reusable, and testable components.
- Use functional components and hooks instead of class components whenever possible.
- Use the latest version of React and React Native.
- Use comments in the code to make it easy for other developers to understand the code and its functionality.
- Keep the codebase consistent, readable, and maintainable.

## Component Guide

- Components should be small, reusable, and testable.
- Use functional components and hooks whenever possible.
- Use the latest version of React and React Native.
- Components should be structured in a logical, modular way.
- Use prop-types to type-check the props passed to the component.

Example;

```jsx
import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  name: string;
  age: number;
}

const MyComponent: React.FC<Props> = ({name, age}) => {
  return (
    <View>
      <Text>
        My name is ${name} and I am ${age} years old
      </Text>
    </View>
  );
};

export default MyComponent;
```

## Screens Guide

- Screens should be small, reusable, and testable.
- Use functional components and hooks whenever possible.
- Use the latest version of React and React Native.
- Screens should be structured in a logical, modular way.
- Screens should be designed to be easy to navigate and understand.

## Function and Hooks Guide

- Functions and hooks should be small, reusable, and testable.
- Use the latest version of React and React Native.
- Functions and hooks should be structured in a logical, modular way.
- Functions and hooks should be designed to be easy to understand and use.

Example:

```jsx
import {useState} from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {count, increment, decrement};
};

export default useCounter;
```

## Colors Guide

- Use the colors provided in the `colors.js` file located in the constants folder.
- Avoid hardcoding colors.
- Be consistent with the color scheme throughout the app.

## Git workflow

- Create a new branch for each feature or fix.
- Write clear and concise commit messages that describe the changes made.
- Keep the number of commits in a pull request to a minimum.
- Make sure to update the README and other relevant documentation to reflect any changes made to the app's features or functionality.

By following these guidelines, we can ensure that the codebase stays consistent, readable, and maintainable.

It's also important to note that it's always good to test the changes made in the application to ensure that everything is working as it should.

Also, make sure to include the proper documentation for the functions, hooks, and components created, to make it easy for other developers to understand the code and its functionality.

Thank you for your commitment to these standards and for contributing to the NFT Marketplace App.

Please let me know, via email ![bismarkokleteyamanor@gmail.com](), if you have any questions or need assistance, I am happy to help.
