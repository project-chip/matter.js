[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [WiFiNetworkDiagnostics](../README.md) / AssociationFailureEvent

# Interface: AssociationFailureEvent

Body of the WiFiNetworkDiagnostics associationFailure event

## See

MatterSpecification.v11.Core § 11.14.8.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAssociationFailureEvent`](../README.md#tlvassociationfailureevent)\>

## Properties

### associationFailureCause

> **associationFailureCause**: [`AssociationFailureCause`](../enumerations/AssociationFailureCause.md)

The Status field shall be set to a value from the AssociationFailureCauseEnum.

#### See

MatterSpecification.v11.Core § 11.14.8.2.1

#### Inherited from

`TypeFromSchema.associationFailureCause`

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L157)

***

### status

> **status**: `number`

The Status field shall be set to the Status Code value that was present in the last frame related to
association where Status Code was not equal to zero and which caused the failure of a last trial attempt, if
this last failure was due to one of the following Management frames:

  • Association Response (Type 0, Subtype 1)

  • Reassociation Response (Type 0, Subtype 3)

  • Authentication (Type 0, Subtype 11)

Table 9-50 "Status codes" of IEEE 802.11-2020 contains a description of all values possible.

#### See

MatterSpecification.v11.Core § 11.14.8.2.2

#### Inherited from

`TypeFromSchema.status`

#### Source

[packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/WiFiNetworkDiagnosticsCluster.ts#L174)
