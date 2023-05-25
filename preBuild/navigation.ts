const { globSync } = require('glob');
const { writeFileSync } = require('fs');
import type { MenuItem } from "@/types/navigation"

const getLatestUrl = (courseCode: string): string => {
  const coursePaths = globSync(`vyuka/*/${courseCode}/`, {cwd: "pages", posix: true});
  coursePaths.sort().reverse();
  return "/" + coursePaths[0];
}

const pages: MenuItem[] = [{
  "label": "Výuka",
  "subpages": [{
    "label": "NPRG062 – Algoritmizace",
    "href": getLatestUrl("NPRG062"),
  }, {
    "label": "NPRG030 – Programování 1",
    "href": getLatestUrl("NPRG030"),
  }, {
  }, {
    "label": "NPRG031 – Programování 2",
    "href": getLatestUrl("NPRG031"),
  }, {
  }, {
    "label": "Archiv",
    "href": "/vyuka"
  }],
}, {
  "label": "Projekty",
  "subpages": [{
    "label": "IVIS (bakalářská práce)",
    "href": "/bc",
  }, {
    "label": "ML-DEECo (diplomová práce)",
    "href": "/mgr",
  }, {
    "label": "Atletika",
    "href": "/alge",
  }]
}];

writeFileSync("./preBuild/navigation.json", JSON.stringify(pages))
console.log("navigation.json generated successfully")
