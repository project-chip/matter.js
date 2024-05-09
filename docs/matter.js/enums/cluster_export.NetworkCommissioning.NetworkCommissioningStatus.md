[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / NetworkCommissioningStatus

# Enumeration: NetworkCommissioningStatus

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).NetworkCommissioningStatus

**`See`**

MatterSpecification.v11.Core § 11.8.5.3

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

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L97)

___

### BoundsExceeded

• **BoundsExceeded** = ``2``

A collection would exceed its size limit

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L72)

___

### DuplicateNetworkId

• **DuplicateNetworkId** = ``4``

The NetworkID is already among the collection of added networks

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L82)

___

### IpBindFailed

• **IpBindFailed** = ``11``

Failure to bind Wi-Fi <-> IP interfaces

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L117)

___

### Ipv6Failed

• **Ipv6Failed** = ``10``

Failure to generate an IPv6 address

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L112)

___

### NetworkIdNotFound

• **NetworkIdNotFound** = ``3``

The NetworkID is not among the collection of added networks

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L77)

___

### NetworkNotFound

• **NetworkNotFound** = ``5``

Cannot find AP: SSID Not found

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L87)

___

### OtherConnectionFailure

• **OtherConnectionFailure** = ``9``

Other association failure

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L107)

___

### OutOfRange

• **OutOfRange** = ``1``

Value Outside Range

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L67)

___

### RegulatoryError

• **RegulatoryError** = ``6``

Cannot find AP: Mismatch on band/channels/regulatory domain / 2.4GHz vs 5GHz

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L92)

___

### Success

• **Success** = ``0``

OK, no error

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L62)

___

### UnknownError

• **UnknownError** = ``12``

Unknown error

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L122)

___

### UnsupportedSecurity

• **UnsupportedSecurity** = ``8``

Cannot associate due to unsupported security mode

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L102)
