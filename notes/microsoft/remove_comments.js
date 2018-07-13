// Given a C++program, remove comments from it.The program source is an array where source[i] is the i - th line of the source code.This represents the result of splitting the original source code string by the newline character\ n.

// In C++, there are two types of comments, line comments, and block comments.

// The string // denotes a line comment, which represents that it and rest of the characters to the right of it in the same line should be ignored.

// The string /* denotes a block comment, which represents that all characters until the next (non-overlapping) occurrence of */ should be ignored.

const removeComments = (source) => {
  const output = [];
  let newLine = [];
  let multiFlag = false;

  for (let i = 0; i < source.length; i++) {
    const line = source[i];

    for (let j = 0; j < line.length; j++) {

      if (!multiFlag && line[j] === "/" && line[j + 1] === "/") {
        update(newLine, output);
        break;
      }

      if (!multiFlag && line[j] === "/" && line[j + 1] === "*") {
        multiFlag = true;
        j++;
        continue;
      }

      if (multiFlag && line[j] === "*" && line[j + 1] === "/") {
        multiFlag = false;
        if (line[j + 2]) {
          j++;
          continue;
        } else {
          update(newLine, output);
          break;
        }

      }

      if (!multiFlag) newLine.push(line[j]);

      if (!multiFlag && j === line.length - 1) {
        update(newLine, output);
      }
    }

  }

  return output;
};

const update = (newLine, output) => {
  const stringified = newLine.join("");
  if (stringified.length > 0) {
    output.push(stringified);
  }
  newLine.length = 0;
};