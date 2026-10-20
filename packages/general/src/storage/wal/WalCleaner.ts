/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Directory } from "../../fs/Directory.js";
import { type WalCommitId, parseSegmentFilename } from "./WalCommit.js";

/**
 * Prunes old WAL segments that have been fully captured in a snapshot.
 */
export class WalCleaner {
    readonly #walDir: Directory;

    constructor(walDir: Directory) {
        this.#walDir = walDir;
    }

    /**
     * Remove WAL segments where all commits are ≤ {@link keepFrom}, the commit of the oldest snapshot that must stay
     * restorable.
     *
     * A segment is safe to delete only if its segment number is strictly less than the segment of {@link keepFrom}
     * (since that segment itself may have later commits that the snapshot does not contain).
     */
    async run(keepFrom: WalCommitId): Promise<void> {
        if (!(await this.#walDir.exists())) {
            return;
        }

        const toDelete: { name: string; segment: number }[] = [];

        for await (const entry of this.#walDir.entries()) {
            if (entry.kind !== "file") continue;
            const segment = parseSegmentFilename(entry.name);
            if (segment === undefined) continue;

            if (segment < keepFrom.segment) {
                toDelete.push({ name: entry.name, segment });
            }
        }

        // Delete oldest first
        toDelete.sort((a, b) => a.segment - b.segment);
        for (const { name } of toDelete) {
            await this.#walDir.file(name).delete();
        }
    }
}
