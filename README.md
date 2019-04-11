# Miami Heat HTML to PDF

Custom pages for Miami Heat invoicing system.

### Prerequisites

Only a code editor is needed and optionally a live server.

### Installing

- Clone the repository locally.
- Run `npm install` to install dependencies.
- In the 'src' folder you'll find the subfolders for the Simple Invoice page, Multiple Events and Payers pages and Terms & Conditions page with their raw HTML and CSS files.

### Preview as PDF in Browser

If you wish to preview the generated PDF live for each page:

- Install the "html-pdf" utility via npm by running in the command line: `npm install -g html-pdf`
- In the 'app.js' file, make sure to set the correct file path to the html file that you wish you convert and preview. To change the path to point to a different html file just update the path stored in the 'filePath' constant (line 5)
- Run in the command line: `node .`
- Open `localhost:3000` in your browser to preview the PDF
- If you make changes to the html file just refresh the browser window to recreate the PDF.

### Preview as webpage in Browser

If you wish to preview the pages in your browser you can install the "Live Server" extension in VS Code and open the index.html files with it. See more at: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

## Built With

Raw files:

- [HTML]
- [CSS]

HTML to PDF library:

- [html-pdf]

Info at: https://www.npmjs.com/package/html-pdf

## Author

- **Paola Mancía**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
