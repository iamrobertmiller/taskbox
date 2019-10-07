import React, { useMemo, Fragment } from 'react'

import { useParameter } from '@storybook/api';
import { addons, types } from '@storybook/addons'
import { AddonPanel } from '@storybook/components'

addons.register('my/design-assets', () => {
  addons.add(PANEL_ID, {
    title: 'assets',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        implement
      </AddonPanel>
    ),
  });
});
