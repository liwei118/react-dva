import dva from 'dva';
import { message } from 'antd';
import createLoading from 'dva-loading';
import { createBrowserHistory as createHistory } from 'history';
import './index.css';

// 1. Initialize
const app = dva({
    ...createLoading({
        effects: true,
      }),
    history: createHistory(),
    onError (error) {
        message.error(error.message)
      },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);
// 4. Router
app.router(require('./router').default);
// 5. Start
app.start('#root');
export default app