[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [WiFiNetworkDiagnostics](../modules/cluster_export.WiFiNetworkDiagnostics.md) / AssociationFailureEvent

# Interface: AssociationFailureEvent

[cluster/export](../modules/cluster_export.md).[WiFiNetworkDiagnostics](../modules/cluster_export.WiFiNetworkDiagnostics.md).AssociationFailureEvent

Body of the WiFiNetworkDiagnostics associationFailure event

**`See`**

MatterSpecification.v11.Core § 11.14.8.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAssociationFailureEvent`](../modules/cluster_export.WiFiNetworkDiagnostics.md#tlvassociationfailureevent)\>

  ↳ **`AssociationFailureEvent`**

## Table of contents

### Properties

- [associationFailureCause](cluster_export.WiFiNetworkDiagnostics.AssociationFailureEvent.md#associationfailurecause)
- [status](cluster_export.WiFiNetworkDiagnostics.AssociationFailureEvent.md#status)

## Properties

### associationFailureCause

• **associationFailureCause**: [`AssociationFailureCause`](../enums/cluster_export.WiFiNetworkDiagnostics.AssociationFailureCause.md)

The Status field shall be set to a value from the AssociationFailureCauseEnum.

**`See`**

MatterSpecification.v11.Core § 11.14.8.2.1

#### Inherited from

TypeFromSchema.associationFailureCause

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:157](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L157)

___

### status

• **status**: `number`

The Status field shall be set to the Status Code value that was present in the last frame related to
association where Status Code was not equal to zero and which caused the failure of a last trial attempt, if
this last failure was due to one of the following Management frames:

  • Association Response (Type 0, Subtype 1)

  • Reassociation Response (Type 0, Subtype 3)

  • Authentication (Type 0, Subtype 11)

Table 9-50 "Status codes" of IEEE 802.11-2020 contains a description of all values possible.

**`See`**

MatterSpecification.v11.Core § 11.14.8.2.2

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L174)
