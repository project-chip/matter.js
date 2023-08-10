/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "#matter.js/common/MatterError.js";
import { Specification } from "#matter.js/model/index.js";
import { serialize } from "#matter.js/util/String.js";
import { writeMatterFile } from "./file.js";
import { asObjectKey, wordWrap } from "./string.js";

const HEADER = `/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/`;

const INDENT = "    ";
const WRAP_WIDTH = 120;

type Documentation = {
    description?: string;
    details?: string;
    xref?: Specification.CrossReference;
};

function mapSpec(xref?: Specification.CrossReference) {
    switch (xref?.document) {
        case "core":
            return "MatterCoreSpecificationV1_1";

        case "cluster":
            return "MatterApplicationClusterSpecificationV1_1";

        case "device":
            return "MatterDeviceLibrarySpecificationV1_1";
    }
}

export abstract class Entry {
    private documentation?: Documentation;
    private docText?: string;
    public shouldGroup = false;

    constructor(protected parentBlock: Block | undefined) {}

    get isDocumented() {
        return !!(
            this.documentation?.description ||
            this.documentation?.details ||
            this.documentation?.xref ||
            this.docText
        );
    }

    /** Add a TsDoc style comment */
    document(content: string | Documentation, extra?: string) {
        if (typeof content === "string") {
            this.documentation = { details: content };
        } else {
            this.documentation = content;
        }
        this.docText = extra;
        const spec = mapSpec(this.documentation.xref);
        if (spec) {
            this.parentBlock?.file.addImport("spec/Specifications", spec);
        }
        return this;
    }

    toString(linePrefix = "") {
        return `${this.createComment(linePrefix)}${this.serialize(linePrefix)}`;
    }

    protected abstract serialize(linePrefix: string): string;

    private createComment(linePrefix: string) {
        const paragraphs = Array<string>();

        if (this.documentation?.description) {
            paragraphs.push(this.documentation.description);
        }
        if (this.documentation?.details) {
            paragraphs.push(this.documentation.details);
        }

        if (this.docText) {
            paragraphs.push(this.docText);
        }

        // Word wrap documentation
        const lines = wordWrap(paragraphs.join("\n"), WRAP_WIDTH - 3 - linePrefix.length);

        // Add xref after wrapping so we can ensure it never wraps
        const spec = mapSpec(this.documentation?.xref);
        if (spec) {
            if (lines.length) {
                lines.push("");
            }
            lines.push(`@see {@link ${spec}} § ${this.documentation?.xref?.section}`);
        }

        if (lines.length) {
            // Remove blank lines between jsdoc directives except for @see
            for (let i = 0; i < lines.length - 1; i++) {
                if (
                    lines[i][0] == "@" &&
                    lines[i + 1] == "" &&
                    lines[i + 2][0] == "@" &&
                    !lines[i + 2].startsWith("@see")
                ) {
                    lines.splice(i + 1, 1);
                }
            }

            return `${linePrefix}/**\n${lines
                .map(l => `${linePrefix} * ${l}`.trimEnd())
                .join("\n")}\n${linePrefix} */\n`;
        }

        return "";
    }
}

class Raw extends Entry {
    text: string;

    constructor(parentBlock: Block, text: {}) {
        super(parentBlock);
        this.text = text.toString();
    }

    serialize(linePrefix: string) {
        if (this.text === undefined) {
            return "";
        }
        return this.text
            .split("\n")
            .map(l => `${linePrefix}${l}`)
            .join("\n");
    }
}

class Atom extends Raw {
    constructor(parentBlock: Block, labelOrText: {}, text?: any) {
        if (text === undefined) {
            text = labelOrText.toString();
        } else {
            text = `${asObjectKey(labelOrText)}: ${text}`;
        }

        super(parentBlock, text);
    }
}

export class Block extends Entry {
    entries = Array<Entry>();
    private addBefore?: Entry;
    private definedNames = new Set<string>();

