[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/operational-credentials/export](../../../README.md) / [OperationalCredentialsBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### commissionedFabrics

> **commissionedFabrics**: `number`

This attribute contains the number of Fabrics to which the device is currently commissioned. This
attribute shall be equal to the following:

  • The number of entries in the NOCs attribute.

  • The number of entries in the Fabrics attribute.

Upon Factory Data Reset, this attribute shall be set to a default value of 0.

#### See

MatterSpecification.v11.Core § 11.17.5.4

#### Inherited from

`StateType.commissionedFabrics`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:757](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L757)

***

### currentFabricIndex

> **currentFabricIndex**: [`FabricIndex`](../../../../../../../datatype/export/README.md#fabricindex)

This attribute shall contain accessing fabric index.

This attribute is useful to contextualize Fabric-Scoped entries obtained from response commands or
attribute reads, since a given Fabric may be referenced by a different Fabric Index locally on a remote
Node.

#### See

MatterSpecification.v11.Core § 11.17.5.6

#### Inherited from

`StateType.currentFabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:792](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L792)

***

### fabrics

> **fabrics**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This attribute describes all fabrics to which this Node is commissioned, encoded as a read-only list of
FabricDescriptorStruct. This information may be computed directly from the NOCs attribute.

Upon Factory Data Reset, this attribute shall be set to a default value of an empty list.

The number of entries in this list shall match the number of entries in the NOCs attribute.

#### See

MatterSpecification.v11.Core § 11.17.5.2

#### Inherited from

`StateType.fabrics`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:735](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L735)

***

### nocs

> **nocs**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This attribute contains all NOCs applicable to this Node, encoded as a read-only list of NOCStruct.

Operational Certificates shall be added through the AddNOC command, and shall be removed through the
RemoveFabric command.

Upon Factory Data Reset, this attribute shall be set to a default value of an empty list.

The number of entries in this list shall match the number of entries in the Fabrics attribute.

#### See

MatterSpecification.v11.Core § 11.17.5.1

#### Inherited from

`StateType.nocs`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:712](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L712)

***

### supportedFabrics

> **supportedFabrics**: `number`

This attribute contains the number of Fabrics that are supported by the device. This value is fixed for
a particular device.

#### See

MatterSpecification.v11.Core § 11.17.5.3

#### Inherited from

`StateType.supportedFabrics`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:743](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L743)

***

### trustedRootCertificates

> **trustedRootCertificates**: `Uint8Array`[]

This attribute shall contain a read-only list of Trusted Root CA Certificates installed on the Node, as
octet strings containing their Matter Certificate Encoding representation.

These certificates are installed through the AddTrustedRootCertificate command.

Depending on the method of storage employed by the server, either shared storage for identical root
certificates shared by many fabrics, or individually stored root certificate per fabric, multiple

identical root certificates may legally appear within the list.

To match a root with a given fabric, the root certificate’s subject and subject public key need to be
cross-referenced with the NOC or ICAC certificates that appear in the NOCs attribute for a given fabric.

Upon Factory Data Reset, this attribute shall be set to a default value whereby the list is empty.

#### See

MatterSpecification.v11.Core § 11.17.5.5

#### Inherited from

`StateType.trustedRootCertificates`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:777](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L777)
