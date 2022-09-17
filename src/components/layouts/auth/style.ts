import {
  Layout as KittenLayout,
  Text as KittenText,
  LayoutProps,
  TextProps,
} from '@ui-kitten/components';

import styled from 'styled-components';

export const Layout = styled(KittenLayout)<LayoutProps>`
  padding: 16px;
`;

export const Text = styled(KittenText)<TextProps>`
  margin-bottom: 16px;
`;
