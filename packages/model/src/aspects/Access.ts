/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isObject } from "@matter/general";
import { Aspect } from "./Aspect.js";

/**
 * Matter access levels.
 *
 * This enum needs to be in sync with the AccessControl.AccessControlEntryPrivilege enum!
 */
export enum AccessLevel {
    View = 1,
    ProxyView = 2,
    Operate = 3,
    Manage = 4,
    Administer = 5,
}

/**
 * An operational representation of "access" as defined by the Matter
 * specification.
 *
 * "Access" controls the operations a remote party may perform on a data field
 * or cluster element.
 */
export class Access extends Aspect<Access.Definition> implements Access.Ast {
    declare rw?: Access.Rw;
    declare readPriv?: Access.Privilege;
    declare writePriv?: Access.Privilege;
    declare fabric?: Access.Fabric;
    declare timed?: boolean;

    get readable() {
        return !this.rw || this.rw !== Access.Rw.Write;
    }

    get writable() {
        return !!this.rw && this.rw !== Access.Rw.Read;
    }

    get fabricScoped() {
        return this.fabric === Access.Fabric.Scoped;
    }

    get fabricSensitive() {
        return this.fabric === Access.Fabric.Sensitive;
    }

    override get empty() {
        return (
            (!this.rw || this.rw === Access.Rw.Read) && !this.fabric && !this.readPriv && !this.writePriv && !this.timed
        );
    }

    /**
     * Determine whether this access is fully specified.  This means we know
     * whether reads and/or writes are allowed and if so the required access
     * levels.
     */
    get complete() {
        return (
            this.rw !== undefined &&
            (!this.readable || this.rw !== undefined) &&
            (!this.writable || this.rw !== undefined)
        );
    }

    /**
     * Initialize from an Access.Definition or the access control DSL defined
     * by the Matter Specification.
     */
    constructor(definition: string | Access.Definition) {
        super(definition);

        if (Array.isArray(definition)) {
            this.set(definition.flat());
        } else if (isObject(definition)) {
            Object.assign(this, definition);
        } else if (definition !== undefined && definition !== null) {
            this.set(Array.from(Access.parse(this, definition)));
        }

        this.freeze();
    }

    /**
     * Parses standard Matter access syntax into an AccessFlag set.  Extremely
     * lenient.
     */
    static parse(access: Access, definition: string) {
        definition = definition.toUpperCase();
        if (definition === "DERIVED") {
            return [];
        }

        const flags = [] as Access.Flags;
        for (let i = 0; i < definition.length; i++) {
            switch (definition[i]) {
                case "R":
                    flags.push(Access.Rw.Read);
                    break;
                case "U":
                    flags.push(Access.Fabric.Unaware);
                    break;
                case "F":
                    flags.push(Access.Fabric.Scoped);
                    break;
                case "S":
                    flags.push(Access.Fabric.Sensitive);
                    break;
                case "V":
                    flags.push(Access.Privilege.View);
                    break;
                case "O":
                    flags.push(Access.Privilege.Operate);
                    break;
                case "M":
                    flags.push(Access.Privilege.Manage);
                    break;
                case "A":
                    flags.push(Access.Privilege.Administer);
                    break;
                case "T":
                    flags.push(Access.Timed.Required);
                    break;
                case "W":
                    flags.push(Access.Rw.Write);
                    break;

                case "[":
                    // Optional write syntax.  Note only R[W] is legal but we
                    // allow for bare [W]
                    if (i < definition.length - 2 && definition[i + 1] === "W" && definition[i + 2] === "]") {
                        flags.push(Access.Rw.ReadWriteOption);
                        i += 2;
                    }
                    break;

                case "*":
                    // Deprecated syntax, again allow for *W when only R*W is
                    // legal
                    if (i < definition.length - 1 && definition[i + 1] === "W") {
                        flags.push(Access.Rw.ReadWriteOption);
                        i++;
                    }
                    break;

                case " ":
                case "\t":
                case "\n":
                case "\r":
                case "\f":
                case "\v":
                    break;

                default:
                    access.error("UNKNOWN_ACCESS_FLAG", `Unknown flag "${definition[i]}"`);
                    i++;
                    break;
            }
        }
        return flags;
    }

    /**
     * Displays access using the standard Matter syntax.
     */
    override toString() {
        const parts = [] as string[];

        if (this.rw !== undefined) {
            parts.push(this.rw);
        }

        if (this.fabric !== undefined) {
            parts.push(this.fabric);
        }

        if (this.readPriv === this.writePriv) {
            if (this.readPriv !== undefined) {
                parts.push(this.readPriv);
            }
        } else if (this.readPriv) {
            if (this.writePriv) {
                parts.push(`${this.readPriv}${this.writePriv}`);
            } else {
                parts.push(this.readPriv);
            }
        } else if (this.writePriv) {
            parts.push(this.writePriv);
        }

        if (this.timed) {
            parts.push(Access.Timed.Required);
        }

        return parts.join(" ");
    }

