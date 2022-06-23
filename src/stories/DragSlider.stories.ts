// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import DragSliderComponent from './drag-slider.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Example/Slider',
    component: DragSliderComponent,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  } as Meta;

  const Template: Story<DragSliderComponent> = (args: DragSliderComponent) => ({
    props: args,
  });

export const SliderLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