    protected indent = "";
    protected prefix = "";
    protected suffix = "";

    constructor(parentBlock: Block | undefined) {
        super(parentBlock);
    }

    get length() {
        return this.entries.length;
    }

    indexOf(entry: Entry) {
        return this.entries.indexOf(entry);
    }

    splice(start: number, deleteCount?: number) {
        return this.entries.splice(start, deleteCount);
    }

    get(index: number) {
        return this.entries[index];
    }

    override serialize(linePrefix = "") {
        const childLinePrefix = `${linePrefix}${this.indent}`;
        const serializedEntries = Array<string>();
        for (const entry of this.entries) {
            const text = entry.toString(childLinePrefix);
            if (!(entry instanceof Block) || text !== "") {
                serializedEntries.push(text);
            }
        }
        return this.layOutEntries(linePrefix, serializedEntries);
    }

    layOutEntries(linePrefix: string, serializedEntries: string[]) {
        const parts = Array<string>();
        if (this.prefix) {
            parts.push(`${linePrefix}${this.prefix}`);
        }

        let needSpace = false;
        for (let i = 0; i < serializedEntries.length; i++) {
            // Add delimiter to entry if necessary
            const entry = `${serializedEntries[i]}${this.delimiterAfter(i, serializedEntries[i])}`;

            // Separate documented and large elements from their siblings
            if (this.entries[i].isDocumented || (entry.split("\n").length > 5 && !this.entries[i].shouldGroup)) {
                if (i) {
                    parts.push("");
                }
                needSpace = true;
            } else if (needSpace) {
                parts.push("");
                needSpace = false;
            }

            if (this.entries[i].isDocumented) {
                needSpace = true;
            }

            // Add the entry
            parts.push(entry);
        }

        if (this.suffix) {
            parts.push(`${linePrefix}${this.suffix}`);
        }
        return parts.join("\n");
    }

    /** Access the (required) parent */
    get parent() {
        if (!this.parentBlock) throw new Error("Undefined parent access");
        return this.parentBlock;
    }

    /** Access the file */
    get file() {
        let b: Block = this;
        while (!(b instanceof TsFile)) {
            b = b.parent;
        }
        return b;
    }

    /** Delete from parent */
    remove() {
        if (this.parentBlock) {
            const index = this.parentBlock.indexOf(this);
            if (index !== -1) this.parentBlock.splice(index, 1);
        }
    }

    /** Add entries.  Each entry will be serialized using toString() */
    add(...entries: Entry[]) {
        // Entries usually aren't fully defined when added but they do have
        // their prefix set.  So we can attempt to extract the string name in
        // order to offer lightweight attempt at rejecting duplicate
        // identifiers
        entries.forEach(e => {
            const s = e.toString();
            let m = s.match(/^(\w+):/);
            if (!m) {
                m = s.match(
                    /\s*(?:(?:export|public|private|const)\s+)*(?:(?:function|enum|class|interface|const|var|let)\s+)(\w+)/,
                );
            }
            if (m) {
                this.nameDefined(m[1]);
            }
        });

        if (this.addBefore) {
            const index = this.entries.indexOf(this.addBefore);
            if (index !== -1) {
                this.entries.splice(index, 0, ...entries);
                return this;
            }
        }

        this.entries.push(...entries);
        return this;
    }

    /** Add raw text */
    raw(text: {}) {
        return this.add(new Raw(this, text));
    }

    /** Add a blank line */
    blank() {
        return this.raw("");
    }

    /** Add a save point that allows for out-of-order insertion */
    section() {
        const section = new Block(this);
        this.add(section);
        return section;
    }

    /** Add a block with separate statements terminated by ";" */
    statements(prefix = "", suffix = "") {
        const block = new StatementBlock(this, prefix, suffix);
        this.add(block);
        return block;
    }

    /** Add a comma-delimited block */
    expressions(prefix: string, suffix: string) {
        const block = new ExpressionBlock(this, prefix, suffix);
        this.add(block);
        return block;
    }

