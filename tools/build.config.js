import { rm } from "fs/promises";

export async function after(project, format) {
    if (format === "cjs") {
        // TypeScript will complain the global definitions in the ESM vs
        // CommonJS versions of these files.  Delete the CommonJS ones to
        // resolve
        //await rm(project.pkg.resolve("dist/cjs/testing/mocks/logging.d.ts"));
        //await rm(project.pkg.resolve("dist/cjs/testing/global-declarations.d.ts"));
    }
}
