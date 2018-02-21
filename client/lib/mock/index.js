/** @format */

/**
 * Mock is a variable where you can call any property on it and it will always equal a function
 * that returns itself. This can be useful to replace a function with a mock that will noop
 * with anything you try to do with it.
 * It works by taking advantage of ES6 [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).
 *
 * @example
 * import fs from 'lib/mock';
 * fs.readDir(anything).map( anythingAsWell ).forEach( x => console.log(x) ); // will noop
 */
const mock = new Proxy(
	{},
	{
		get: function() {
			return () => this;
		},
	}
);

export default mock;
