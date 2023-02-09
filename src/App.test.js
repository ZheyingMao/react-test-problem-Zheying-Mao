import { render, screen, fireEvent } from '@testing-library/react';
yarn add --dev @storybook/testing-( react | vue | vue3 | angular )
import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';
setGlobalConfig(globalStorybookConfig);

// import your story from App.stories.js
import { App.stories } from './storybook'; 

// Add your tests here
yarn add --dev chromatic
npx chromatic --project-token <your-project-token>
Build 1 published.

View it online at https://www.chromatic.com/build?appId=...&number=1.


// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library
