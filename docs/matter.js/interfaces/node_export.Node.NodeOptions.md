[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [Node](../modules/node_export.Node.md) / NodeOptions

# Interface: NodeOptions

[node/export](../modules/node_export.md).[Node](../modules/node_export.Node.md).NodeOptions

## Hierarchy

- [`EndpointOptions`](endpoint_export.Endpoint.EndpointOptions.md)

  ↳ **`NodeOptions`**

## Table of contents

### Properties

- [environment](node_export.Node.NodeOptions.md#environment)
- [id](node_export.Node.NodeOptions.md#id)
- [number](node_export.Node.NodeOptions.md#number)
- [owner](node_export.Node.NodeOptions.md#owner)
- [parts](node_export.Node.NodeOptions.md#parts)

## Properties

### environment

• `Optional` **environment**: [`Environment`](../classes/environment_export.Environment.md)

#### Defined in

[packages/matter.js/src/node/Node.ts:139](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/node/Node.ts#L139)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[EndpointOptions](endpoint_export.Endpoint.EndpointOptions.md).[id](endpoint_export.Endpoint.EndpointOptions.md#id)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:738](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L738)

___

### number

• `Optional` **number**: `number`

#### Inherited from

[EndpointOptions](endpoint_export.Endpoint.EndpointOptions.md).[number](endpoint_export.Endpoint.EndpointOptions.md#number)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:739](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L739)

___

### owner

• `Optional` **owner**: [`Agent`](../classes/endpoint_export.Agent-1.md) \| [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[EndpointOptions](endpoint_export.Endpoint.EndpointOptions.md).[owner](endpoint_export.Endpoint.EndpointOptions.md#owner)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:737](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L737)

___

### parts

• `Optional` **parts**: `Iterable`\<[`Definition`](../modules/endpoint_export.Endpoint.md#definition)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>\>

#### Inherited from

[EndpointOptions](endpoint_export.Endpoint.EndpointOptions.md).[parts](endpoint_export.Endpoint.EndpointOptions.md#parts)

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:740](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/Endpoint.ts#L740)
