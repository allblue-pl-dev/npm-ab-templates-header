/* ab-templates-header */
'use strict';

var fs = require('fs');
var path = require('path');


module.exports = {

    _path: null,

    name: 'Header',

    onCreate: function(tpl) {
        this._path = path.join(tpl.paths.back, 'header.html');
    },

    onBuild: function(tpl) {
        return new Promise(function(resolve, reject) {
            fs.writeFile(path.join(tpl.paths.back, 'header.html'), tpl.header.html,
                    function(err) {
                if(err) {
                    tpl.error('Cannot save header file.', err);
                    reject()
                }

                tpl.success('`header.html` saved.');
                resolve();
            });
        })
    },

};
