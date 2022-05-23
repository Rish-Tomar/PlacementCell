

// require('dotenv').config()
const development = {
    name:'development',
    asset_path:'./assets',
    session_cookie_key:process.env.SessionCookie,
    db:process.env.DB,
}


const production = {
    name:'production',
    asset_path:process.env.AssetsPath,
    session_cookie_key:process.env.SessionCookie,
    db:process.env.DB,

}



module.exports = eval(process.env.CODEIAL_ENVIRONMENT) == undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT);