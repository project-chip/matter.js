import { readdirSync, rmSync, statSync } from "fs";

function readDirs(baseDir) {
    return readdirSync(baseDir)
        .filter(dir => !dir.startsWith(".") && statSync(`${baseDir}/${dir}`).isDirectory())
        .map(dir => `${baseDir}/${dir}`);
}

rmSync("package-lock.json", { force: true });

[".", ...readDirs("packages"), ...readDirs("support")].forEach(dir =>
    rmSync(`${dir}/node_modules`, { recursive: true, force: true }),
);
