/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ContentAppObserver } from "../../../cluster/definitions/ContentAppObserverCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ContentAppObserverInterface } from "./ContentAppObserverInterface.js";

/**
 * ContentAppObserverBehavior is the base class for objects that support interaction with {@link
 * ContentAppObserver.Cluster}.
 */
export const ContentAppObserverBehavior = ClusterBehavior
    .withInterface<ContentAppObserverInterface>()
    .for(ContentAppObserver.Cluster);

type ContentAppObserverBehaviorType = InstanceType<typeof ContentAppObserverBehavior>;
export interface ContentAppObserverBehavior extends ContentAppObserverBehaviorType {}
type StateType = InstanceType<typeof ContentAppObserverBehavior.State>;
export namespace ContentAppObserverBehavior { export interface State extends StateType {} }
