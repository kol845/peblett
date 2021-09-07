import React from 'react';
import Providers from './src/components/providers';

export const wrapRootElement = ({ element }) => (// Activates all providers
    <Providers>
        {element}
    </Providers>
)
