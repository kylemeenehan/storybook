import type { ReactElement } from 'react';
import ReactDOM from 'react-dom';

export const renderElement = async (node: ReactElement, el: Element) => {
  return new Promise<null>((resolve) => {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(node, el, () => resolve(null));
  });
};

export const unmountElement = (el: Element) => {
  // eslint-disable-next-line react/no-deprecated
  ReactDOM.unmountComponentAtNode(el);
};
