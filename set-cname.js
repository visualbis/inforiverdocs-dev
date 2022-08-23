const fs = require("fs");
if(CIRCLE_PROJECT_REPONAME === 'inforiverdocs-dev'){
    fs.writeFileSync("./static/CNAME", "matrix-docs-dev.inforiver.com");
} else {
    fs.writeFileSync("./static/CNAME", "docs.inforiver.com");
}

console.log("cname created")
