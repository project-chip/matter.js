/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationCluster } from "#clusters";
import { AccessLevel } from "#model";
import {
    AttributeServer,
    ClusterDatasource,
    EndpointInterface,
    Fabric,
    FabricScopedAttributeServer,
    FixedAttributeServer,
    Message,
    SecureSession,
    Session,
} from "#protocol";
import { AttributeId, FabricId, FabricIndex, NodeId, TlvSchema, TlvUInt8, VendorId } from "#types";
import { DUMMY_KEY } from "../support/mock-keys.js";

class MockClusterDatasource implements ClusterDatasource {
    #version = 0;
    #fabrics: Fabric[];

    constructor(fabric?: Fabric) {
        if (fabric) {
            this.#fabrics = [fabric];
        } else {
            this.#fabrics = [];
        }
    }

    get version() {
        return this.#version;
    }

    increaseVersion() {
        return ++this.#version;
    }

    changed() {}

    get fabrics() {
        return this.#fabrics;
    }
}

interface CreateOptions<T> {
    id: AttributeId;
    name: string;
    readAcl?: AccessLevel;
    writeAcl?: AccessLevel;
    schema: TlvSchema<T>;
    isWritable: boolean;
    isSubscribable: boolean;
    requiresTimedInteraction: boolean;
    initValue: T;
    defaultValue: T;
    readonly datasource: ClusterDatasource;
    getter?: (session?: Session, endpoint?: EndpointInterface, isFabricFiltered?: boolean) => T;
    setter?: (value: T, session?: Session, endpoint?: EndpointInterface) => boolean;
    validator?: (value: T, session?: Session, endpoint?: EndpointInterface) => void;
}

function withDefaults(options: Partial<CreateOptions<number>>, fabric?: Fabric) {
    return {
        id: AttributeId(1),
        name: "test",
        schema: TlvUInt8,
        isWritable: false,
        isSubscribable: false,
        requiresTimedInteraction: false,
        initValue: 3,
        defaultValue: 4,
        datasource: new MockClusterDatasource(fabric),
        ...options,
    } as CreateOptions<number>;
}

