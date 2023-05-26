/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// There will be an enum here.  But should ClusterIdentifier be this enum?
// During development of a new type of cluster you would not want to be
// constrained by current IDs.

// If we want to use "ClusterId" we should probably rename datatype/ClusterId.

/**
 * A numeric code from the Matter Application Cluster specification that
 * uniquely identifies a cluster.
 */
export type ClusterIdentifier = number;
