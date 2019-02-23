/**
 * Created by WebStorm.
 * User: MacBook
 * Date: 2019/2/22
 * Time: 4:58 PM
 */

const mysql = require('mysql');

const connectionn = mysql.createConnection({
	host: "chrischen.top",
	user: "root",
	password: "root",
	database: "ChrisWebsite"
});

module.exports = connectionn;
