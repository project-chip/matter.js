[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / NetworkCommissioningStatus

# Enumeration: NetworkCommissioningStatus

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).NetworkCommissioningStatus

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.8.5.3

## Table of contents

### Enumeration Members

- [AuthFailure](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#authfailure)
- [BoundsExceeded](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#boundsexceeded)
- [DuplicateNetworkId](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#duplicatenetworkid)
- [IpBindFailed](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#ipbindfailed)
- [Ipv6Failed](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#ipv6failed)
- [NetworkIdNotFound](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#networkidnotfound)
- [NetworkNotFound](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#networknotfound)
- [OtherConnectionFailure](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#otherconnectionfailure)
- [OutOfRange](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#outofrange)
- [RegulatoryError](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#regulatoryerror)
- [Success](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#success)
- [UnknownError](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#unknownerror)
- [UnsupportedSecurity](cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md#unsupportedsecurity)

## Enumeration Members

### AuthFailure

• **AuthFailure** = ``7``

Cannot associate due to authentication failure

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:123](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L123)

___

### BoundsExceeded

• **BoundsExceeded** = ``2``

A collection would exceed its size limit

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:98](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L98)

___

### DuplicateNetworkId

• **DuplicateNetworkId** = ``4``

The NetworkID is already among the collection of added networks

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:108](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L108)

___

### IpBindFailed

• **IpBindFailed** = ``11``

Failure to bind Wi-Fi <-> IP interfaces

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:143](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L143)

___

### Ipv6Failed

• **Ipv6Failed** = ``10``

Failure to generate an IPv6 address

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:138](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L138)

___

### NetworkIdNotFound

• **NetworkIdNotFound** = ``3``

The NetworkID is not among the collection of added networks

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:103](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L103)

___

### NetworkNotFound

• **NetworkNotFound** = ``5``

Cannot find AP: SSID Not found

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L113)

___

### OtherConnectionFailure

• **OtherConnectionFailure** = ``9``

Other association failure

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:133](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L133)

___

### OutOfRange

• **OutOfRange** = ``1``

Value Outside Range

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:93](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L93)

___

### RegulatoryError

• **RegulatoryError** = ``6``

Cannot find AP: Mismatch on band/channels/regulatory domain / 2.4GHz vs 5GHz

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:118](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L118)

___

### Success

• **Success** = ``0``

OK, no error

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:88](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L88)

___

### UnknownError

• **UnknownError** = ``12``

Unknown error

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:148](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L148)

___

### UnsupportedSecurity

• **UnsupportedSecurity** = ``8``

Cannot associate due to unsupported security mode

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:128](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L128)
