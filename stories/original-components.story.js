import {storiesOf} from '@storybook/html';
import '../dist/lib/core-hello/index';
import '../dist/lib/core-button/index';
import '../dist/lib/core-slider/index';
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs';

const stories = storiesOf('Original Components', module);

stories.addDecorator(withKnobs);

stories.add('<core-hello>', () => {
  const LANGS = {
    English: 'en',
    Chinese: 'zh',
    Hindi: 'hi',
    Spanish: 'es',
    German: 'de',
    French: 'fr',
    Japanese: 'jp',
  };

  const lang = select('Language', LANGS, LANGS.English);
  const rainbow = boolean('Rainbow', false) ? 'rainbow' : '';

  const content = `
    <core-hello lang="${lang}" ${rainbow}>
      <span slot="name">Mark</span>
    </core-hello>
  `;

  return content;
});

stories.add('<core-button>', () => {
  const COLORS = {
    default: 'default',
    primary: 'primary',
    secondary: 'secondary',
    dark: 'dark',
  };

  const SIZES = {
    small: 'small',
    medium: 'medium',
    large: 'large',
  };

  const color = select('Color', COLORS, COLORS.danger);
  const size = select('Size', SIZES, SIZES.medium);
  const shadow = boolean('Shadow', false) ? 'shadow' : '';
  const rounded = boolean('Rounded', false) ? 'rounded' : '';
  const circle = boolean('Circle', false) ? 'circle' : '';

  const content = `
    <core-button color=${color} size=${size} ${shadow} ${rounded} ${circle} style="margin: 20px;">
      Submit
    </core-button>
  `;

  return content;
});

stories.add('<core-slider>', () => {
  const SIZES = {
    small: 'small',
    medium: 'medium',
    large: 'large',
  };

  const THEMES = {
    rounded: 'rounded',
    circle: 'circle',
  };

  const time = text('Time', '2s');
  const size = select('Size', SIZES, SIZES.small);
  const theme = select('Theme', THEMES, THEMES.rounded);
  const control = boolean('Control', true) ? 'control' : '';
  const shadow = boolean('Shadow', true) ? 'shadow' : '';
  const showText = boolean('Text', true) ? 'text': '';

  const content = `
    <core-slider ${control} ${shadow} size=${size} ${showText} time=${time} theme=${theme} style="margin: 20px;">
      <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
      <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
      <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
      <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
      <span slot="title">ThanO5</span>
      <p slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.            
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.           
      </p>
    </core-slider>
  `;

  return content;
});

