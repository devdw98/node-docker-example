import app from './app';

app.listen(app.get('port'), () => {
  console.log(`http://localhost:%d`, app.get('port'));
});
