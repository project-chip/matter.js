/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Specification } from "#common/Specification.js";

const inspect = Symbol.for("nodejs.util.inspect.custom");

export class CrossReference implements Specification.CrossReference {
    document: Specification;
    section: string;
    private static instances = {} as { [key: string]: CrossReference };

    private constructor(definition: CrossReference.Definition) {
        if (typeof definition === "object") {
            this.document = definition.document as Specification;
            this.section = definition.section;
        } else {
            [this.document, this.section] = definition.split("§") as [Specification, string];
        }
    }

    toString() {
        return `${this.document}§${this.section}`;
    }

    static get(xref: CrossReference.Definition) {
        if (xref instanceof CrossReference) {
            return xref;
        }

        const key = typeof xref === "string" ? xref : `${xref.document}§${xref.section}`;
        const canonical = this.instances[key];
        if (canonical) {
            return canonical;
        }

        return (this.instances[key] = new CrossReference(xref));
    }

    [inspect](_depth: any, options: any, inspect: any) {
        return inspect ? inspect(this.toString(), options) : this.toString();
    }
}

export namespace CrossReference {
    export type Definition = Specification.CrossReference | `${string}§${string}`;
}
