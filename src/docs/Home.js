import React from 'react';
import { PrismCode } from 'react-prism';
import { dedent } from 'dentist';

import { HelloWorld } from '../components';

const example = dedent(`
  import React from 'react';
  import { HelloWorld } from 'component-template';

  const Example = () => {
    return (
      <HelloWorld name="World" />
    );
  };

  export default Example;
`);

const Home = ({title, gh}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">
          <header className="box-row center">
              <h1 className="">{title}</h1>
              <p className="">
                An example reactstrap component built, documented & published with <a href="https://github.com/reactstrap/component-template">Component Template</a>
              </p>
              <p>
                <button href={`https://github.com/${gh}`}>View on Github</button>
              </p>
            </header>
        </div>
      </div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <h2>Getting Started</h2>
            <hr/>
            <p>
              Install and save the component to your project
            </p>
            <pre>
              <PrismCode className="language-bash">
                npm install component-template --save
              </PrismCode>
            </pre>
            <p>
              ES6 - import the component you need
            </p>
            <div className="docs-example">
              <HelloWorld name="World" />
            </div>
            <pre>
              <PrismCode className="language-jsx">
                {example}
              </PrismCode>
            </pre>
        </div>
      </div>
    </div>
  );
}

export default Home;
