import packageProject from '@bb-cli/bb-package/dist/project';

class Package {
	startTime;

	/**
	 * Constructor to setup options
	 *
	 * @return {void}
	 */
	constructor() {
		this.sourceFolder = ['.'];
		this.options = {
			excludeDefault: true,
			buildPlugins: 'sass'
		}
	}

	/**
	 * Handles the packageProject function
	 *
	 * @return {Promise}
	 */
	createPackage() {
		this.options.output = Config.packageName;

		this.startTime = process.hrtime();
		return packageProject(this.sourceFolder, this.options);
	}

	/**
	 * Get package startingpage for showing total duration
	 *
	 * @return {array} hrtime
	 */
	getTime() {
		return this.startTime;
	}

}

export default Package;