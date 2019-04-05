/**
 * Created by WebStorm.
 * User: MacBook
 * Date: 2019/2/22
 * Time: 4:26 PM
 */

const express = require("express");
const app = express();
const db = require("./connection");

// app.get("*", function (req, res, next) {
//
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By", ' 3.2.1');
// 	res.header("Content-Type", "application/json;charset=utf-8");
//
// 	next();
// });
app.all('*', function (req, res, next) {
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

app.get("/get_article_type", function (req, res, next) {
	db.query(
		`SELECT a.article_type_id, COUNT(a.article_type_id) as type_count, b.article_type_name as article_type_name FROM article AS a left join article_type as b on a.article_type_id = b.article_type_id GROUP BY a.article_type_id`,
		function (err, data, field) {
			if (err) throw err;
			// console.log(data);
			res.status(200);
			res.json(data);
		});
});

app.get("/get_current_type_article/:id", function (req, res, next) {

	let id = req.params.id;

	db.query(
		`SELECT * FROM article AS a LEFT JOIN article_type AS t ON a.article_type_id = t.article_type_id WHERE a.article_type_id = ${id}`,
		function (err, data, field) {
			if (err) throw err;
			res.status(200);
			res.json(data);
		});
});

app.post("/send_message", function (req, res, next) {

	// res.header("Access-Control-Allow-Origin", "*");
	// res.header("Access-Control-Allow-Headers", "X-Requested-With");
	// res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	// res.header("X-Powered-By", ' 3.2.1');
	// res.header("Content-Type", "application/json;charset=utf-8");

	console.log(req.body);

});

app.listen(3000);


