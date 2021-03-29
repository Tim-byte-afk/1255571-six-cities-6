import React from 'react';
import {render} from '@testing-library/react';

import Map from './map-screen';
import {offersMocks} from '../../store/tests.mocks';

it(`'LoadingScreen component' should render correctly`, () => {
  const {container} = render(<Map points={offersMocks} activeCardId={``} activeCard={{}} activeCity={`Amsterdam`} />);

  expect(container).toMatchSnapshot();
});
