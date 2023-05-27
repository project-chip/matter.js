[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / NetworkCommissioningStatus

# Enumeration: NetworkCommissioningStatus

[cluster](../modules/cluster.md).NetworkCommissioningStatus

**`See`**

[MatterApplicationClusterSpecificationV1_0](../interfaces/spec.MatterApplicationClusterSpecificationV1_0.md) § 11.8.6.5

## Table of contents

### Enumeration Members

- [AuthFailure](cluster.NetworkCommissioningStatus.md#authfailure)
- [BoundsExceeded](cluster.NetworkCommissioningStatus.md#boundsexceeded)
- [DuplicateNetworkID](cluster.NetworkCommissioningStatus.md#duplicatenetworkid)
- [IPBindFailed](cluster.NetworkCommissioningStatus.md#ipbindfailed)
- [IPV6Failed](cluster.NetworkCommissioningStatus.md#ipv6failed)
- [NetworkIDNotFound](cluster.NetworkCommissioningStatus.md#networkidnotfound)
- [NetworkNotFound](cluster.NetworkCommissioningStatus.md#networknotfound)
- [OtherConnectionFailure](cluster.NetworkCommissioningStatus.md#otherconnectionfailure)
- [OutOfRange](cluster.NetworkCommissioningStatus.md#outofrange)
- [RegulatoryError](cluster.NetworkCommissioningStatus.md#regulatoryerror)
- [Success](cluster.NetworkCommissioningStatus.md#success)
- [UnknownError](cluster.NetworkCommissioningStatus.md#unknownerror)
- [UnsupportedSecurity](cluster.NetworkCommissioningStatus.md#unsupportedsecurity)

## Enumeration Members

### AuthFailure

• **AuthFailure** = ``7``

Cannot associate due to authentication failure.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L42)

___

### BoundsExceeded

• **BoundsExceeded** = ``2``

A collection would exceed its size limit.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L27)

___

### DuplicateNetworkID

• **DuplicateNetworkID** = ``4``

The NetworkID is already among the collection of added networks.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L33)

___

### IPBindFailed

• **IPBindFailed** = ``11``

Failure to bind Wi-Fi <-> IP interfaces.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L54)

___

### IPV6Failed

• **IPV6Failed** = ``10``

Failure to generate an IPv6 address.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L51)

___

### NetworkIDNotFound

• **NetworkIDNotFound** = ``3``

The NetworkID is not among the collection of added networks.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L30)

___

### NetworkNotFound

• **NetworkNotFound** = ``5``

Cannot find AP: SSID Not found.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L36)

___

### OtherConnectionFailure

• **OtherConnectionFailure** = ``9``

Other association failure.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L48)

___

### OutOfRange

• **OutOfRange** = ``1``

Value Outside Range.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L24)

___

### RegulatoryError

• **RegulatoryError** = ``6``

Cannot find AP: Mismatch on band/channels/regulatory domain / 2.4GHz vs 5GHz.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L39)

___

### Success

• **Success** = ``0``

OK, no error.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L22)

___

### UnknownError

• **UnknownError** = ``12``

Unknown error.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L57)

___

### UnsupportedSecurity

• **UnsupportedSecurity** = ``8``

Cannot associate due to unsupported security mode.

#### Defined in

[packages/matter.js/src/cluster/NetworkCommissioningCluster.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/NetworkCommissioningCluster.ts#L45)