    /** Add a statement or expression that will be automatically delimited */
    atom(labelOrText: {}, text?: any) {
        const atom = new Atom(this, labelOrText, text);
        this.add(atom);
        return atom;
    }

    /** Add an atom or block that recreates the input value */
    value(value: any, prefix = "", suffix = "") {
        if (value === undefined) {
            return;
        }

        if (Array.isArray(value)) {
            const block = this.expressions(`${prefix}[`, `]${suffix}`);
            value.forEach(v => (v === undefined ? block.atom("null") : block.value(v)));
            return block;
        }

        if (serialize.isPrimitive(value)) {
            const serialized = serialize(value);
            if (serialized === undefined) {
                return;
            }
            return this.atom(`${prefix}${serialized}${suffix}`);
        }

        const block = this.expressions(`${prefix}{`, `}${suffix}`);
        for (const k in value) {
            block.value(value[k], `${asObjectKey(k)}: `);
        }
        return block;
    }

    /** Execute logic with block configured for specific insertion point */
    insertingBefore<T>(before: Entry, fn: () => T) {
        const oldAddBefore = this.addBefore;
        try {
            this.addBefore = before;
            return fn();
        } finally {
            this.addBefore = oldAddBefore;
        }
    }

    /** This is just a helper for guarding against duplicate definitions */
    nameDefined(name: string): void {
        if (this.definedNames.has(name)) {
            throw new InternalError(`Conflicting definitions ${name} in same scope`);
        }
        this.definedNames.add(name);
    }

    protected delimiterAfter(index: number, serialized: string): string {
        // Do not delimit functions structures that eslint will complain about
        if (serialized.match(/^(?:\s*(?:\/\*.*\*\/|export|const))*\s*(?:export)?\s*(?:enum|function|namespace)/m)) {
            return "";
        }

        if (this.isDelimited(index)) {
            return ";";
        }

        return "";
    }

    protected isDelimited(index: number) {
        return this.get(index) instanceof Atom || this.get(index) instanceof NestedBlock;
    }
}

abstract class NestedBlock extends Block {
    /** Add a TsDoc style comment */
    doc?: string | Documentation;

    constructor(parent: Block | undefined, prefix: string, suffix: string) {
        super(parent);
        this.indent = INDENT;
        this.prefix = prefix;
        this.suffix = suffix;
    }
}

class StatementBlock extends NestedBlock {
    constructor(parent: Block | undefined, prefix = "{", suffix = "}") {
        super(parent, prefix, suffix);
    }
}

// These are different methods for formatting expression blocks.  We want to
// optimize for (in order of priority) readability and size
enum ExpressionLayout {
    None,
    SingleLine,
    SingleNested,
    MultipleLines,
    Verbose,
}

function chooseExpressionLayout(lineLength: number, prefix: string, serializedEntries: string[]) {
    let currentLayout = ExpressionLayout.None;
    for (const entry of serializedEntries) {
        const multiline = entry.indexOf("\n") !== -1;

        // Any comment or assignment automatically forces verbose layout mode
        if (entry.match(/(?:\/\*|\/\/| = )/)) {
            return ExpressionLayout.Verbose;
        }

        switch (currentLayout) {
            case ExpressionLayout.None:
                if (multiline) {
                    if (prefix.endsWith("{")) {
                        // Multiline object entry always forces verbose mode
                        currentLayout = ExpressionLayout.Verbose;
                    } else {
                        // Arrays we will wrap around a single multi-line entry
                        currentLayout = ExpressionLayout.SingleNested;
                    }
                } else {
                    lineLength += entry.trim().length;
                    if (lineLength >= WRAP_WIDTH + INDENT.length) {
                        // If the entry is too long, place on a new line
                        currentLayout = ExpressionLayout.MultipleLines;
                    } else {
                        // Wrap entry on a single line
                        currentLayout = ExpressionLayout.SingleLine;
                    }
                }
                break;

            case ExpressionLayout.SingleNested:
                // If previously we saw multiple lines, any other entry forces verbose mode
                return ExpressionLayout.Verbose;

            case ExpressionLayout.SingleLine:
                if (multiline) {
                    // More than one multi-line entry always forces verbose mode
                    return ExpressionLayout.Verbose;
                }

                lineLength += entry.trim().length + 2;

                if (lineLength >= WRAP_WIDTH) {
                    // Entries do not fit on one line; move to multi-line mode
                    currentLayout = ExpressionLayout.MultipleLines;
                }

                break;

            case ExpressionLayout.MultipleLines:
                if (multiline) {
                    return ExpressionLayout.Verbose;
                }
                break;
        }
    }
    return currentLayout;
}

