import app from './app';

const server = app.listen(app.get('port'), () => {
  console.log(`listening at http://localhost:%d`, app.get('port'));
});
