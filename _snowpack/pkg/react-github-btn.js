import { r as react } from './common/index-04edb6a1.js';
import './common/_commonjsHelpers-8c19dec8.js';

class GitHubButton extends react.PureComponent {
  constructor (props) {
    super(props);
    this.$ = react.createRef();
    this._ = react.createRef();
  }
  render () {
    return react.createElement('span', { ref: this.$ }, react.createElement('a', { ...this.props, ref: this._ }, this.props.children))
  }
  componentDidMount () {
    this.paint();
  }
  getSnapshotBeforeUpdate () {
    this.reset();
    return null
  }
  componentDidUpdate () {
    this.paint();
  }
  componentWillUnmount () {
    this.reset();
  }
  paint () {
    const _ = this.$.current.appendChild(document.createElement('span'));
    import(/* webpackMode: "eager" */ './common/buttons.esm-9a530c44.js').then(({ render }) => {
      render(_.appendChild(this._.current), function (el) {
        try {
          _.parentNode.replaceChild(el, _);
        } catch (_) {}
      });
    });
  }
  reset () {
    this.$.current.replaceChild(this._.current, this.$.current.lastChild);
  }
}

export default GitHubButton;
//# sourceMappingURL=react-github-btn.js.map
