/**
 * Created by WebStorm.
 * User: MacBook
 * Date: 2019/2/22
 * Time: 4:26 PM
 */

const express = require("express");
const app = express();
const db = require("./connection");

app.get("*", function (req, res, next) {

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");

	next();
});

app.get("/get_nav_data", function (req, res, next) {
	db.query(`SELECT * FROM nav`, function (err, data, field) {
		if (err) throw err;
		res.status(200);
		res.json(data);
		console.log(data);
	});
});

app.get("/get_article_data", function (req, res, next) {
	db.query(`SELECT * FROM article`, function (err, data, field) {
		if (err) throw err;
		res.status(200);
		res.json(data);
	});
});

app.listen(3000);


