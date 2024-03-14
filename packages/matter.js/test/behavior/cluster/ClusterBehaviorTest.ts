/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../../src/behavior/Behavior.js";
import { ClusterBehavior } from "../../../src/behavior/cluster/ClusterBehavior.js";
import { ActionContext } from "../../../src/behavior/context/ActionContext.js";
import { BasicInformationBehavior } from "../../../src/behavior/definitions/basic-information/BasicInformationBehavior.js";
import { LevelControlServer } from "../../../src/behavior/definitions/level-control/LevelControlServer.js";
import { NetworkCommissioningServer } from "../../../src/behavior/definitions/network-commissioning/NetworkCommissioningServer.js";
import { OnOffServer } from "../../../src/behavior/definitions/on-off/OnOffServer.js";
import { StateType } from "../../../src/behavior/state/StateType.js";
import { ElementModifier } from "../../../src/cluster/mutation/ElementModifier.js";
import { ClusterModel } from "../../../src/model/index.js";
import { EventEmitter, Observable } from "../../../src/util/Observable.js";
import { MaybePromise } from "../../../src/util/Promises.js";
import { MockEndpoint } from "../../endpoint/mock-endpoint.js";
import { My, MyBehavior, MyCluster } from "./cluster-behavior-test-util.js";

describe("ClusterBehavior", () => {
    type Match<Input, Type> = Input extends Type ? true : false;

    describe("base class", () => {
        describe("state types meet type requirement", () => {
            ClusterBehavior.State satisfies StateType;
            ClusterBehavior.State satisfies ClusterBehavior.Type["State"];
        });

        describe("meets type requirements", () => {
            ClusterBehavior satisfies Behavior.Type;

            ({}) as ClusterBehavior["state"] satisfies InstanceType<ClusterBehavior.Type>["state"];
            ({}) as ClusterBehavior["events"] satisfies InstanceType<ClusterBehavior.Type>["events"];

            ClusterBehavior.State satisfies ClusterBehavior.Type["State"];
            ClusterBehavior.Events satisfies ClusterBehavior.Type["Events"];

            typeof ClusterBehavior.State === "function";
            typeof ClusterBehavior.Events === "function";

            ClusterBehavior satisfies ClusterBehavior.Type;
            typeof ClusterBehavior === "function";
        });
    });

    describe("for", () => {
        it("exposes mandatory properties for enabled cluster elements", () => {
            MyBehavior satisfies { id: "myCluster" };

            ({}) as MyBehavior satisfies {
                state: {
                    reqAttr: string;
                };
            };
            expect(new MyBehavior.State().reqAttr).equals("hello");

            ({}) as MyBehavior satisfies {
                reqCmd: (request: string, state: any) => MaybePromise<string>;
                becomeAwesome?: undefined;
            };
            expect(typeof MyBehavior.prototype.reqCmd).equals("function");
            expect((MyBehavior.prototype as any).becomeAwesome).equals(undefined);

            ({}) as MyBehavior satisfies {
                events: EventEmitter & {
                    reqAttr$Change: Observable<[value: string, oldValue: string, context?: ActionContext]>;
                };
            };

            ({}) as MyBehavior satisfies {
                events: {
                    reqEv: Observable<[string, context?: ActionContext]>;
                };
            };
        });

        it("maintains ID after second for", () => {
            const ForBehavior = MyBehavior.for(MyCluster);
            ForBehavior.id satisfies "myCluster";
        });

        it("exposes optional properties for disabled cluster elements", () => {
            undefined satisfies MyBehavior["state"]["optAttr"];
            true satisfies MyBehavior["state"]["optAttr"];
            (() => true) satisfies MyBehavior["optCmd"];
            ((..._args: any[]) => true) satisfies MyBehavior["optCmd"];
            ({}) as Match<MyBehavior["events"], { optAttr$Change: {} }> satisfies false;
            ({}) as Match<MyBehavior["events"], { optEv: {} }> satisfies false;
            ({}) as Match<MyBehavior, { optCmd: (...args: any[]) => any }> satisfies true;
        });

        it("instance exposes values for enabled cluster elements", async () => {
            const endpoint = await MockEndpoint.createWith(MyBehavior);
            await endpoint.act(agent => {
                const behavior = agent.myCluster;
                expect(behavior.state.reqAttr).equals("hello");
                expect(behavior.reqCmd).is.a("function");
                expect(behavior.events.reqAttr$Change.constructor.name).equals("Emitter");
                expect(behavior.events.reqEv.constructor.name).equals("Emitter");
            });
        });

        it("instance does not expose values for disabled cluster elements", async () => {
            const endpoint = await MockEndpoint.createWith(MyBehavior);
            await endpoint.act(agent => {
                const behavior = agent.myCluster;
                expect(behavior.state.optAttr).undefined;
                expect(behavior.events.optAttr$Change?.constructor.name).equals("Emitter");
                expect(behavior.events.optEv).undefined;
            });
        });

        it("instance allows standard method override", () => {
            const Ignored = class extends MyBehavior {
                override reqCmd(request: string): string {
                    return request.toUpperCase();
                }

                override optCmd(request: boolean): boolean {
                    return !request;
                }
            };
            Ignored;
        });
    });

    describe("set", () => {
        it("recreates type", () => {
            const SetBehavior = MyBehavior.set({});
            SetBehavior.id satisfies "myCluster";
            expect(SetBehavior.id).equals("myCluster");
        });
    });

    describe("alter", () => {
        it("recreates ID", () => {
            // Test constituent parts
            MyCluster.name satisfies "MyCluster";

            const AlteredCluster = new ElementModifier(MyCluster).alter({});
            AlteredCluster.name satisfies "MyCluster";

            const BehaviorForAlteredCluster = MyBehavior.for(AlteredCluster);
            BehaviorForAlteredCluster.id satisfies "myCluster";

            // Now test all together
            const AlteredBehavior = MyBehavior.alter({});
            AlteredBehavior.id satisfies "myCluster";
            expect(AlteredBehavior.id).equals("myCluster");
        });
    });

    describe("with", () => {
        it("is satisfactory", () => {
            const AwesomeBehavior = MyBehavior.with("Awesome");

            ({}) as InstanceType<typeof AwesomeBehavior.Events> satisfies EventEmitter;
            (({}) as InstanceType<typeof AwesomeBehavior>).events satisfies EventEmitter;

            AwesomeBehavior satisfies ClusterBehavior.Type;
        });

        it("recreates ID", () => {
            const AwesomeBehavior = MyBehavior.with("Awesome");
            AwesomeBehavior.id satisfies "myCluster";
            expect(AwesomeBehavior.id).equals("myCluster");
        });

        it("adds feature elements", () => {
            const AwesomeBehavior = MyBehavior.with(My.Feature.Awesome);

            ({}) as InstanceType<typeof AwesomeBehavior> satisfies {
                state: {
                    awesomeSauce: number;
                };

                becomeAwesome(value: number): void;

                events: EventEmitter & {
                    becameAwesome: Observable<[number, ActionContext]>;
                };
            };

            expect(AwesomeBehavior.cluster.supportedFeatures).deep.equals({ awesome: true });
            expect((AwesomeBehavior.schema as ClusterModel).supportedFeatures).deep.equals(new Set(["awesome"]));
        });

        it("allows extension and base command overrides", () => {
            const AwesomeBehavior = MyBehavior.with(My.Feature.Awesome);
            class AwesomeServer extends AwesomeBehavior {
                override reqCmd(): string {
                    return "hi";
                }

                override becomeAwesome(_value: number) {}
            }
            AwesomeServer;
        });

        it("adds feature elements on NetworkCommissioningServer", () => {
            const EthernetCommissioningServer = NetworkCommissioningServer.with("EthernetNetworkInterface");

            expect(EthernetCommissioningServer.cluster.supportedFeatures.ethernetNetworkInterface).true;
            expect(EthernetCommissioningServer.cluster.supportedFeatures.wiFiNetworkInterface).false;
            expect(EthernetCommissioningServer.cluster.supportedFeatures.threadNetworkInterface).false;
        });
    });

    describe("enable", () => {
        it("enables events", () => {
            const MyBi = BasicInformationBehavior.enable({ events: { startUp: true } });
            ({}) as InstanceType<typeof MyBi> satisfies ClusterBehavior;
            (({}) as InstanceType<typeof MyBi>).events satisfies EventEmitter;

            const Events2 = MyBi.Events;
            ({}) as InstanceType<typeof Events2> satisfies EventEmitter;
        });

        it("sets defaults for newly-enabled properties", () => {
            const MyOnOffServer = OnOffServer.with("LevelControlForLighting").enable({ attributes: { onTime: true } });
            expect(new MyOnOffServer.State().onTime).equals(0);

            const MyLevelControl2 = LevelControlServer.with("Lighting");
            expect(new MyLevelControl2.State().remainingTime).equals(0);
        });
    });
});
