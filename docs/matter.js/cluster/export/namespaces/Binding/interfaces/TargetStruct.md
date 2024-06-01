[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Binding](../README.md) / TargetStruct

# Interface: TargetStruct

## See

MatterSpecification.v11.Core § 9.6.5.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvTargetStruct`](../README.md#tlvtargetstruct)\>

## Properties

### cluster?

> `optional` **cluster**: [`ClusterId`](../../../../../datatype/export/README.md#clusterid)

This field is the cluster ID (client & server) on the local and target endpoint(s). If this field is
present, the client cluster shall also exist on this endpoint (with this Binding cluster). If this field is
present, the target shall be this cluster on the target endpoint(s).

#### See

MatterSpecification.v11.Core § 9.6.5.1.4

#### Inherited from

`TypeFromSchema.cluster`

#### Source

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L57)

***

### endpoint?

> `optional` **endpoint**: [`EndpointNumber`](../../../../../datatype/export/README.md#endpointnumber)

This field is the remote endpoint that the local endpoint is bound to. If the Group field is present, this
field shall NOT be present.

#### See

MatterSpecification.v11.Core § 9.6.5.1.3

#### Inherited from

`TypeFromSchema.endpoint`

#### Source

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L48)

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L59)

***

### group?

> `optional` **group**: [`GroupId`](../../../../../datatype/export/README.md#groupid)

This field is the target group ID that represents remote endpoints. If the Endpoint field is present, this
field shall NOT be present.

#### See

MatterSpecification.v11.Core § 9.6.5.1.2

#### Inherited from

`TypeFromSchema.group`

#### Source

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L40)

***

### node?

> `optional` **node**: [`NodeId`](../../../../../datatype/export/README.md#nodeid)

This field is the remote target node ID. If the Endpoint field is present, this field shall be present.

#### See

MatterSpecification.v11.Core § 9.6.5.1.1

#### Inherited from

`TypeFromSchema.node`

#### Source

[packages/matter.js/src/cluster/definitions/BindingCluster.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BindingCluster.ts#L32)
