import React from 'react';
import { Router } from 'dva/router';
import App from "./routes/app"
import disposeRouters from "./routers/routerConfig"
function RouterConfig({ history ,app}) {
const routers =disposeRouters(app)
  return (
    <Router history={history}>
      <App routers={routers}></App>
    </Router>
  );
}
export default RouterConfig;
