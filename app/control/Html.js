import { View } from 'curvature/base/View';

export class Html extends View
{
	constructor(args, parent)
	{
		super(args, parent);

		this.template  = require('./html.tmp');
	}
}