class ExpressionBlock extends NestedBlock {
    constructor(parent: Block, prefix: string, suffix: string) {
        super(parent, prefix, suffix);
    }

    override layOutEntries(linePrefix: string, serializedEntries: string[]) {
        let adornmentLength = linePrefix.length + this.prefix.length + this.suffix.length;
        const isArrayOrObject = this.prefix.match(/[[{]$/);
        if (isArrayOrObject) {
            adornmentLength += 2;
        }

        // Scan the entries to determine how we format the code
        const layout = chooseExpressionLayout(adornmentLength, this.prefix, serializedEntries);

        // Render optimized layouts
        switch (layout) {
            case ExpressionLayout.None:
                return `${linePrefix}${this.prefix}${this.suffix}`;

            case ExpressionLayout.SingleNested: {
                // Need to reserialize with reduced padding
                const line = this.entries[0].toString(linePrefix).trim();
                return `${linePrefix}${this.prefix}${line}${this.suffix}`;
            }

            case ExpressionLayout.SingleLine: {
                let line = serializedEntries.map(e => e.trim()).join(", ");
                if (isArrayOrObject && !this.prefix.endsWith("[") && !line.startsWith("{")) {
                    line = ` ${line} `;
                }
                return `${linePrefix}${this.prefix}${line}${this.suffix}`;
            }

            case ExpressionLayout.MultipleLines:
                return `${linePrefix}${this.prefix}\n${serializedEntries.join(",\n")}\n${linePrefix}${this.suffix}`;
        }

        // "Verbose" layout is the standard provided by super
        return super.layOutEntries(linePrefix, serializedEntries);
    }

    override delimiterAfter(index: number) {
        if (this.isDelimited(index)) {
            for (let i = index + 1; i < this.length; i++) {
                if (this.isDelimited(i)) {
                    return ",";
                }
            }
        }
        return "";
    }
}

/**
 * Quick & dirty support for code gen.  Less cumberson than e.g. TS compiler
 * AST
 */
export class TsFile extends Block {
    private imports = new Map<string, Array<string>>();
    private header!: Block;

    constructor(public name: string) {
        super(undefined);
        this.header = this.section();
        this.header.raw(HEADER);
    }

    addImport(file: string, name?: string) {
        let list = this.imports.get(file);
        if (!list) {
            list = new Array<string>();
            this.imports.set(file, list);
        }
        if (name && list.indexOf(name) === -1) {
            list.push(name);

            name = name.replace(/^\w+ as /, "");
            this.nameDefined(name);
        }
        return this;
    }

    save() {
        if (this.imports.size) {
            const importBlock = this.header.section();
            this.imports.forEach((symbols, name) => {
                if (symbols.length) {
                    const imp = importBlock.expressions("import {", `} from "${name}.js"`);
                    imp.shouldGroup = true;
                    symbols.forEach(s => imp.atom(s));
                } else {
                    importBlock.atom(`import "${name}.js"`);
                }
            });
        }

        let body = this.toString();
        if (body[body.length - 1] !== "\n") {
            body += "\n";
        }

        writeMatterFile(`${this.name}.ts`, body);
        return this;
    }
}
