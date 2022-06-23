import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-drag-slider',
  template: `<input
    type="range"
  >
    `,
})
export default class DragSliderComponent {

    
  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();


}