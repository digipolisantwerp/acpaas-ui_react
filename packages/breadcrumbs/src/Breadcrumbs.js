// @flow
import React from 'react';

import Link from '../../link';

type Props = {
  items: Array<{
    name: string,
    target?: string
  }>,
  linkProps?: Function
};

class Breadcrumbs extends React.Component<Props> {
  static defaultProps = {
    linkProps: src => src,
  };

  renderItems() {
    const { items, linkProps } = this.props;

    return items.map((item, index) => (
      <li key={item.name}>
        {
          (index >= items.length - 1 || !item.target)
            ? (<span className={index >= items.length - 1 ? 'u-text-bold' : null}>{item.name}</span>)
            : (
              <Link {...linkProps({ href: item.target })}>
                {item.name}
              </Link>
            )
        }
      </li>
    ));
  }

  render() {
    const { items } = this.props;

    return (
      items && items.length > 0 && (
        <ul className="m-breadcrumbs">
            { this.renderItems() }
        </ul>)
    );
  }
}

export default Breadcrumbs;
