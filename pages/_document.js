import Document, { Head, Main, NextScript } from 'next/document';

export default class App extends Document {
    render() {
        return (
            <html>
                <body>    
                    <Head>
                        <title>NextJS test project</title>
                        <link rel="stylesheet" href="/_next/static/style.css"/>
                    </Head>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
