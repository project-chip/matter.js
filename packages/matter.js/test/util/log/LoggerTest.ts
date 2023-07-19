/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { Level, Format, Logger, DiagnosticDictionary } from "../../../src/log/Logger.js";
import { Time } from "../../../src/time/Time.js";
import { TimeFake } from "../../../src/time/TimeFake.js";
import { ByteArray } from "../../../src/util/ByteArray.js";

const fakeTime = new TimeFake(1262679233478);

const defaultFormatter = Logger.logFormatter;
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
        Logger.logFormatter = defaultFormatter;
        Logger.logLevels = {};
        Logger.defaultLogLevel = Level.DEBUG;
    });

    afterEach(() => {
        fakeLogSink.length = 0;
    });

    afterAll(() => {
        Logger.defaultLogLevel = defaultLevel;
        Logger.log = defaultSink;
        Logger.logFormatter = defaultFormatter;
        Logger.logLevels = defaultLevels;
    });

    function logTestLine(format = Format.PLAIN) {
        Logger.format = format;
        logger.debug("test");
        return fakeLogSink.pop();
    }

    function logTestDict(format = Format.PLAIN) {
        Logger.format = format;
        logger.debug("dict test", Logger.dict({
            foo: "bar",
            biz: 1
        }));
        return fakeLogSink.pop();
    }

    describe("debug", () => {
        it("logs a message if level is debug", () => {
            const result = logTestLine();
            assert.equal(result?.level, Level.DEBUG);
        });

        it("doesn't log a message if level is above debug", () => {
            Logger.logLevels[LOGGER_NAME] = Level.INFO;

            const result = logTestLine();

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

    describe("nesting", () => {
        it("nests once", () => {
            Logger.nest(() => {
                const line = logTestLine();
                assert.ok(line);
                assert.ok(line.log.match(/⎸ test/));
            });
        });

        it("nests twice", () => {
            Logger.nest(() => {
                Logger.nest(() => {
                    const line = logTestLine();
                    assert.ok(line);
                    assert.ok(line.log.match(/⎸ {3}test/));
                });
            });
        });

        it("unnests", () => {
            // "true" is for eslint
            Logger.nest(() => { true });
            const line = logTestLine();
            assert.ok(line);
            assert.equal(line.log.indexOf("⎸"), -1);
        })
    })

    describe("plainFormat", () => {
        it("formats lines correctly", () => {
            const result = logTestLine();

            assert.equal(result?.log, "2010-01-05 08:13:53.478 DEBUG UnitTest test");
        });

        it("formats keys correctly", () => {
            const result = logTestDict();

            assert.equal(result?.log, "2010-01-05 08:13:53.478 DEBUG UnitTest dict test foo: bar biz: 1")
        });

        it("accepts multiple values", () => {
            logger.debug("value1", "value2");
            const result = fakeLogSink.pop();

            assert.equal(result?.log, "2010-01-05 08:13:53.478 DEBUG UnitTest value1 value2");
        });

        it("converts ByteArray to hex strings", () => {
            logger.debug(ByteArray.fromHex("00deadbeef"));
            const result = fakeLogSink.pop();

            assert.equal(result?.log, "2010-01-05 08:13:53.478 DEBUG UnitTest 00deadbeef");
        });

        it("accepts custom formatters", () => {
            Logger.logFormatter = (_now, _level, _logger, values) => values[0].toString();

            logger.debug("test");
            const result = fakeLogSink.pop();

            assert.equal(result?.log, "test");
        });

        it("logs error stack traces", () => {
            logger.error("Uh", new Error("oh"));
            const result = fakeLogSink.pop();

            const lines = `${result?.log}`.split("\n");
            assert.ok(lines.length > 1);
            assert.equal(lines[0], "2010-01-05 08:13:53.478 ERROR UnitTest Uh oh");
        });

        it("handles missing stack traces", () => {
            const error = new Error("oh");
            delete error.stack;

            logger.error("Uh", error);
            const result = fakeLogSink.pop();

            assert.equal(result?.log, "2010-01-05 08:13:53.478 ERROR UnitTest Uh (details unavailable)");
        })
    });

    describe("ansiFormat", () => {
        it("format lines correctly", () => {
            const result = logTestLine(Format.ANSI);

            assert.equal(result?.log, "\u001b[37m\u001b[2m2010-01-05 08:13:53.478 DEBUG\u001b[0m \u001b[37m\u001b[1mUnitTest            \u001b[0m \u001b[37mtest\u001b[0m");
        });

        it("formats keys correctly", () => {
            const result = logTestDict(Format.ANSI);

            assert.equal(result?.log, "\u001b[37m\u001b[2m2010-01-05 08:13:53.478 DEBUG\u001b[0m \u001b[37m\u001b[1mUnitTest            \u001b[0m \u001b[37mdict test \u001b[34mfoo:\u001b[37m bar \u001b[34mbiz:\u001b[37m 1\u001b[0m");
        });

        it("truncates facility", () => {
            Logger.format = Format.ANSI;
            const logger = Logger.get("ThisIsAFacilityWithAReallyLongName");
            logger.debug("test");
            const result = fakeLogSink.pop();
            assert.equal(result?.log, "\u001b[37m\u001b[2m2010-01-05 08:13:53.478 DEBUG\u001b[0m \u001b[37m\u001b[1mThisIsAFac~yLongName\u001b[0m \u001b[37mtest\u001b[0m");
        });
    });

    describe("htmlFormat", () => {
        it("formats lines correctly", () => {
            const result = logTestLine(Format.HTML);

            assert.equal(result?.log, "<span class=\"matter-log-matter-log-line\"><span class=\"matter-log-time\">2010-01-05 08:13:53.478</span> <span class=\"matter-log-level\">DEBUG</span> <span class=\"matter-log-facility\">UnitTest</span> <span class=\"matter-log-value\">test</span></span>");
        });

        it("formats keys correctly", () => {
            const result = logTestDict(Format.HTML);

            assert.equal(result?.log, "<span class=\"matter-log-matter-log-line\"><span class=\"matter-log-time\">2010-01-05 08:13:53.478</span> <span class=\"matter-log-level\">DEBUG</span> <span class=\"matter-log-facility\">UnitTest</span> <span class=\"matter-log-value\">dict test</span> <span class=\"matter-log-key\">foo:</span> <span class=\"matter-log-value\">bar</span> <span class=\"matter-log-key\">biz:</span> <span class=\"matter-log-value\">1</span></span>");
        });
    });

    describe("setFormat", () => {
        it("throws if format is unknown", () => {
            let message;
            try {
                Logger.format = "foo";
            } catch (e: unknown) {
                message = (<any>e).message;
            }
            assert.equal(message, 'Unsupported log format "foo"');
        })
    });

    describe("toJSON", () => {
        it("works", () => {
            assert.equal(Logger.toJSON("foo"), '"foo"');
        });

        it("handles BigInt", () => {
            assert.equal(Logger.toJSON(BigInt(4)), '"4"');
        });
    });

    describe("DiagnosticDictionary", () => {
        it("converts to plain string", () => {
            assert.equal(Logger.dict({ foo: "bar", biz: true }).toString(), "foo: bar biz: true");
        });

        it("constructs empty", () => {
            assert.equal(new DiagnosticDictionary().toString(), "");
        });

        it("formats byte array in value", () => {
            assert.equal(new DiagnosticDictionary({ bytes: new ByteArray([0x12, 0x3a, 0xbc]) }).toString(), "bytes: 123abc")
        });
    });

    function itUsesCorrectConsoleMethod(sourceName: string, sinkName: string = sourceName) {
        it(`maps logger.${sourceName} to console.${sinkName}`, () => {
            Logger.log = defaultSink;

            const actualConsole = (<any>Logger.log).console;
            let result: string | undefined = undefined;
            let calls = 0;
            const mock = (message: string) => {
                calls++;
                result = message;
            };

            try {
                (<any>Logger.log).console = {
                    [sinkName]: mock
                };
                (<any>logger)[sourceName].call(logger, "test");
            } finally {
                (<any>Logger.log).console = actualConsole;
            }

            assert.equal(calls, 1);
            assert.equal(result, `2010-01-05 08:13:53.478 ${sourceName.toUpperCase()} UnitTest test`);
        });
    }

    describe("console logging", () => {
        itUsesCorrectConsoleMethod("debug");
        itUsesCorrectConsoleMethod("info");
        itUsesCorrectConsoleMethod("warn");
        itUsesCorrectConsoleMethod("error");
        itUsesCorrectConsoleMethod("fatal", "error");
    });
});
