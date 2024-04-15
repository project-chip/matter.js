[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/operational-credentials/export](../modules/behavior_definitions_operational_credentials_export.md) / [OperationalCredentialsServer](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md) / State

# Class: State

[behavior/definitions/operational-credentials/export](../modules/behavior_definitions_operational_credentials_export.md).[OperationalCredentialsServer](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md).State

## Hierarchy

- `State`

  ↳ **`State`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md#constructor)

### Properties

- [certification](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md#certification)
- [commissionedFabrics](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md#commissionedfabrics)
- [currentFabricIndex](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md#currentfabricindex)
- [fabrics](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md#fabrics)
- [nocs](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md#nocs)
- [supportedFabrics](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md#supportedfabrics)
- [trustedRootCertificates](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md#trustedrootcertificates)

### Methods

- [[properties]](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md#[properties])

## Constructors

### constructor

• **new State**(): [`State`](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md)

#### Returns

[`State`](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md)

#### Inherited from

OperationalCredentialsBehavior.State.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L196)

## Properties

### certification

• `Optional` **certification**: [`Configuration`](../interfaces/behavior_definitions_operational_credentials_export._internal_.Configuration.md) = `undefined`

Device certification information.

Device certification provides a cryptographic certificate that asserts the official status of a device.
Production consumer-facing devices are certified by the CSA.

Development devices and those intended for personal use may use a development certificate.  This is the
default if you do not provide an official certification in ServerOptions.certification.

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:413](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L413)

___

### commissionedFabrics

• **commissionedFabrics**: `number`

This attribute contains the number of Fabrics to which the device is currently commissioned. This
attribute shall be equal to the following:

  • The number of entries in the NOCs attribute.

  • The number of entries in the Fabrics attribute.

Upon Factory Data Reset, this attribute shall be set to a default value of 0.

**`See`**

MatterSpecification.v11.Core § 11.17.5.4

#### Inherited from

OperationalCredentialsBehavior.State.commissionedFabrics

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:692](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L692)

___

### currentFabricIndex

• **currentFabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

This attribute shall contain accessing fabric index.

This attribute is useful to contextualize Fabric-Scoped entries obtained from response commands or
attribute reads, since a given Fabric may be referenced by a different Fabric Index locally on a remote
Node.

**`See`**

MatterSpecification.v11.Core § 11.17.5.6

#### Inherited from

OperationalCredentialsBehavior.State.currentFabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:727](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L727)

___

### fabrics

• **fabrics**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricId`](../modules/datatype_export.md#fabricid)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `rootPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>[]

This attribute describes all fabrics to which this Node is commissioned, encoded as a read-only list of
FabricDescriptorStruct. This information may be computed directly from the NOCs attribute.

Upon Factory Data Reset, this attribute shall be set to a default value of an empty list.

The number of entries in this list shall match the number of entries in the NOCs attribute.

**`See`**

MatterSpecification.v11.Core § 11.17.5.2

#### Inherited from

OperationalCredentialsBehavior.State.fabrics

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:670](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L670)

___

### nocs

• **nocs**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `icac`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[]

This attribute contains all NOCs applicable to this Node, encoded as a read-only list of NOCStruct.

Operational Certificates shall be added through the AddNOC command, and shall be removed through the
RemoveFabric command.

Upon Factory Data Reset, this attribute shall be set to a default value of an empty list.

The number of entries in this list shall match the number of entries in the Fabrics attribute.

**`See`**

MatterSpecification.v11.Core § 11.17.5.1

#### Inherited from

OperationalCredentialsBehavior.State.nocs

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:647](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L647)

___

### supportedFabrics

• **supportedFabrics**: `number`

This attribute contains the number of Fabrics that are supported by the device. This value is fixed for
a particular device.

**`See`**

MatterSpecification.v11.Core § 11.17.5.3

#### Inherited from

OperationalCredentialsBehavior.State.supportedFabrics

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:678](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L678)

___

### trustedRootCertificates

• **trustedRootCertificates**: `Uint8Array`[]

This attribute shall contain a read-only list of Trusted Root CA Certificates installed on the Node, as
octet strings containing their Matter Certificate Encoding representation.

These certificates are installed through the AddTrustedRootCertificate command.

Depending on the method of storage employed by the server, either shared storage for identical root
certificates shared by many fabrics, or individually stored root certificate per fabric, multiple

identical root certificates may legally appear within the list.

To match a root with a given fabric, the root certificate’s subject and subject public key need to be
cross-referenced with the NOC or ICAC certificates that appear in the NOCs attribute for a given fabric.

Upon Factory Data Reset, this attribute shall be set to a default value whereby the list is empty.

**`See`**

MatterSpecification.v11.Core § 11.17.5.5

#### Inherited from

OperationalCredentialsBehavior.State.trustedRootCertificates

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:712](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L712)

## Methods

### [properties]

▸ **[properties]**(`_endpoint`, `session`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_endpoint` | `any` |
| `session` | [`Session`](../interfaces/behavior_cluster_export._internal_.Session.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `get currentFabricIndex()` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:415](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L415)
