/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package } from "#tools";
import { BackchannelCommand } from "../device/backchannel.js";
import { Subject } from "../device/subject.js";
import { Test } from "../device/test.js";
import { Container } from "../docker/container.js";
import { Docker } from "../docker/docker.js";
import { edit } from "../docker/edit.js";
import { Volume } from "../docker/volume.js";
import { afterRun, beforeRun } from "../mocha.js";
import type { TestRunner } from "../runner.js";
import { TestDescriptor, TestFileDescriptor } from "../test-descriptor.js";
import { AccessoryServer } from "./accessory-server.js";
import type { chip } from "./chip.js";
import { Constants, ContainerPaths } from "./config.js";
import { ContainerCommandPipe } from "./container-command-pipe.js";
import { PicsFile } from "./pics-file.js";
import { PythonTest } from "./python-test.js";
import { YamlTest } from "./yaml-test.js";

/**
 * Current process-wide state values.  Internal to this module.
 */
const Values = {
    isInitialized: false,
    maybeRunner: undefined as TestRunner | undefined,
    maybeMocha: undefined as Mocha | undefined,
    maybeSubject: undefined as Subject.Factory | undefined,
    maybeTest: undefined as Test | undefined,
    maybeContainer: undefined as Container | undefined,
    maybePics: undefined as PicsFile | undefined,
    maybeTests: undefined as TestDescriptor.Filesystem | undefined,
    initializedSubjects: new WeakSet<Subject>(),
    activeSubject: undefined as Subject | undefined,
    singleUseSubject: false,
    activePipes: new Set<string>(),
    closers: Array<() => Promise<void>>(),
    subjects: new Map<Subject.Factory, Record<string, Subject>>(),
    snapshots: new Map<Subject, {}>(),
    containerLifecycleInstalled: false,
    tests: new Map<TestDescriptor, Test>(),
};

/**
 * Internal state management for CHIP testing.
 */