describe("AttributeServerTest", () => {
    describe("FixedAttributeServer", () => {
        function create(options: Partial<CreateOptions<number>> = {}) {
            const config = withDefaults({
                isWritable: false,
                ...options,
            });

            return new FixedAttributeServer(
                config.id,
                config.name,
                config.readAcl,
                config.writeAcl,
                config.schema,
                config.isWritable,
                config.isSubscribable,
                config.requiresTimedInteraction,
                config.initValue,
                config.defaultValue,
                config.datasource,
                config.getter,
            );
        }

        it("should return the value set in the constructor", () => {
            const server = create();
            expect(server.getLocal()).equal(3);
        });

        it("should return the value from getter", () => {
            const server = create({ getter: () => 4 });
            expect(server.getLocal()).equal(4);
        });

        it("should successfully initialize with a value", () => {
            const server = create();
            server.init(5);
            expect(server.getLocal()).equal(5);
        });
    });

    describe("AttributeServer", () => {
        let datasource: ClusterDatasource;

        function create(options: Partial<CreateOptions<number>> = {}) {
            const config = withDefaults(options);

            datasource = config.datasource;

            return new AttributeServer(
                config.id,
                config.name,
                config.readAcl,
                config.writeAcl,
                config.schema,
                config.isWritable,
                config.isSubscribable,
                config.requiresTimedInteraction,
                config.initValue,
                config.defaultValue,
                config.datasource,
                config.getter,
                config.setter,
                config.validator,
            );
        }

        it("should return the value set as initValue in the constructor", () => {
            const server = create();
            expect(server.getLocal()).equal(3);
        });

        it("should return the value set as defaultValue in the constructor when initValue is invalid", () => {
            // @ts-expect-error Test case
            const server = create({ initValue: "foo" });
            expect(server.getLocal()).equal(4);
        });

        it("should set the value locally and trigger listeners on change", () => {
            let valueTriggered: number | undefined = undefined;
            let versionTriggered: number | undefined = undefined;
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            const server = create();
            server.addValueChangeListener((value, version) => {
                valueTriggered = value;
                versionTriggered = version;
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });

            expect(server.getLocal()).equal(3);
            server.setLocal(4);
            expect(server.getLocal()).equal(4);
            expect(valueTriggered).equal(4);
            expect(versionTriggered).equal(1);
            expect(valueTriggered2).equal(4);
            expect(oldValueTriggered2).equal(3);
        });

        it("should set the value locally and trigger listeners on non change", () => {
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            const server = create({ isWritable: false });
            server.addValueChangeListener(() => {
                throw new Error("Should not be triggered.");
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });

            expect(server.getLocal()).equal(3);
            server.setLocal(3);
            expect(server.getLocal()).equal(3);
            expect(valueTriggered2).equal(3);
            expect(oldValueTriggered2).equal(3);
        });

        it("should throw an error if the value is set non locally and not writable", () => {
            const server = create({ isWritable: false });
            expect(server.getLocal()).equal(3);
            expect(() => server.set(4, {} as SecureSession)).throws('(136) Attribute "test" is not writable.');
        });

        it("should return the value from getter", () => {
            const server = create({ getter: () => 4 });
            expect(server.getLocal()).equal(4);
        });

        it("should return the value from getter also with setter but increased version on change", () => {
            let valueSet: number | undefined = undefined;
            const server = create({
                getter: () => 4,
                setter: value => {
                    valueSet = value;
                    return true;
                },
            });
            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.setLocal(5);
            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 1,
            });
            expect(valueSet).equal(5);
            expect(datasource.version).equal(1);
        });

        it("should return the value from getter also with setter but not increased version when no change", () => {
            let valueSet: number | undefined = undefined;
            const server = create({
                getter: () => 4,
                setter: value => {
                    valueSet = value;
                    return false;
                },
            });
            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.setLocal(5);
            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 0,
            });
            expect(valueSet).equal(5);
            expect(datasource.version).equal(0);
        });

        it("should return the value from getter and increased version after update", () => {
            let valueSet: number | undefined = undefined;
            const server = create({
                getter: () => 4,
                setter: value => {
                    valueSet = value;
                    return false;
                },
            });

            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.updated({} as SecureSession);
            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 1,
            });
            expect(valueSet).undefined;
            expect(datasource.version).equal(1);
        });

        it("should trigger listeners with getter also with setter but increased version on change", () => {
            let valueSet: number | undefined = undefined;
            let valueTriggered: number | undefined = undefined;
            let versionTriggered: number | undefined = undefined;
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            const server = create({
                getter: () => 4,
                setter: value => {
                    valueSet = value;
                    return true;
                },
            });
            server.addValueChangeListener((value, version) => {
                valueTriggered = value;
                versionTriggered = version;
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });
            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.setLocal(5);
            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 1,
            });
            expect(valueSet).equal(5);
            expect(valueTriggered).equal(5);
            expect(versionTriggered).equal(1);
            expect(valueTriggered2).equal(5);
            expect(oldValueTriggered2).equal(4);
            expect(datasource.version).equal(1);
        });

        it("should return the value from getter also with setter but not increased version when no change", () => {
            let valueSet: number | undefined = undefined;
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            const server = create({
                getter: () => 4,
                setter: value => {
                    valueSet = value;
                    return false;
                },
            });
            server.addValueChangeListener(() => {
                throw new Error("Should not be triggered");
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });
            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.setLocal(5);
            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 0,
            });
            expect(valueSet).equal(5);
            expect(valueTriggered2).equal(5);
            expect(oldValueTriggered2).equal(4);
            expect(datasource.version).equal(0);
        });

        it("should return the value from getter and increased version after update", () => {
            let valueSet: number | undefined = undefined;
            const server = create({
                getter: () => 4,
                setter: value => {
                    valueSet = value;
                    return false;
                },
            });
            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 0,
            });
            server.updated({} as SecureSession);
            expect(server.getWithVersion({} as SecureSession, false)).deep.equal({
                value: 4,
                version: 1,
            });
            expect(valueSet).undefined;
            expect(datasource.version).equal(1);
        });

        it("should successfully initialize with a value", () => {
            const server = create();
            server.init(5);
            expect(server.getLocal()).equal(5);
        });

        it("if initialized with undefined value the default value is used", () => {
            const server = create();
            server.init(undefined);
            expect(server.getLocal()).equal(3);
        });

        it("use getter value if initialized with undefined", () => {
            const server = create({ getter: () => 4 });
            server.init(1);
            expect(server.getLocal()).equal(4);
        });

        it("setter is not called when initialized", () => {
            let setterCalled = false;
            const server = create({
                setter: () => {
                    setterCalled = true;
                    return true;
                },
            });
            server.init(1);
            expect(setterCalled).equal(false);
        });

        it("should throw an error if init value is invalid and no default specified", () => {
            expect(() => create({ defaultValue: undefined, schema: TlvUInt8.bound({ min: 0, max: 2 }) })).throws(
                "Attribute value to initialize for test cannot be undefined.",
            );
        });

        it("should throw an error if init value and default value is invalid", () => {
            expect(() => create({ schema: TlvUInt8.bound({ min: 0, max: 2 }) })).throws(
                'Validation error for attribute "test": (ValidationOutOfBoundsError/135) Invalid value: 4 is above the maximum, 2.',
            );
        });

        it("should throw an error if set value is invalid according to schema validator", () => {
            const server = create({
                schema: TlvUInt8.bound({ min: 0, max: 3 }),
                setter: () => true,
            });
            expect(() => server.setLocal(11)).throw(
                'Validation error for attribute "test": (ValidationOutOfBoundsError/135) Invalid value: 11 is above the maximum, 3.',
            );
        });

        it("should throw an error if set value is invalid according to custom validator only on set", () => {
            const server = create({
                validator: () => {
                    throw Error("Validator error");
                },
            });
            expect(() => server.setLocal(11)).throw("Validator error");
        });
    });

    describe("FabricScopedAttributeServer", () => {
        let testFabric: Fabric;
        let datasource: ClusterDatasource;

        function create(options: Partial<CreateOptions<number>> = {}) {
            const ZERO = new Uint8Array(1);

            testFabric = new Fabric({
                fabricIndex: FabricIndex(1),
                fabricId: FabricId(1n),
                nodeId: NodeId(1n),
                rootNodeId: NodeId(2n),
                operationalId: ZERO,
                keyPair: DUMMY_KEY,
                rootPublicKey: DUMMY_KEY.publicKey,
                rootVendorId: VendorId(1),
                rootCert: ZERO,
                identityProtectionKey: ZERO,
                operationalIdentityProtectionKey: ZERO,
                intermediateCACert: ZERO,
                operationalCert: ZERO,
                label: "",
            });

            const config = withDefaults(options, testFabric);
            datasource = config.datasource;

            return new FabricScopedAttributeServer(
                config.id,
                config.name,
                config.readAcl,
                config.writeAcl,
                config.schema,
                config.isWritable,
                config.isSubscribable,
                config.requiresTimedInteraction,
                config.initValue,
                config.defaultValue,
                BasicInformationCluster,
                config.datasource,
                config.getter,
                config.setter,
                config.validator,
            );
        }

        it("should return the value set in the constructor if fabric context is empty", () => {
            const server = create();
            expect(server.getLocalForFabric(testFabric)).equal(3);
        });

        it("should return the value from fabric context if set", async () => {
            const server = create();
            await testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });
            expect(server.getLocalForFabric(testFabric)).equal(5);
        });

        it("should return the value from fabric scoped storage when changed", async () => {
            const server = create();
            await testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });
            expect(server.getLocalForFabric(testFabric)).equal(5);
        });

        it("should update the value from fabric scoped storage when set and trigger listeners", async () => {
            let valueTriggered: number | undefined = undefined;
            let versionTriggered: number | undefined = undefined;
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;
            const server = create();

            await testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            server.addValueChangeListener((value, version) => {
                valueTriggered = value;
                versionTriggered = version;
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });

            server.setLocalForFabric(7, testFabric);
            expect(server.getLocalForFabric(testFabric)).equal(7);
            expect(testFabric.getScopedClusterDataValue(BasicInformationCluster, "test")).deep.equal({ value: 7 });
            expect(valueTriggered).equal(7);
            expect(versionTriggered).equal(1);
            expect(valueTriggered2).equal(7);
            expect(oldValueTriggered2).equal(5);
            expect(datasource.version).equal(1);
        });

        it("should handle the value from fabric scoped storage when set and trigger ony external listeners", async () => {
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;

            const server = create({ isWritable: true });
            await testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            server.addValueChangeListener(() => {
                throw new Error("Should not be triggered");
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });

            server.setLocalForFabric(5, testFabric);
            expect(server.getLocalForFabric(testFabric)).equal(5);
            expect(testFabric.getScopedClusterDataValue(BasicInformationCluster, "test")).deep.equal({ value: 5 });
            expect(valueTriggered2).equal(5);
            expect(oldValueTriggered2).equal(5);
        });

        it("should throw an error if only getter is implemented but writable", () => {
            expect(() => create({ isWritable: true, getter: () => 7 })).throw(
                'Getter and setter must be implemented together for writeable fabric scoped attribute "test".',
            );
        });

        it("should throw an error when trying to get getter method value locally", async () => {
            const server = create({ getter: () => 7 });
            await testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });

            expect(() => server.getLocalForFabric(testFabric)).throw(
                'Fabric scoped attribute "test" cannot be read locally when a custom getter is defined.',
            );
        });

        it("should return value from getter when used non-locally", async () => {
            const server = create({ getter: () => 7 });
            const testSession = { associatedFabric: testFabric } as SecureSession;
            await testFabric.setScopedClusterDataValue(BasicInformationCluster, "test", { value: 5 });
            expect(server.get(testSession, true)).equal(7);
        });

        it("should use getter and setter and trigger listeners", () => {
            const server = create({
                isWritable: true,
                getter: () => 7,
                setter: () => true,
            });
            const testSession = { associatedFabric: testFabric } as SecureSession;

            let valueTriggered: number | undefined = undefined;
            let versionTriggered: number | undefined = undefined;
            let valueTriggered2: number | undefined = undefined;
            let oldValueTriggered2: number | undefined = undefined;

            server.init(undefined);
            server.addValueChangeListener((value, version) => {
                valueTriggered = value;
                versionTriggered = version;
            });
            server.addValueSetListener((newValue, oldValue) => {
                valueTriggered2 = newValue;
                oldValueTriggered2 = oldValue;
            });

            server.set(9, testSession, {} as Message);
            expect(server.get(testSession, false)).equal(7);
            expect(valueTriggered).equal(9);
            expect(versionTriggered).equal(1);
            expect(valueTriggered2).equal(9);
            expect(oldValueTriggered2).equal(7);
            expect(datasource.version).equal(1);
        });
    });
});
