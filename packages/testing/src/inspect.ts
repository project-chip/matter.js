/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import { chip } from "./chip/chip.js";
import { InvalidPicsExpressionError, PicsExpression } from "./chip/pics-expression.js";
import { createNodejsMocha } from "./nodejs.js";
import { TestRunner } from "./runner.js";
import { TestDescriptor } from "./test-descriptor.js";

/**
 * Dump test details to the console.
 */
export function inspect(descriptor: TestDescriptor, prefix = "", path?: string) {
    const { members } = descriptor;
    if (!members?.length) {
        return;
    }

    for (const member of members) {
        let title = member.name;

        let submembers = member.members ?? [];

        let steps: undefined | number;
        if (submembers.length) {
            if (member.kind === "py" || member.kind === "yaml" || member.kind === "manual") {
                steps = submembers.length;
                submembers = [];
            } else {
                title = colors.bold(title);
            }
        }

        if (member.isDisabled) {
            title = colors.dim(title);
        }

        if (member.kind !== "suite") {
            title = `${title} ${colors.dim.yellow(member.kind)}`;
        }

        if (steps) {
            title = `${title} ${colors.dim.yellow(`(${steps} steps)`)}`;
        }

        if (member.pics) {
            try {
                const expr = new PicsExpression(member.pics);
                if (expr.evaluate(chip.pics)) {
                    title = `${title} ${colors.dim.green(member.pics)}`;
                } else {
                    title = `${title} ${colors.dim.red(member.pics)}`;
                }
            } catch (e) {
                if (e instanceof InvalidPicsExpressionError) {
                    title = `${title} ${colors.dim.strikethrough.red(member.pics)}`;
                } else {
                    throw e;
                }
            }
        }

        if (member.path && member.path !== path) {
            title = `${title} ${colors.dim.blueBright(member.path)}`;
        }

        if (member.kind === "manual") {
            title = colors.strikethrough(title);
        }

        console.log(prefix, title);

        if (submembers.length) {
            inspect(member, `${prefix}    `, member.path ?? path);
        }
    }
}

/**
 * Obtain a descriptor describing configured tests.
 *
 * This is the same as {@link Mocha.suite.descriptor} except it includes unused CHIP tests if loaded.
 */
export async function defaultDescriptor(runner: TestRunner) {
    const mocha = await createNodejsMocha(runner, "esm");

    let descriptor = { ...mocha.suite.descriptor };

    if (chip.isInitialized) {
        const used = new Set<TestDescriptor>();
        TestDescriptor.visit(descriptor, descriptor => {
            used.add(descriptor);
        });

        let unused = TestDescriptor.filter(chip.tests.descriptor, (descriptor, recurse) => {
            if (descriptor.kind === "py" || descriptor.kind === "yaml") {
                if (used.has(descriptor)) {
                    return;
                }
            }

            const result = recurse();
            if (!result || (result.kind === "suite" && !result.members?.length)) {
                return;
            }

            return result;
        });

        if (unused) {
            unused = {
                ...unused,
                name: "CHIP (unused)",
            };

            TestDescriptor.visit(unused, descriptor => {
                descriptor.isDisabled = true;
            });

            descriptor = {
                ...descriptor,
                members: descriptor.members ? [...descriptor.members, unused] : [unused],
            };
        }
    }

    return descriptor;
}
