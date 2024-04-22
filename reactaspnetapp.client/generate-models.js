import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const schemaPath = path.join(__dirname, "../modelSchemas");
const outputPath = path.join(__dirname, "./src/models/dontModify");

fs.readdir(schemaPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ".json") {
      const schemaFName = path.join(schemaPath, file);
      const outputFName = path.join(
        outputPath,
        path.basename(file, ".json") + ".ts"
      );
      exec(
        `npx quicktype -s schema -o ${outputFName} ${schemaFName} --lang ts`,
        (err, stdout, stderr) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(stdout);
        }
      );
    }
  });
});
