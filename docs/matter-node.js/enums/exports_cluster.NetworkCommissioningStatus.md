[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / NetworkCommissioningStatus

# Enumeration: NetworkCommissioningStatus

[exports/cluster](../modules/exports_cluster.md).NetworkCommissioningStatus

**`See`**

MatterApplicationClusterSpecificationV1_0 § 11.8.6.5

## Table of contents

### Enumeration Members

- [AuthFailure](exports_cluster.NetworkCommissioningStatus.md#authfailure)
- [BoundsExceeded](exports_cluster.NetworkCommissioningStatus.md#boundsexceeded)
- [DuplicateNetworkID](exports_cluster.NetworkCommissioningStatus.md#duplicatenetworkid)
- [IPBindFailed](exports_cluster.NetworkCommissioningStatus.md#ipbindfailed)
- [IPV6Failed](exports_cluster.NetworkCommissioningStatus.md#ipv6failed)
- [NetworkIDNotFound](exports_cluster.NetworkCommissioningStatus.md#networkidnotfound)
- [NetworkNotFound](exports_cluster.NetworkCommissioningStatus.md#networknotfound)
- [OtherConnectionFailure](exports_cluster.NetworkCommissioningStatus.md#otherconnectionfailure)
- [OutOfRange](exports_cluster.NetworkCommissioningStatus.md#outofrange)
- [RegulatoryError](exports_cluster.NetworkCommissioningStatus.md#regulatoryerror)
- [Success](exports_cluster.NetworkCommissioningStatus.md#success)
- [UnknownError](exports_cluster.NetworkCommissioningStatus.md#unknownerror)
- [UnsupportedSecurity](exports_cluster.NetworkCommissioningStatus.md#unsupportedsecurity)

## Enumeration Members

### AuthFailure

• **AuthFailure** = ``7``

Cannot associate due to authentication failure.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:25

___

### BoundsExceeded

• **BoundsExceeded** = ``2``

A collection would exceed its size limit.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:15

___

### DuplicateNetworkID

• **DuplicateNetworkID** = ``4``

The NetworkID is already among the collection of added networks.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:19

___

### IPBindFailed

• **IPBindFailed** = ``11``

Failure to bind Wi-Fi <-> IP interfaces.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:33

___

### IPV6Failed

• **IPV6Failed** = ``10``

Failure to generate an IPv6 address.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:31

___

### NetworkIDNotFound

• **NetworkIDNotFound** = ``3``

The NetworkID is not among the collection of added networks.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:17

___

### NetworkNotFound

• **NetworkNotFound** = ``5``

Cannot find AP: SSID Not found.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:21

___

### OtherConnectionFailure

• **OtherConnectionFailure** = ``9``

Other association failure.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:29

___

### OutOfRange

• **OutOfRange** = ``1``

Value Outside Range.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:13

___

### RegulatoryError

• **RegulatoryError** = ``6``

Cannot find AP: Mismatch on band/channels/regulatory domain / 2.4GHz vs 5GHz.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:23

___

### Success

• **Success** = ``0``

OK, no error.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:11

___

### UnknownError

• **UnknownError** = ``12``

Unknown error.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:35

___

### UnsupportedSecurity

• **UnsupportedSecurity** = ``8``

Cannot associate due to unsupported security mode.

#### Defined in

packages/matter.js/dist/cjs/cluster/NetworkCommissioningCluster.d.ts:27
