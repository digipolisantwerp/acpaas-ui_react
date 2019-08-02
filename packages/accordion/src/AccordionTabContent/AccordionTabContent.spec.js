import React from 'react';
import { shallow, mount } from 'enzyme';
import AccordionTabContent from './AccordionTabContent';

describe('AccordionTabContent', () => {
  test('Can render', () => {
    const component = shallow(<AccordionTabContent />);

    expect(component.find('.m-accordion__content')).toBeDefined();
  });

  test('Can contain a data-qa attribute', () => {
    const component = shallow(
      <AccordionTabContent qa="id-1234"/>
    );

    expect(component.find('[data-qa="id-1234"]').length).toEqual(1);
  });
});
