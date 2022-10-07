const React = require('react');
const ReduxDevtools = require('redux-devtools');
const DockMonitor = require('redux-devtools-dock-monitor').default;
const LogMonitor = require('redux-devtools-log-monitor').default;

const _DevTools = ReduxDevtools.createDevTools(
  <DockMonitor toggleVisibilityKey="h" changePositionKey="q" defaultIsVisible={true}>
    <LogMonitor />
  </DockMonitor>
);

class DevTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  static instrument() {
    return _DevTools.instrument(arguments);
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div>
        {this.state.isMounted && <_DevTools />}
      </div>
    );
  }
};

/**
 * Redux development tools (useful for debugging).
 */
module.exports = DevTools;
