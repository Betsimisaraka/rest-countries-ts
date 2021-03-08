import React from 'react';

import { render } from '@testing-library/react';
import Header from './Header';

test('<Header /> ', () => {
    const { queryByTestId, container } = render(<Header />);
    const title = queryByTestId("page-title");
    expect(title).toBeTruthy(); 
    // expect(container.firstChild).toMatchSnapshot();
})
