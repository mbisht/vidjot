if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI:
    'mongodb://mayank:mayank@ds133360.mlab.com:33360/vidjot-prod'}
} else {
  module.exports = {mongoURI:'mongodb://localhost/vidjot-dev'}
}