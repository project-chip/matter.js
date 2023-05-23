import * as assert from "assert";
import { ClusterServerFactory } from "../../src/cluster/ClusterServerFactory.js";
import { Cluster, GroupsCluster, IdentifyCluster, IdentifyType, OnOffCluster, ScenesCluster } from "../../src/cluster/index.js";
import { GroupId } from "../../src/datatype/GroupId.js";

describe("ClusterServerFactory", () => {
    // Violate encapsulation for testing
    const defaultHandlerProviders = (ClusterServerFactory as any).defaultHandlerProviders;
    const defaultAttributeInitialValues = (ClusterServerFactory as any).defaultAttributeInitialValues;

    describe("register", () => {
        it("registers all clusters", () => {
            assert.ok(defaultHandlerProviders.size >= 4);
        });

        it("has defaults for every cluster", () => {
            assert.equal(defaultHandlerProviders.size, defaultAttributeInitialValues.size);
        });

        describe("defaults", () => {
            // We don't test defaults comprehensively, just attempt at a
            // representative sample
            function itHasCorrectDefaultsFor(cluster: Cluster<any, any, any, any, any>, defaults: any) {
                it(`are correct for ${cluster.name}`, () =>
                    assert.deepStrictEqual(ClusterServerFactory.getDefaultAttributeInitialValues(cluster), defaults)
                );
            }

            itHasCorrectDefaultsFor(ScenesCluster, {
                sceneCount: 0,
                currentScene: 0,
                currentGroup: new GroupId(0),
                sceneValid: false,
                nameSupport: {
                    sceneNames: true
                }
            });

            itHasCorrectDefaultsFor(IdentifyCluster, {
                identifyTime: 0,
                identifyType: IdentifyType.None
            });

            itHasCorrectDefaultsFor(GroupsCluster, {
                nameSupport: {
                    groupNames: true
                }
            });

            itHasCorrectDefaultsFor(OnOffCluster, {
                onOff: false
            });
        });
    });
});