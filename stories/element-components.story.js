import {storiesOf} from '@storybook/html';
import '../dist/lib/core-image/index';
import '../dist/lib/core-progress/index';
import '../dist/lib/core-badge/index';
import '../dist/lib/core-button/index';
import '../node_modules/element-theme-chalk/lib/index.css';
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs';

const stories = storiesOf('Element Components', module);

stories.addDecorator(withKnobs);

stories.add('<core-image>', () => {
  const FITS = {
    default: '',
    fill: 'fill',
    contain: 'contain',
    cover: 'cover',
    none: 'none',
    scaleDown: 'scale-down',
  };

  const src = text('Image URL (first pic)', 'https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80');
  let fit = select('Fit (fist pic)', FITS, FITS.default);
  fit = fit.length !== '' ? `fit="${fit}"` : '';
  const lazy = boolean('Lazy Load', false) ? 'lazy' : '';
  const loading = boolean('Loading Effect', false) ? `
    <div slot="placeholder" style="display: flex; color: teal; font-size: 50px; text-align: center; align-items: center; justify-content: center; width: 100%; height: 100%;">
      Loading<span class="dot">...</span>
    </div>
  ` : '';
  const error = boolean('Error Placeholder', false) ? `
    <div slot="error" style="display: flex; font-size: 50px; background-color: #f5f7fa; color: #909399; text-align: center; align-items: center; justify-content: center; width: 100%; height: 100%;">
      <i class="el-icon-picture-outline"></i>
    </div>
  ` : '';

  const content = `
    <style>
      core-image {
        display: block; 
        height: 250px; 
        width: 400px;
        margin-bottom: 10px;
      }
    </style>
    <div style="margin: 20px auto; width: 400px; height: 600px; overflow-y: auto;">
      <core-image ${fit} ${lazy} src="${src}">${loading} ${error}</core-image>
      <core-image ${lazy} src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg">${loading} ${error}</core-image>
      <core-image ${lazy} src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg">${loading} ${error}</core-image>
      <core-image ${lazy} src="https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg">${loading} ${error}</core-image>
      <core-image ${lazy} src="https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg">${loading} ${error}</core-image>
    </div>
  `;

  return content;
});

stories.add('<core-progress>', () => {
  const TYPES = {
    line: 'line',
    circle: 'circle',
    dashboard: 'dashboard',
  };

  const STATUSES = {
    default: '',
    success: 'success',
    exception: 'exception',
    warning: 'warning',
  };

  const percentage = number('Percentage', 0) || 0;
  const type = select('Type', TYPES, TYPES.line);
  const strokeWidth = number('Stroke Width', 6) || 6;
  const textInside = boolean('Text Inside', false) ? 'text-inside' : '';
  const status = select('Status', STATUSES, '');
  const color = text('Color', '');
  const width = number('Width', 126) || 6;
  const showText = boolean('Show Text', false) ? 'show-text' : '';

  const content = `
    <style>
      core-progress {
        margin: 10px;
      }
    </style>
    <div style="margin-left: 30px; width: 400px;">
      <core-progress 
        percentage="${percentage}" 
        type="${type}" 
        stroke-width="${strokeWidth}"
        ${textInside}
        status="${status}"
        color="${color}"        
        width="${width}"
        ${showText}>
      </core-progress>
    </div>
  `;

  return content;
});

stories.add('<core-badge>', () => {
  const TYPES = {
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    info: 'info',
  };

  const value = text('Value', '+');
  const max = text('Max', '100');
  const isDot = boolean('Is Dot', false) ? 'is-dot' : '';
  const hidden = boolean('Hidden', false) ? 'hidden' : '';
  const type = select('Type', TYPES, TYPES.danger);

  const content = `  
    <core-badge value="${value}" max="${max}" ${isDot} ${hidden} type="${type}" style="margin: 20px; display: inline-block;">
      <core-button size="small" color="primary">comments</core-button>
    </core-badge>
  `;

  return content;
});

