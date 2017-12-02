var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), //写成绝对路径的形式 resove 相当于 join ,压缩在dist文件夹下 
    }
};