export const State = {
    get container() {
        const container = Values.maybeContainer;

        if (container === undefined) {
            throw new Error("Docker container is not initialized");
        }

        return container;
    },

    set runner(runner: TestRunner) {
        Values.maybeRunner = runner;
    },

    get runner() {
        const runner = Values.maybeRunner;

        if (runner === undefined) {
            throw new Error("No test runner configured");
        }

        return runner;
    },

    set mocha(mocha: Mocha) {
        Values.maybeMocha = mocha;
    },

    get mocha() {
        const mocha = Values.maybeMocha;

        if (mocha === undefined) {
            throw new Error("No mocha instance configured");
        }

        return mocha;
    },

    set subject(subject: Subject.Factory) {
        Values.maybeSubject = subject;
    },

    get subject() {
        const subject = Values.maybeSubject;

        if (subject === undefined) {
            throw new Error("no default subject configured");
        }

        return subject;
    },

    get pics() {
        if (Values.maybePics === undefined) {
            throw new Error("PICS not initialized");
        }

        return Values.maybePics;
    },

    get tests() {
        if (Values.maybeTests === undefined) {
            throw new Error("CHIP test descriptor not loaded");
        }
        return Values.maybeTests;
    },

    get test() {
        if (Values.maybeTest === undefined) {
            throw new Error("No active test");
        }

        return Values.maybeTest;
    },

    get isInitialized() {
        return Values.isInitialized;
    },

    /**
     * Setup.
     */
    async initialize() {
        if (Values.isInitialized) {
            return;
        }

        const { progress } = State.runner;
        return await progress.run(`Initializing containers`, initialize);
    },

    /**
     * Teardown.
     */
    async close() {
        // Subjects deactivate automatically but may be dangling if there was an error
        await State.deactivateSubject();

        let closer;
        while ((closer = Values.closers.pop())) {
            try {
                await closer();
            } catch (e) {
                console.error("Teardown error:", e);
            }
        }
    },

    /**
     * Add cleanup logic.
     */
    onClose(fn: () => Promise<void>) {
        Values.closers.push(fn);
    },

    /**
     * Hook mocha to initialize CHIP testing.
     */
    install() {
        if (Values.containerLifecycleInstalled) {
            return;
        }

        Values.containerLifecycleInstalled = true;
        beforeRun(State.initialize);
        afterRun(State.close);
    },

    /**
     * Run a CHIP test.
     */
    async run(test: Test, args: string[], beforeTest: (subject: Subject, test: Test) => void | Promise<void>) {
        const { reporter } = State.runner;

        const subject = Values.activeSubject!;

        try {
            Values.maybeTest = test;
            await beforeTest(subject, test);
            await test.invoke(subject, reporter.beginStep.bind(reporter), args);
        } finally {
            Values.maybeTest = undefined;
        }
    },

    /**
     * Pass a backchannel command to the active subject.
     */
    backchannel(command: BackchannelCommand) {
        if (Values.activeSubject === undefined) {
            throw new Error(`Backchannel ${command.name} without active test subject`);
        }

        return Values.activeSubject.backchannel(command);
    },

    /**
     * Open a back-channel command pipe.
     */
    async openPipe(name: string) {
        if (Values.activePipes.has(name)) {
            return;
        }

        const pipe = new ContainerCommandPipe(State.container, this, name);

        await pipe.initialize();

        Values.activePipes.add(name);

        State.onClose(async () => {
            await pipe.close();
            Values.activePipes.delete(name);
        });
    },

    /**
     * Obtain a {@link Test}.
     */
    testFor(identifier: string | TestDescriptor): Test {
        if (typeof identifier === "string") {
            const maybeDescriptor = this.tests.stat(identifier)?.descriptor;
            if (maybeDescriptor === undefined) {
                throw new Error(`No such test ${identifier}`);
            }
            identifier = maybeDescriptor;
        }

        let test = Values.tests.get(identifier);
        if (!test) {
            test = createTest(identifier);
            Values.tests.set(identifier, test);
        }

        return test;
    },

    /**
     * Prepare the test environment for a subject.
     *
     * On first activation, commissions the subject.  Thereafter the subject is either already active or reactivated here.
     */
    async activateSubject(
        factory: Subject.Factory,
        startCommissioned: boolean,
        test: Test,
        beforeStart?: chip.BeforeHook,
    ) {
        let subject;
        if (startCommissioned) {
            // We cache commissioned subjects
            subject = loadSubject(factory, test.descriptor.kind);
        } else {
            // No need to cache uncommissioned subjects
            subject = factory(test.descriptor.kind ?? "unknown");
        }

        if (Values.activeSubject === subject) {
            return;
        }

        const { progress } = State.runner;

        await progress.subtask("activating subject", async () => {
            await State.container.exec(["bash", "-c", 'export GLOBIGNORE="/tmp/*_fifo_*"; rm -rf /tmp/*']);

            if (!startCommissioned) {
                // Initialize single-use subject
                await subject.initialize();
                State.onClose(subject.close.bind(subject));

                await beforeStart?.(subject, test);
                await subject.start();
            } else if (!Values.initializedSubjects.has(subject)) {
                // Initialize shared subject for first use
                await subject.initialize();
                State.onClose(subject.close.bind(subject));

                await beforeStart?.(subject, test);
                await subject.start();

                await test.initializeSubject(subject);

                const dir = storageDirFor(subject);

                // Capture state snapshot
                Values.snapshots.set(subject, await subject.snapshot());
                await State.container.exec(["bash", "-c", `mkdir -p ${dir} && cp -a /tmp/* ${dir}`]);

                Values.initializedSubjects.add(subject);
            } else {
                // Initialize shared subject for which we've cached post-initialization state
                const snapshot = Values.snapshots.get(subject);
                if (snapshot === undefined) {
                    // Internal error
                    throw new Error(`No snapshot captured for ${subject.id}`);
                }

                // Restore state snapshot
                await subject.restore(snapshot);
                await State.container.exec(["bash", "-c", `cp -a ${storageDirFor(subject)}/* /tmp`]);

                await beforeStart?.(subject, test);
                await subject.start();
            }
        });

        Values.activeSubject = subject;
        Values.singleUseSubject = !startCommissioned;
    },

    /**
     * Stop the current test subject, if any.
     *
     * This stops the subject but leaves it initialized (commissioned).  This allows us to quickly swap subjects depending
     * on the current test.
     *
     * Final teardown of subjects occurs once all tests complete.
     */
    async deactivateSubject() {
        if (Values.activeSubject === undefined) {
            return;
        }

        try {
            if (Values.singleUseSubject) {
                await Values.activeSubject.close();
            } else {
                await Values.activeSubject.stop();
            }
        } catch (e) {
            console.warn("Error deactivating test subject", e);
        } finally {
            Values.activeSubject = undefined;
        }
    },
};

/**
 * Perform one-time initialization required for CHIP testing.
 */
async function initialize() {
    await configureContainer();
    await configurePics();
    await configureTests();
    await configureNetwork();

    Values.isInitialized = true;
}

/**
 * Start a container based on the matter.js's Docker image.
 */
