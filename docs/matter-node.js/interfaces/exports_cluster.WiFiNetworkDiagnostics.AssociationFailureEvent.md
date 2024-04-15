[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [WiFiNetworkDiagnostics](../modules/exports_cluster.WiFiNetworkDiagnostics.md) / AssociationFailureEvent

# Interface: AssociationFailureEvent

[exports/cluster](../modules/exports_cluster.md).[WiFiNetworkDiagnostics](../modules/exports_cluster.WiFiNetworkDiagnostics.md).AssociationFailureEvent

Body of the WiFiNetworkDiagnostics associationFailure event

**`See`**

MatterSpecification.v11.Core § 11.14.8.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAssociationFailureEvent`](../modules/exports_cluster.WiFiNetworkDiagnostics.md#tlvassociationfailureevent)\>

  ↳ **`AssociationFailureEvent`**

## Table of contents

### Properties

- [associationFailureCause](exports_cluster.WiFiNetworkDiagnostics.AssociationFailureEvent.md#associationfailurecause)
- [status](exports_cluster.WiFiNetworkDiagnostics.AssociationFailureEvent.md#status)

## Properties

### associationFailureCause

• **associationFailureCause**: [`AssociationFailureCause`](../enums/exports_cluster.WiFiNetworkDiagnostics.AssociationFailureCause.md)

The Status field shall be set to a value from the AssociationFailureCauseEnum.

**`See`**

MatterSpecification.v11.Core § 11.14.8.2.1

#### Inherited from

TypeFromSchema.associationFailureCause

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:124

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

packages/matter.js/dist/esm/cluster/definitions/WiFiNetworkDiagnosticsCluster.d.ts:140
