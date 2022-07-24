const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/react"]
                    }
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "build")
        },
        open: true,
        port: 8080
    }
}