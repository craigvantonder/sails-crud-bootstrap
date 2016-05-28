/**
 * LatestController
 *
 * @description :: Server-side logic for managing latests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	showLatestPosts: function (req, res) {

		// extras = {};
		// extras.styles = '<link rel="stylesheet" href="' + sails.config.appUrl + '/assets/nolink/styles/example1.css">' +
		// 								 '<link rel="stylesheet" href="' + sails.config.appUrl + '/assets/nolink/styles/example2.css">';
		// extras.scripts = '<script src="' + sails.config.appUrl + '/assets/nolink/styles/example1.js"></script>' +
		// 								 '<script src="' + sails.config.appUrl + '/assets/nolink/styles/example2.js"></script>';

    res.view('latest', { title: 'Latest Posts' });
  }
};

