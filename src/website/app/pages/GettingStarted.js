/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../utils';
import CodeBlock from '../CodeBlock';
import Link from '../Link';
import PageLayout from '../PageLayout';

const Callout = createStyledComponent('p', ({ theme }) => ({
  backgroundColor: theme.color_gray_10,
  borderLeft: `4px solid ${theme.borderColor}`,
  padding: `${theme.spacing_single} ${theme.spacing_double}`
}));

export default function GettingStarted() {
  return (
    <PageLayout>
      <h1>Getting Started</h1>
      <p>
        We made Mineral UI to help you quickly build React apps with a
        high-quality UI. Getting started in your app is as simple as 1-2-3.
      </p>
      <h2>Installation</h2>
      <p>
        Install the{' '}
        <Link href="https://www.npmjs.com/package/mineral-ui">
          Mineral UI package
        </Link>.
        <br />
        <br />
        <CodeBlock>npm install --save mineral-ui</CodeBlock>
        <br />
        Then install any missing peer dependencies reported by <code>
          npm
        </code>{' '}
        or <code>yarn</code>.
      </p>
      <h2>Usage</h2>
      <CodeBlock>
        {`import React from 'react';
        import { render } from 'react-dom';
        import Button from 'mineral-ui/Button';
        import ThemeProvider from 'mineral-ui/ThemeProvider';

        function App() {
          return (
            <ThemeProvider>
              <Button>
                Hello World
              </Button>
            </ThemeProvider>
          );
        }

        render(<App />, document.getElementById('app'));`}
      </CodeBlock>
      <Callout>
        Your app must be wrapped in a <code>ThemeProvider</code> at its root in
        order for the styles to apply correctly.
        <br />
        <br />
        Also, please see our{' '}
        <Link href="https://github.com/mineral-ui/mineral-ui/tree/master/docs/import-syntax.md">
          import syntax guidelines
        </Link>.
      </Callout>
      <h3>Open Sans Font</h3>
      <p>
        Mineral UI was designed around{' '}
        <Link href="https://fonts.google.com/specimen/Open+Sans">
          Open Sans
        </Link>. To get the components to look right, you will need to include
        this font in your project yourself or our styles will fall back to
        system fonts. To quickly include this font in your app, copy this code
        into the <code>{`<head>`}</code> of your HTML document.
      </p>
      <CodeBlock>
        {`<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet"></code>`}
      </CodeBlock>
      <p>
        For more options loading this font from Google, check out the Seleted
        Family popup, in the{' '}
        <Link href="https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans">
          specimen
        </Link>. You can also download the font file and serve it yourself if
        you’d like, but we’ll leave that to you.
      </p>
      <h3>Styling</h3>
      <p>
        This project uses{' '}
        <Link href="https://github.com/paypal/glamorous/">Glamorous</Link> for
        its styling. Please see our{' '}
        <Link href="https://github.com/mineral-ui/mineral-ui/blob/master/docs/styling.md">
          documentation
        </Link>{' '}
        for details.
      </p>
      <h3>Theming</h3>
      <p>
        Theming is a core concept in Mineral UI. Refer to the{' '}
        <Link to="/guidelines/theming">documentation</Link> for details.
      </p>
      <h2>Contributing</h2>
      <p>
        We welcome all contributors who abide by our{' '}
        <Link href="https://github.com/mineral-ui/mineral-ui/blob/master/CODE_OF_CONDUCT.md">
          Code of Conduct
        </Link>. Please see the{' '}
        <Link href="https://github.com/mineral-ui/mineral-ui/blob/master/CONTRIBUTING.md">
          Contributors Guide
        </Link>{' '}
        and{' '}
        <Link href="https://github.com/mineral-ui/mineral-ui/blob/master/docs/README.md">
          Developer Docs
        </Link>{' '}
        for more details on submitting a PR, setting up a local dev environment,
        running tests, etc...
      </p>
      <h2>Browser Support</h2>
      <p>Mineral UI supports the latest versions of</p>
      <ul>
        <li>Chrome</li>
        <li>Firefox</li>
        <li>Safari</li>
        <li>Edge</li>
        <li>Internet Explorer 11</li>
      </ul>
    </PageLayout>
  );
}