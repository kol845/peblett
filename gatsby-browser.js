import React from 'react';
import Layout from './src/components/layout';
import Providers from './src/components/providers';





export const wrapPageElement = ({ element, props }) => { // Wrap all pages with Layout
    return <Layout {...props}>{element}</Layout>;
  };

export const wrapRootElement = ({ element }) => (// Activates all providers
    <Providers>
        {element}
    </Providers>
)