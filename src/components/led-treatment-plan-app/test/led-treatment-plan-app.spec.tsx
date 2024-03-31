import { newSpecPage } from '@stencil/core/testing';
import { LedTreatmentPlanApp } from '../led-treatment-plan-app';

describe('led-treatment-plan-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LedTreatmentPlanApp],
      html: `<led-treatment-plan-app></led-treatment-plan-app>`,
    });
    expect(page.root).toEqualHtml(`
      <led-treatment-plan-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </led-treatment-plan-app>
    `);
  });
});
