[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / InteractionEndpointStructure

# Class: InteractionEndpointStructure

[protocol/interaction/export](../modules/protocol_interaction_export.md).InteractionEndpointStructure

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.InteractionEndpointStructure.md#constructor)

### Properties

- [attributePaths](protocol_interaction_export.InteractionEndpointStructure.md#attributepaths)
- [attributes](protocol_interaction_export.InteractionEndpointStructure.md#attributes)
- [change](protocol_interaction_export.InteractionEndpointStructure.md#change)
- [commandPaths](protocol_interaction_export.InteractionEndpointStructure.md#commandpaths)
- [commands](protocol_interaction_export.InteractionEndpointStructure.md#commands)
- [endpoints](protocol_interaction_export.InteractionEndpointStructure.md#endpoints)
- [eventPaths](protocol_interaction_export.InteractionEndpointStructure.md#eventpaths)
- [events](protocol_interaction_export.InteractionEndpointStructure.md#events)

### Methods

- [clear](protocol_interaction_export.InteractionEndpointStructure.md#clear)
- [close](protocol_interaction_export.InteractionEndpointStructure.md#close)
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
- [validateConcreteAttributePath](protocol_interaction_export.InteractionEndpointStructure.md#validateconcreteattributepath)
- [validateConcreteCommandPath](protocol_interaction_export.InteractionEndpointStructure.md#validateconcretecommandpath)
- [validateConcreteEventPath](protocol_interaction_export.InteractionEndpointStructure.md#validateconcreteeventpath)
- [verifyAndInitializeStructureElementsFromEndpoint](protocol_interaction_export.InteractionEndpointStructure.md#verifyandinitializestructureelementsfromendpoint)

## Constructors

### constructor

• **new InteractionEndpointStructure**(): [`InteractionEndpointStructure`](protocol_interaction_export.InteractionEndpointStructure.md)

#### Returns

[`InteractionEndpointStructure`](protocol_interaction_export.InteractionEndpointStructure.md)

## Properties

### attributePaths

• **attributePaths**: [`AttributePath`](../interfaces/protocol_interaction_export.AttributePath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L39)

___

### attributes

• **attributes**: `Map`\<`string`, [`AnyAttributeServer`](../modules/cluster_export.md#anyattributeserver)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L38)

___

### change

• **change**: [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L44)

___

### commandPaths

• **commandPaths**: [`CommandPath`](../interfaces/protocol_interaction_export.CommandPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L43)

___

### commands

• **commands**: `Map`\<`string`, [`CommandServer`](cluster_export.CommandServer.md)\<`any`, `any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L42)

___

### endpoints

• **endpoints**: `Map`\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber), [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L37)

___

### eventPaths

• **eventPaths**: [`EventPath`](../interfaces/protocol_interaction_export.EventPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L41)

___

### events

• **events**: `Map`\<`string`, [`EventServer`](cluster_export.EventServer.md)\<`any`, `any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L40)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L46)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L56)

___

### getAttribute

▸ **getAttribute**(`endpointId`, `clusterId`, `attributeId`): `undefined` \| [`AnyAttributeServer`](../modules/cluster_export.md#anyattributeserver)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `attributeId` | [`AttributeId`](../modules/datatype_export.md#attributeid) |

#### Returns

`undefined` \| [`AnyAttributeServer`](../modules/cluster_export.md#anyattributeserver)\<`any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L199)

___

### getAttributes

▸ **getAttributes**(`filters`, `onlyWritable?`): [`AttributeWithPath`](../interfaces/protocol_interaction_export.AttributeWithPath.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filters` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] | `undefined` |
| `onlyWritable` | `boolean` | `false` |

#### Returns

[`AttributeWithPath`](../interfaces/protocol_interaction_export.AttributeWithPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:267](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L267)

___

### getClusterServer

▸ **getClusterServer**(`endpointId`, `clusterId`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`any`, `any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:191](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L191)

___

### getCommand

▸ **getCommand**(`endpointId`, `clusterId`, `commandId`): `undefined` \| [`CommandServer`](cluster_export.CommandServer.md)\<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `commandId` | [`CommandId`](../modules/datatype_export.md#commandid) |

#### Returns

`undefined` \| [`CommandServer`](cluster_export.CommandServer.md)\<`any`, `any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:243](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L243)

___

### getCommands

▸ **getCommands**(`filters`): [`CommandWithPath`](../interfaces/protocol_interaction_export.CommandWithPath.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommandId`](../modules/datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>[] |

#### Returns

[`CommandWithPath`](../interfaces/protocol_interaction_export.CommandWithPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:326](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L326)

___

### getEndpoint

▸ **getEndpoint**(`endpointId`): `undefined` \| [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |

#### Returns

`undefined` \| [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L183)

___

### getEvent

▸ **getEvent**(`endpointId`, `clusterId`, `eventId`): `undefined` \| [`EventServer`](cluster_export.EventServer.md)\<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `eventId` | [`EventId`](../modules/datatype_export.md#eventid) |

#### Returns

`undefined` \| [`EventServer`](cluster_export.EventServer.md)\<`any`, `any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:223](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L223)

___

### getEvents

▸ **getEvents**(`filters`): [`EventWithPath`](../interfaces/protocol_interaction_export.EventWithPath.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |

#### Returns

[`EventWithPath`](../interfaces/protocol_interaction_export.EventWithPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:297](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L297)

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

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L207)

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

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L195)

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

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:251](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L251)

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

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:187](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L187)

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

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L227)

___

### initializeFromEndpoint

▸ **initializeFromEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L62)

___

### initializeStructureFromEndpoints

▸ **initializeStructureFromEndpoints**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L71)

___

### resolveAttributeName

▸ **resolveAttributeName**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:165](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L165)

___

### resolveCommandName

▸ **resolveCommandName**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommandId`](../modules/datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L179)

___

### resolveEventName

▸ **resolveEventName**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:169](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L169)

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
| `elementMap` | `Map`\<`string`, `any`\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L129)

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

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L125)

___

### validateConcreteAttributePath

▸ **validateConcreteAttributePath**(`endpointId`, `clusterId`, `attributeId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `attributeId` | [`AttributeId`](../modules/datatype_export.md#attributeid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:211](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L211)

___

### validateConcreteCommandPath

▸ **validateConcreteCommandPath**(`endpointId`, `clusterId`, `commandId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `commandId` | [`CommandId`](../modules/datatype_export.md#commandid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L255)

___

### validateConcreteEventPath

▸ **validateConcreteEventPath**(`endpointId`, `clusterId`, `eventId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `eventId` | [`EventId`](../modules/datatype_export.md#eventid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L231)

___

### verifyAndInitializeStructureElementsFromEndpoint

▸ **verifyAndInitializeStructureElementsFromEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L79)
