/**
 * PublicController
 *
 * @description :: Server-side logic for managing public pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	showLanding: function (req, res) {

		// extras = {};
		// extras.styles = '<link rel="stylesheet" href="' + sails.config.appUrl + '/assets/nolink/styles/example1.css">' +
		// 								 '<link rel="stylesheet" href="' + sails.config.appUrl + '/assets/nolink/styles/example2.css">';
		// extras.scripts = '<script src="' + sails.config.appUrl + '/assets/nolink/styles/example1.js"></script>' +
		// 								 '<script src="' + sails.config.appUrl + '/assets/nolink/styles/example2.js"></script>';

    res.view('landing', { title: 'Welcome' });
  }
};

