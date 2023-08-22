[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / InteractionEndpointStructure

# Class: InteractionEndpointStructure

[protocol/interaction/export](../modules/protocol_interaction_export.md).InteractionEndpointStructure

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.InteractionEndpointStructure.md#constructor)

### Properties

- [attributePaths](protocol_interaction_export.InteractionEndpointStructure.md#attributepaths)
- [attributes](protocol_interaction_export.InteractionEndpointStructure.md#attributes)
- [commandPaths](protocol_interaction_export.InteractionEndpointStructure.md#commandpaths)
- [commands](protocol_interaction_export.InteractionEndpointStructure.md#commands)
- [endpoints](protocol_interaction_export.InteractionEndpointStructure.md#endpoints)
- [eventPaths](protocol_interaction_export.InteractionEndpointStructure.md#eventpaths)
- [events](protocol_interaction_export.InteractionEndpointStructure.md#events)

### Methods

- [clear](protocol_interaction_export.InteractionEndpointStructure.md#clear)
- [getAttribute](protocol_interaction_export.InteractionEndpointStructure.md#getattribute)
- [getAttributes](protocol_interaction_export.InteractionEndpointStructure.md#getattributes)
- [getClusterServer](protocol_interaction_export.InteractionEndpointStructure.md#getclusterserver)
- [getCommand](protocol_interaction_export.InteractionEndpointStructure.md#getcommand)
- [getCommands](protocol_interaction_export.InteractionEndpointStructure.md#getcommands)
- [getEndpoint](protocol_interaction_export.InteractionEndpointStructure.md#getendpoint)
- [getEvent](protocol_interaction_export.InteractionEndpointStructure.md#getevent)
- [getEvents](protocol_interaction_export.InteractionEndpointStructure.md#getevents)
- [hasAttribute](protocol_interaction_export.InteractionEndpointStructure.md#hasattribute)
- [hasClusterServer](protocol_interaction_export.InteractionEndpointStructure.md#hasclusterserver)
- [hasCommand](protocol_interaction_export.InteractionEndpointStructure.md#hascommand)
- [hasEndpoint](protocol_interaction_export.InteractionEndpointStructure.md#hasendpoint)
- [hasEvent](protocol_interaction_export.InteractionEndpointStructure.md#hasevent)
- [initializeFromEndpoint](protocol_interaction_export.InteractionEndpointStructure.md#initializefromendpoint)
- [initializeStructureFromEndpoints](protocol_interaction_export.InteractionEndpointStructure.md#initializestructurefromendpoints)
- [resolveAttributeName](protocol_interaction_export.InteractionEndpointStructure.md#resolveattributename)
- [resolveCommandName](protocol_interaction_export.InteractionEndpointStructure.md#resolvecommandname)
- [resolveEventName](protocol_interaction_export.InteractionEndpointStructure.md#resolveeventname)
- [resolveGenericElementName](protocol_interaction_export.InteractionEndpointStructure.md#resolvegenericelementname)
- [toHex](protocol_interaction_export.InteractionEndpointStructure.md#tohex)
- [verifyAndInitializeStructureElementsFromEndpoint](protocol_interaction_export.InteractionEndpointStructure.md#verifyandinitializestructureelementsfromendpoint)

## Constructors

### constructor

• **new InteractionEndpointStructure**()

## Properties

### attributePaths

• **attributePaths**: [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L41)

___

### attributes

• **attributes**: `Map`<`string`, [`AttributeServer`](cluster_export.AttributeServer.md)<`any`\> \| [`FabricScopedAttributeServer`](cluster_export.FabricScopedAttributeServer.md)<`any`\> \| [`FixedAttributeServer`](cluster_export.FixedAttributeServer.md)<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L40)

___

### commandPaths

• **commandPaths**: [`CommandPath`](../interfaces/protocol_interaction_export.CommandPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L45)

___

### commands

• **commands**: `Map`<`string`, [`CommandServer`](cluster_export.CommandServer.md)<`any`, `any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L44)

___

### endpoints

• **endpoints**: `Map`<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber), [`Endpoint`](device_export.Endpoint.md)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L39)

___

### eventPaths

• **eventPaths**: [`EventPath`](../interfaces/protocol_interaction_export.EventPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L43)

___

### events

• **events**: `Map`<`string`, [`EventServer`](cluster_export.EventServer.md)<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L42)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L47)

___

### getAttribute

▸ **getAttribute**(`endpointId`, `clusterId`, `attributeId`): `undefined` \| [`AttributeServer`](cluster_export.AttributeServer.md)<`any`\> \| [`FabricScopedAttributeServer`](cluster_export.FabricScopedAttributeServer.md)<`any`\> \| [`FixedAttributeServer`](cluster_export.FixedAttributeServer.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `attributeId` | [`AttributeId`](../modules/datatype_export.md#attributeid) |

#### Returns

`undefined` \| [`AttributeServer`](cluster_export.AttributeServer.md)<`any`\> \| [`FabricScopedAttributeServer`](cluster_export.FabricScopedAttributeServer.md)<`any`\> \| [`FixedAttributeServer`](cluster_export.FixedAttributeServer.md)<`any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:190](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L190)

___

### getAttributes

▸ **getAttributes**(`filters`, `onlyWritable?`): [`AttributeWithPath`](../interfaces/protocol_interaction_export.AttributeWithPath.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filters` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] | `undefined` |
| `onlyWritable` | `boolean` | `false` |

#### Returns

[`AttributeWithPath`](../interfaces/protocol_interaction_export.AttributeWithPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:222](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L222)

___

### getClusterServer

▸ **getClusterServer**(`endpointId`, `clusterId`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`any`, `any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:182](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L182)

___

### getCommand

▸ **getCommand**(`endpointId`, `clusterId`, `commandId`): `undefined` \| [`CommandServer`](cluster_export.CommandServer.md)<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `commandId` | [`CommandId`](../modules/datatype_export.md#commandid) |

#### Returns

`undefined` \| [`CommandServer`](cluster_export.CommandServer.md)<`any`, `any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:210](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L210)

___

### getCommands

▸ **getCommands**(`filters`): [`CommandWithPath`](../interfaces/protocol_interaction_export.CommandWithPath.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommandId`](../modules/datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>[] |

#### Returns

[`CommandWithPath`](../interfaces/protocol_interaction_export.CommandWithPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:281](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L281)

___

### getEndpoint

▸ **getEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:174](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L174)

___

### getEvent

▸ **getEvent**(`endpointId`, `clusterId`, `eventId`): `undefined` \| [`EventServer`](cluster_export.EventServer.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `eventId` | [`EventId`](../modules/datatype_export.md#eventid) |

#### Returns

`undefined` \| [`EventServer`](cluster_export.EventServer.md)<`any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:202](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L202)

___

### getEvents

▸ **getEvents**(`filters`): [`EventWithPath`](../interfaces/protocol_interaction_export.EventWithPath.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |

#### Returns

[`EventWithPath`](../interfaces/protocol_interaction_export.EventWithPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:252](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L252)

___

### hasAttribute

▸ **hasAttribute**(`endpointId`, `clusterId`, `attributeId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `attributeId` | [`AttributeId`](../modules/datatype_export.md#attributeid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:198](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L198)

___

### hasClusterServer

▸ **hasClusterServer**(`endpointId`, `clusterId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:186](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L186)

___

### hasCommand

▸ **hasCommand**(`endpointId`, `clusterId`, `commandId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `commandId` | [`CommandId`](../modules/datatype_export.md#commandid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:218](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L218)

___

### hasEndpoint

▸ **hasEndpoint**(`endpointId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:178](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L178)

___

### hasEvent

▸ **hasEvent**(`endpointId`, `clusterId`, `eventId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `eventId` | [`EventId`](../modules/datatype_export.md#eventid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:206](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L206)

___

### initializeFromEndpoint

▸ **initializeFromEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:57](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L57)

___

### initializeStructureFromEndpoints

▸ `Private` **initializeStructureFromEndpoints**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:64](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L64)

___

### resolveAttributeName

▸ **resolveAttributeName**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:156](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L156)

___

### resolveCommandName

▸ **resolveCommandName**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommandId`](../modules/datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:170](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L170)

___

### resolveEventName

▸ **resolveEventName**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:160](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L160)

___

### resolveGenericElementName

▸ **resolveGenericElementName**(`nodeId`, `endpointId`, `clusterId`, `elementId`, `elementMap`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) |
| `endpointId` | `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | `undefined` \| [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `elementId` | `undefined` \| `number` |
| `elementMap` | `Map`<`string`, `any`\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:120](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L120)

___

### toHex

▸ **toHex**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` \| `bigint` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:116](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L116)

___

### verifyAndInitializeStructureElementsFromEndpoint

▸ `Private` **verifyAndInitializeStructureElementsFromEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:72](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L72)
