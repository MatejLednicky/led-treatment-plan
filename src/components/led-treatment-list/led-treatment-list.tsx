import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'led-treatment-list',
  styleUrl: 'led-treatment-list.css',
  shadow: true,
})
export class LedTreatmentList {

  render() {
    return (
      <Host>
        <p>Treatment Plan</p>
      </Host>
    );
  }

}
