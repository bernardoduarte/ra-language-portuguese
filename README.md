# Portuguese Messages for React-Admin

Portuguese messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save @bernardoduarte/ra-language-portuguese
```

## Usage

```jsx
import { Admin } from 'react-admin';
import pt from '@bernardoduarte/ra-language-portuguese';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = { pt };
const i18nProvider = polyglotI18nProvider((locale) => messages[locale], 'pt');

<Admin i18nProvider={i18nProvider}>
    ...
</Admin>
```

## License

This translation is licensed under the MIT License.