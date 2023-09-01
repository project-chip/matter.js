/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync } from "fs";
import wordListPath from "word-list";

export const Words = new Set(readFileSync(wordListPath, "utf-8").split("\n"));

// Acronym for "micro reciprocal degree" used by color cluster
Words.add("mireds");
