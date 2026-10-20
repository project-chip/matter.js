/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { File } from "../../fs/File.js";
import type { Bytes } from "../../util/Bytes.js";
import type { MaybeAsyncIterable } from "../../util/Streams.js";

/**
 * Replace the content of {@link file} and, if {@link fsync} is set, flush it to persistent storage before returning.
 *
 * Callers write to a temporary file and rename it afterwards.  Without the flush, a power loss after the rename can
 * leave the renamed file empty or truncated on filesystems that delay data writes.
 */
export async function writeSynced(file: File, content: MaybeAsyncIterable<Bytes | string>, fsync: boolean) {
    const handle = await file.open("wal", "w");
    try {
        for await (const chunk of content) {
            await handle.writeHandle(chunk);
        }
        if (fsync) {
            await handle.fsync();
        }
    } finally {
        await handle.close();
    }
}
