const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ProcurementOfficer = require("../models/procurement.officer.model");
const ProcurementManager = require("../models/procurement.manager.model");
const SiteManager = require("../models/site.manager.model");
const Supplier = require("../models/supplier.model");

/**
 * use to login users
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const loginUser = async (req, res) => {
	// * request body validation
	if (req.body) {
		const { username, password } = req.body;

		// * user inputs validation
		if (!username || !password) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		let userRole;
		if (username.includes("@manager")) {
			User = ProcurementManager;
			userRole = "manager";
		} else if (username.includes("@officer")) {
			User = ProcurementOfficer;
			userRole = "officer";
		} else if (username.includes("@sitemanager")) {
			User = SiteManager;
			userRole = "sitemanager";
		} else if (username.includes("@supplier")) {
			User = Supplier;
			userRole = "supplier";
		} else {
			return res.status(401).json({
				message: "Wrong username or password",
			});
		}

		// * user inputs validation
		if (!username || !password) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * checking for email existence
			const existingUser = await User.findOne({
				username: username,
			});

			if (!existingUser) {
				return res.status(401).json({
					message: "Wrong username or password",
				});
			}

			// * checking for password existence
			const isPasswordCorrect = await bcrypt.compare(
				password,
				existingUser.password
			);

			if (!isPasswordCorrect) {
				return res.status(401).json({
					message: "Wrong username or password",
				});
			}

			// * logging the user
			const token = jwt.sign(
				{ user: existingUser._id, type: userRole },
				process.env.JWT_SECRET
			);

			//* sending token as a cookie
			return res
				.cookie("token", token, { httpOnly: true })
				.send({ type: userRole });
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(406).send();
};

module.exports = { loginUser };
