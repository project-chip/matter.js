/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { Level, Logger } from "../../src/log/Logger";
import { Time } from "../../src/time/Time";
import { TimeFake } from "../../src/time/TimeFake";
import { ByteArray } from "@project-chip/matter.js";

const fakeTime = new TimeFake(1262679233478);
    
const defaultFormatter = Logger.logFormater;
const defaultLevel = Logger.defaultLogLevel;
const defaultLevels = Logger.logLevels;
const defaultSink = Logger.log;
const fakeLogSink = new Array<{level: Level, log: string}>();

const LOGGER_NAME = "UnitTest";

describe("Logger", () => {

    const logger = Logger.get(LOGGER_NAME);

    before(() => {
        Time.get = () => fakeTime;

        Logger.defaultLogLevel = Level.DEBUG;
        Logger.log = (level, log) => fakeLogSink.push({ level, log });
    });

    beforeEach(() => {
        Logger.logFormater = defaultFormatter;
        Logger.logLevels = {};
        Logger.defaultLogLevel = Level.DEBUG;
    });

    afterEach(() => {
        fakeLogSink.length = 0;
    });

    after(() => {
        Logger.defaultLogLevel = defaultLevel;
        Logger.log = defaultSink;
        Logger.logFormater = defaultFormatter;
        Logger.logLevels = defaultLevels;
    });

    context("debug", () => {
        it("logs a message if level is debug", () => {
            logger.debug("test");
            const result = fakeLogSink.pop();

            assert.equal(result?.level, Level.DEBUG);
        });

        it("doesn't log a message if level is above debug", () => {
            Logger.logLevels[LOGGER_NAME] = Level.INFO;

            logger.debug("test");
            const result = fakeLogSink.pop();

            assert.equal(result, undefined);
        });
    });

    context("info", () => {
        it("logs a message if level is info", () => {
            logger.info("test");
            const result = fakeLogSink.pop();

            assert.equal(result?.level, Level.INFO);
        });

        it("doesn't log a message if level is above info", () => {
            Logger.logLevels[LOGGER_NAME] = Level.ERROR;

            logger.info("test");
            const result = fakeLogSink.pop();

            assert.equal(result, undefined);
        });
    });

    context("warn", () => {
        it("logs a message if level is warn", () => {
            logger.warn("test");
            const result = fakeLogSink.pop();

            assert.equal(result?.level, Level.WARN);
        });

        it("doesn't log a message if level is above warn", () => {
            Logger.logLevels[LOGGER_NAME] = Level.ERROR;

            logger.warn("test");
            const result = fakeLogSink.pop();

            assert.equal(result, undefined);
        });
    });

    context("error", () => {
        it("logs a message if level is error", () => {
            logger.error("test");
            const result = fakeLogSink.pop();

            assert.equal(result?.level, Level.ERROR);
        });

        it("doesn't log a message if level is above error", () => {
            Logger.logLevels[LOGGER_NAME] = Level.FATAL;

            logger.error("test");
            const result = fakeLogSink.pop();

            assert.equal(result, undefined);
        });
    });

    context("fatal", () => {
        it("logs a message", () => {
            logger.fatal("test");
            const result = fakeLogSink.pop();

            assert.equal(result?.level, Level.FATAL);
        });
    });

    context("logFormat", () => {
        it("formats correctly the log", () => {
            logger.debug("test");
            const result = fakeLogSink.pop();

            assert.equal(result?.log, "2010-01-05 08:13:53.478 DEBUG UnitTest test");
        });

        it("accepts multiple values", () => {
            logger.debug("value1", "value2");
            const result = fakeLogSink.pop();

            assert.equal(result?.log, "2010-01-05 08:13:53.478 DEBUG UnitTest value1 value2");
        });

        it("converts Buffer to hex strings", () => {
            logger.debug(ByteArray.fromHex("00deadbeef"));
            const result = fakeLogSink.pop();

            assert.equal(result?.log, "2010-01-05 08:13:53.478 DEBUG UnitTest 00deadbeef");
        });

        it("accepts custom formatters", () => {
            Logger.logFormater = (now, level, logger, values) => values[0].toString();

            logger.debug("test");
            const result = fakeLogSink.pop();

            assert.equal(result?.log, "test");
        });
    });
});
