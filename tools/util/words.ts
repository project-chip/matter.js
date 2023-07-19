/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import wordListPath from "word-list";
import { readFileSync } from "fs";

export const Words = new Set(readFileSync(wordListPath, "utf-8").split("\n"));

// Acronym for "micro reciprocal degree" used by color cluster
Words.add("mireds");
