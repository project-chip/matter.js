/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { bin } from "#globals.js";
import { Location } from "#location.js";
import colors from "ansi-colors";
import { stdout } from "process";
import yargs from "yargs";

bin.ls = async function (...rawArgs: unknown[]) {
    const args = await yargs(rawArgs.map(arg => `${arg}`))
        .usage("Show available objects (objects in the current path by default)")
        .option("l", { type: "boolean", description: "use a long listing format" })
        .exitProcess(false)
        .parse();

    const locations = Array<DisplayLocation>();
    for (const str of args._) {
        const input = `${str}`;
        locations.push(DisplayLocation(await this.location.at(input), input));
    }

    const files = Array<DisplayLocation>();
    const dirs = Array<DisplayLocation>();

    if (locations.length) {
        for (const location of locations) {
            if (location.kind === "directory") {
                dirs.push(location);
            } else {
                files.push(location);
            }
        }
    } else {
        for (const basename of await this.location.paths) {
            files.push(DisplayLocation(await this.location.at(basename)));
        }
    }

    let displayedSomething = false;

    if (files.length) {
        display(files, "");
        displayedSomething = true;
    }

    for (const dir of dirs) {
        if (displayedSomething) {
            stdout.write("\n");
        }
        let linePrefix;
        if (displayedSomething || dirs.length > 1) {
            stdout.write(`${dir.displayName ?? dir.basename}:\n`);
            linePrefix = "  ";
        } else {
            linePrefix = "";
        }
        display(
            (await Promise.all((await dir.paths).map(path => dir.at(path)))).map(location => DisplayLocation(location)),
            linePrefix,
        );
    }

    function display(files: DisplayLocation[], linePrefix: string) {
        if (args.l) {
            displayList(files, linePrefix);
        } else {
            const { grid, colWidth } = gridFor(files, linePrefix);
            displayGrid(grid, colWidth, linePrefix);
        }
    }

    function displayList(files: DisplayLocation[], linePrefix: string) {
        for (const location of files) {
            const { name, length } = formatName(location);

            let charsAvailable = stdout.columns ?? 80;

            const { name: longName, tag } = location;

            stdout.write(linePrefix);
            stdout.write(name);
            stdout.write(" ");
            stdout.write(colors.dim(tag));
            charsAvailable -= length + tag.length + linePrefix.length + 1;

            let { id, summary } = location;

            if (id !== undefined) {
                id = `#${id}`;
                stdout.write(colors.dim(id));
                charsAvailable -= id.length + 1;
            }

            if (longName) {
                stdout.write(' "');
                stdout.write(colors.cyan(longName));
                stdout.write('"');
                charsAvailable -= longName.length + 3;
            }

            if (summary !== undefined && charsAvailable > 10) {
                stdout.write(" ");
                charsAvailable -= 1;

                summary = summary.split("\n")[0].trim();
                if (summary.length > charsAvailable) {
                    summary = summary.slice(0, charsAvailable - 1) + "…";
                }

                stdout.write(summary);
            }
            stdout.write("\n");
        }
    }

    function gridFor(files: DisplayLocation[], linePrefix: string) {
        const columns = (stdout.columns ?? 80) - linePrefix.length;

        // Maximum width of columns + 1 for special char and +2 for between columns
        const maxWidth = maxWidthOf(files) + 3;

        let colCount = Math.floor(columns / maxWidth);
        if (colCount === 0) {
            colCount = 1;
        }

        const rowCount = Math.ceil(files.length / colCount);

        const grid = Array<DisplayLocation[]>();

        for (let i = 0; i < files.length; i++) {
            const colNum = Math.floor(i / rowCount);
            const rowNum = i - colNum * rowCount;
            (grid[rowNum] ??= [])[colNum] = files[i];
        }

        const colWidth = Math.floor(columns / colCount);

        return { grid, colWidth };
    }

    function displayGrid(grid: Array<DisplayLocation[]>, colWidth: number, linePrefix: string) {
        for (const row of grid) {
            stdout.write(linePrefix);
            for (const location of row) {
                const { name, length } = formatName(location);
                stdout.write(name);
                stdout.write("".padStart(colWidth - length));
            }
            stdout.write("\n");
        }
    }

    function formatName(location: DisplayLocation) {
        const name = location.displayName ?? location.basename;
        const length = name.length;

        if (location.kind === "directory") {
            return { name: `${colors.blue(name)}/`, length: length + 1 };
        }

        if (location.kind === "command") {
            return { name: `${colors.green(name)}*`, length: length + 1 };
        }

        return { name, length };
    }

    function maxWidthOf(locations: DisplayLocation[]) {
        return Math.max(...locations.map(file => (file.displayName ?? file.basename).length));
    }
};

export interface DisplayLocation extends Location {
    displayName: string;
}

function DisplayLocation(location: Location, displayName?: string): DisplayLocation {
    return {
        get kind() {
            return location.kind;
        },

        get basename() {
            return location.basename;
        },

        get name() {
            return location.name;
        },

        get id() {
            return location.id;
        },

        get path() {
            return location.path;
        },

        get paths() {
            return location.paths;
        },

        get tag() {
            return location.tag;
        },

        get summary() {
            return location.summary;
        },

        get definition() {
            return location.definition;
        },

        get displayName() {
            return displayName ?? location.basename;
        },

        get at() {
            return location.at;
        },

        get maybeAt() {
            return location.maybeAt;
        },
    };
}
