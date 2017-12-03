var path = require('path');

module.exports = {
    entry: {
        index: './src/app.js',
        home: './src/home.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), //写成绝对路径的形式 resove 相当于 join ,压缩在dist文件夹下 
        publicPath: 'dist/' //打包之后静态资源文件的前缀路径
    },
    module: {
        rules: [{
                test: /\.css$/, //css加载器
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/, //图片加载器
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]

    }
};