async function configureContainer() {
    const docker = new Docker();

    await docker.pull(Constants.imageName, Constants.platform);

    const mdnsVolume = Volume(docker, Constants.mdnsVolumeName);
    await mdnsVolume.open();

    const composition = docker.compose("matter.js", {
        image: Constants.imageName,
        platform: Constants.platform,
        binds: { [mdnsVolume.name]: "/run/dbus" },
        autoRemove: true,

        // Meh.  Don't have non-host network working yet
        network: "host", //Network(docker, Constants.networkName),
    });

    await composition.add({
        name: "dbus",
        command: ["/usr/bin/dbus-daemon", "--nopidfile", "--system", "--nofork"],
    });

    await composition.add({
        name: "mdns",
        command: ["/usr/sbin/avahi-daemon"],
    });

    Values.maybeContainer = await composition.add({
        name: "chip",
        recreate: true,
    });

    State.onClose(async () => {
        try {
            await composition.close();
        } catch (e) {
            console.error("Error terminating containers:", e);
        }

        Values.maybeContainer = undefined;
    });
}

/**
 * Create a PICS file in the container appropriate for matter.js.
 */
async function configurePics() {
    const ciPics = await State.container.read(ContainerPaths.chipPics);
    const pics = new PicsFile(ciPics, true);

    const testing = Package.tools.findPackage("@matter/testing");
    const overrides = new PicsFile(testing.resolve(Constants.localPicsOverrideFile));
    pics.patch(overrides);

    Values.maybePics = pics;

    await State.container.write(ContainerPaths.matterJsPics, pics.toString());
}

/**
 * Load tests defined in the container.
 */
async function configureTests() {
    const { container } = State;

    // Load test descriptors
    const descriptor = JSON.parse(await container.read(ContainerPaths.descriptorFile)) as TestDescriptor;
    if (!Array.isArray(descriptor.members)) {
        throw new Error(`CHIP test descriptor has no members`);
    }
    Values.maybeTests = TestDescriptor.Filesystem(descriptor);
}

/**
 * Network "configuration" consists of activating the {@link AccessoryServer} used to field backchannel commands from
 * YAML tests and rewriting hard-coded addresses in files for python tests.
 */
async function configureNetwork() {
    const accessoryServer = await AccessoryServer.create(State);

    State.onClose(async () => {
        try {
            await accessoryServer.close();
        } catch (e) {
            console.error("Error closing accessory server:", e);
        }
    });

    // CHIP has 10.10.10.5 hard-coded as IP on linux.  With host networking we would have to add that to the host.  That
    // is undesirable as its platform- and network-specific.
    //
    // We could instead NAT with the bridge network but that will require working through IPv6 networking.  That's a
    // larger task.
    //
    // Instead we just rewrite the address back to the default 127.0.0.1 used by every other platform.
    //
    // While we're at it we rewrite the port so we can rely on dynamic allocation.  This ensures multiple suites may run
    // in parallel and something unexpectedly running on 9000 doesn't interfere with us.
    await State.container.edit(
        edit.sed("s/10.10.10.5/127.0.0.1/g", `s/_PORT = 9000/_PORT = ${accessoryServer.port}/g`),
        ContainerPaths.accessoryClient,
    );
}

/**
 * Obtain a subject.  Subjects are qualified by factory and test domain.
 */
function loadSubject(factory: Subject.Factory, kind: TestDescriptor["kind"]) {
    let forFactory = Values.subjects.get(factory);
    if (forFactory === undefined) {
        Values.subjects.set(factory, (forFactory = {}));
    }

    let subject = forFactory[kind];
    if (subject === undefined) {
        subject = forFactory[kind] = factory(kind);
    }

    return subject;
}

/**
 * If you look in /connectedhomeip/src/platform/linux/CHIPLinuxStorage.h you will see default paths hard-coded to /tmp
 * (irregardless of TMPDIR).  AFAICT these "defaults" are not configurable.  This is not helpful when running multiple
 * DUTs commissioned simultaneously under different profiles.
 *
 * Further, there are various configuration options required to specify different storage pools across two different
 * CHIP certification test frameworks.
 *
 * So we don't bother even trying to specify a storage directory explicitly.  We instead make sure that /tmp is always
 * correctly configured for the active test subject.
 *
 * This works out fine because we also reset state to "first commissioned" whenever starting a new test.  Within the
 * container this means copying the files into /tmp.
 */
function storageDirFor(subject: Subject) {
    return `"/storage/${subject.id}"`;
}

/**
 * Instantiate a test.
 */
function createTest(descriptor: TestDescriptor) {
    // Instantiate tests
    if (descriptor.name === undefined) {
        throw new Error(`A CHIP test has no name`);
    }

    if (descriptor.path === undefined) {
        throw new Error(`CHIP test ${descriptor.name} has no path`);
    }

    switch (descriptor.kind) {
        case "yaml":
            return new YamlTest(descriptor as TestFileDescriptor, State.container);

        case "py":
            return new PythonTest(descriptor as TestFileDescriptor, State.container);

        default:
            throw new Error(`Cannot implement CHIP test ${descriptor.name} of kind ${descriptor.kind}`);
    }
}
