import { render, screen, fireEvent } from '@testing-library/react';
yarn add --dev @storybook/testing-( react | vue | vue3 | angular )
import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';
setGlobalConfig(globalStorybookConfig);

// import your story from App.stories.js
import { App.stories } from './storybook'; 

// Add your tests here



// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library
