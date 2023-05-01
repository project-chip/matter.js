/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { Level, Logger } from "../../../src/log/Logger.js";
import { Time } from "../../../src/time/Time.js";
import { TimeFake } from "../../../src/time/TimeFake.js";
import { ByteArray } from "../../../src/util/ByteArray.js";

const fakeTime = new TimeFake(1262679233478);

const defaultFormatter = Logger.logFormater;
const defaultLevel = Logger.defaultLogLevel;
const defaultLevels = Logger.logLevels;
const defaultSink = Logger.log;
const fakeLogSink = new Array<{ level: Level, log: string }>();

const LOGGER_NAME = "UnitTest";

describe("Logger", () => {

    const logger = Logger.get(LOGGER_NAME);

    beforeAll(() => {
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

    afterAll(() => {
        Logger.defaultLogLevel = defaultLevel;
        Logger.log = defaultSink;
        Logger.logFormater = defaultFormatter;
        Logger.logLevels = defaultLevels;
    });

    describe("debug", () => {
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

    describe("info", () => {
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

    describe("warn", () => {
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

    describe("error", () => {
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

    describe("fatal", () => {
        it("logs a message", () => {
            logger.fatal("test");
            const result = fakeLogSink.pop();

            assert.equal(result?.level, Level.FATAL);
        });
    });

    describe("logFormat", () => {
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
            Logger.logFormater = (_now, _level, _logger, values) => values[0].toString();

            logger.debug("test");
            const result = fakeLogSink.pop();

            assert.equal(result?.log, "test");
        });
    });
});
