'use strict';
const common = require('../common');
const stream = require('stream');

const source = stream.Readable({read: () => {}});
const dest1 = stream.Writable({write: () => {}});
const dest2 = stream.Writable({write: () => {}});

source.pipe(dest1);
source.pipe(dest2);

dest1.on('unpipe', common.mustCall(() => {}));
dest2.on('unpipe', common.mustCall(() => {}));

//should be able to unpipe them in the reverse order that they were piped
source.unpipe(dest2);
source.unpipe(dest1);