    private set(flags: Access.Flags) {
        flags.forEach(f => {
            switch (f) {
                case Access.Rw.Read:
                    if (!this.rw) {
                        this.rw = f;
                    }
                    break;

                case Access.Rw.Write:
                    if (!this.rw) {
                        this.rw = f;
                    } else if (this.rw === Access.Rw.Read) {
                        this.rw = Access.Rw.ReadWrite;
                    }
                    break;

                case Access.Rw.ReadWrite:
                    if (this.rw !== Access.Rw.ReadWriteOption) {
                        this.rw = f;
                    }
                    break;

                case Access.Rw.ReadWriteOption:
                    this.rw = f;
                    break;

                case Access.Fabric.Unaware:
                    this.fabric = Access.Fabric.Unaware;
                    break;

                case Access.Fabric.Scoped:
                    if (this.fabric !== Access.Fabric.Sensitive) {
                        this.fabric = f;
                    }
                    break;

                case Access.Fabric.Sensitive:
                    this.fabric = f;
                    break;

                case Access.Privilege.View:
                    this.readPriv = f;
                    break;

                case Access.Privilege.Operate:
                case Access.Privilege.Manage:
                case Access.Privilege.Administer:
                    if (!this.readPriv || Access.PrivilegeLevel[f] < Access.PrivilegeLevel[this.readPriv]) {
                        this.readPriv = f;
                    }
                    if (!this.writePriv || Access.PrivilegeLevel[f] > Access.PrivilegeLevel[this.writePriv]) {
                        this.writePriv = f;
                    }
                    break;

                case Access.Timed.Required:
                    this.timed = true;
                    break;
            }
        });
    }
}

export namespace Access {
    export type Ast = {
        rw?: `${Rw}`;
        fabric?: `${Fabric}`;
        readPriv?: `${Privilege}`;
        writePriv?: `${Privilege}`;
        timed?: boolean;
    };

    /**
     * Types of read/write access.
     */
    export enum Rw {
        /**
         * Read access.
         */
        Read = "R",

        /**
         * Write access.
         */
        Write = "W",

        /**
         * Read and mandatory write acess.
         */
        ReadWrite = "RW",

        /**
         * Read and optional write access.
         */
        ReadWriteOption = "R[W]",
    }

    /**
     * Affect of fabric on access.
     */
    export enum Fabric {
        /**
         * Extension - allows for override of fabric specification.
         */
        Unaware = "U",

        /**
         * Writable only by scoped fabric.
         */
        Scoped = "F",

        /**
         * Readable and writable only by scoped fabric.
         */
        Sensitive = "S",
    }

    /**
     * Privilege required for access.
     */
    export enum Privilege {
        /**
         * View privilege.
         */
        View = "V",

        /**
         * Operate privilege.
         */
        Operate = "O",

        /**
         * Manage privilege.
         */
        Manage = "M",

        /**
         * Administer privilege.
         */
        Administer = "A",
    }

    /**
     * Reverse map of Privilege.
     */
    export enum PrivilegeName {
        V = "View",
        O = "Operate",
        M = "Manage",
        A = "Administer",
    }

    /**
     * Relative ordering of privilege.
     */
    export const PrivilegeLevel = {
        V: AccessLevel.View,
        // 2 is ProxyView, seems not in use/model right now
        O: AccessLevel.Operate,
        M: AccessLevel.Manage,
        A: AccessLevel.Administer,
    };

    /**
     * Timed access requirement.
     */
    export enum Timed {
        /**
         * Timed access required.
         */
        Required = "T",
    }

    /**
     * All atomic access control values.
     */
    export type Flag = Rw | Fabric | Privilege | Timed;

    /**
     * A defined set of access control values.
     */
    export type Flags = Flag[];

    export const R = Rw.Read;
    export const W = Rw.Write;
    export const RW = Rw.ReadWrite;
    export const RWo = Rw.ReadWriteOption;

    export const U = Fabric.Unaware;
    export const F = Fabric.Scoped;
    export const S = Fabric.Sensitive;

    export const V = Privilege.View;
    export const O = [Privilege.Operate] as [Privilege.Operate];
    export const M = [Privilege.Manage] as [Privilege.Manage];
    export const A = [Privilege.Administer] as [Privilege.Administer];
    export const VO = [Privilege.View, Privilege.Operate] as [Privilege.View, Privilege.Operate];
    export const VM = [Privilege.View, Privilege.Manage] as [Privilege.View, Privilege.Manage];
    export const VA = [Privilege.View, Privilege.Administer] as [Privilege.View, Privilege.Administer];
    export const OM = [Privilege.Operate, Privilege.Manage] as [Privilege.Operate, Privilege.Manage];
    export const OA = [Privilege.Operate, Privilege.Administer] as [Privilege.Operate, Privilege.Administer];
    export const MA = [Privilege.Manage, Privilege.Administer] as [Privilege.Manage, Privilege.Administer];

    export const T = Timed.Required;

    /**
     * All valid privilege tags.
     */
    export type Authorization =
        | typeof V
        | typeof VO
        | typeof VM
        | typeof VA
        | typeof O
        | typeof OM
        | typeof OA
        | typeof M
        | typeof MA
        | typeof A;

    /**
     * All valid timed tags.
     */
    export type TimedTag = typeof T;

    /**
     * Defines access as defined in the Matter 1.1 specification.
     *
     * In TypeScript and JavaScript, definitions adhering to this type look
     * like `[ RW, VA ]` or `[ Access.Rw.W, Access.Privilege.Operate ]`.
     */
    export type Definition = Ast | (Flag | Authorization)[] | string | undefined;
}

export namespace Access {
    export const Default = new Access({
        rw: Access.RW,
        readPriv: Access.Privilege.View,
        writePriv: Access.Privilege.Operate,
    });
}
