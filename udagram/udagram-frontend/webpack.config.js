const dotenv = require('dotenv');
dotenv.config(); 

module.exports = {
plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
      'process.env.POSTGRES_USERNAME' :  JSON.stringify(process.env.POSTGRES_USERNAME),
      'process.env.POSTGRES_PASSWORD' :  JSON.stringify(process.env.POSTGRES_PASSWORD),
      'process.env.POSTGRES_DB' :  JSON.stringify(process.env.POSTGRES_DB),
      'process.env.PORT' :  JSON.stringify(process.env.PORT),
      'process.env.URL' :  JSON.stringify(process.env.URL)

    })
],
}