[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / InteractionEndpointStructure

# Class: InteractionEndpointStructure

[exports/interaction](../modules/exports_interaction.md).InteractionEndpointStructure

## Table of contents

### Constructors

- [constructor](exports_interaction.InteractionEndpointStructure.md#constructor)

### Properties

- [attributePaths](exports_interaction.InteractionEndpointStructure.md#attributepaths)
- [attributes](exports_interaction.InteractionEndpointStructure.md#attributes)
- [change](exports_interaction.InteractionEndpointStructure.md#change)
- [commandPaths](exports_interaction.InteractionEndpointStructure.md#commandpaths)
- [commands](exports_interaction.InteractionEndpointStructure.md#commands)
- [endpoints](exports_interaction.InteractionEndpointStructure.md#endpoints)
- [eventPaths](exports_interaction.InteractionEndpointStructure.md#eventpaths)
- [events](exports_interaction.InteractionEndpointStructure.md#events)
- [initializeStructureFromEndpoints](exports_interaction.InteractionEndpointStructure.md#initializestructurefromendpoints)
- [verifyAndInitializeStructureElementsFromEndpoint](exports_interaction.InteractionEndpointStructure.md#verifyandinitializestructureelementsfromendpoint)

### Methods

- [clear](exports_interaction.InteractionEndpointStructure.md#clear)
- [close](exports_interaction.InteractionEndpointStructure.md#close)
- [getAttribute](exports_interaction.InteractionEndpointStructure.md#getattribute)
- [getAttributes](exports_interaction.InteractionEndpointStructure.md#getattributes)
- [getClusterServer](exports_interaction.InteractionEndpointStructure.md#getclusterserver)
- [getCommand](exports_interaction.InteractionEndpointStructure.md#getcommand)
- [getCommands](exports_interaction.InteractionEndpointStructure.md#getcommands)
- [getEndpoint](exports_interaction.InteractionEndpointStructure.md#getendpoint)
- [getEvent](exports_interaction.InteractionEndpointStructure.md#getevent)
- [getEvents](exports_interaction.InteractionEndpointStructure.md#getevents)
- [hasAttribute](exports_interaction.InteractionEndpointStructure.md#hasattribute)
- [hasClusterServer](exports_interaction.InteractionEndpointStructure.md#hasclusterserver)
- [hasCommand](exports_interaction.InteractionEndpointStructure.md#hascommand)
- [hasEndpoint](exports_interaction.InteractionEndpointStructure.md#hasendpoint)
- [hasEvent](exports_interaction.InteractionEndpointStructure.md#hasevent)
- [initializeFromEndpoint](exports_interaction.InteractionEndpointStructure.md#initializefromendpoint)
- [resolveAttributeName](exports_interaction.InteractionEndpointStructure.md#resolveattributename)
- [resolveCommandName](exports_interaction.InteractionEndpointStructure.md#resolvecommandname)
- [resolveEventName](exports_interaction.InteractionEndpointStructure.md#resolveeventname)
- [resolveGenericElementName](exports_interaction.InteractionEndpointStructure.md#resolvegenericelementname)
- [toHex](exports_interaction.InteractionEndpointStructure.md#tohex)
- [validateConcreteAttributePath](exports_interaction.InteractionEndpointStructure.md#validateconcreteattributepath)
- [validateConcreteCommandPath](exports_interaction.InteractionEndpointStructure.md#validateconcretecommandpath)
- [validateConcreteEventPath](exports_interaction.InteractionEndpointStructure.md#validateconcreteeventpath)

## Constructors

### constructor

• **new InteractionEndpointStructure**(): [`InteractionEndpointStructure`](exports_interaction.InteractionEndpointStructure.md)

#### Returns

[`InteractionEndpointStructure`](exports_interaction.InteractionEndpointStructure.md)

## Properties

### attributePaths

• **attributePaths**: [`AttributePath`](../interfaces/exports_interaction.AttributePath.md)[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:24

___

### attributes

• **attributes**: `Map`\<`string`, [`AnyAttributeServer`](../modules/exports_cluster.md#anyattributeserver)\<`any`\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:23

___

### change

• **change**: [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:29

___

### commandPaths

• **commandPaths**: [`CommandPath`](../interfaces/exports_interaction.CommandPath.md)[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:28

___

### commands

• **commands**: `Map`\<`string`, [`CommandServer`](exports_cluster.CommandServer.md)\<`any`, `any`\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:27

___

### endpoints

• **endpoints**: `Map`\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber), [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md)\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:22

___

### eventPaths

• **eventPaths**: [`EventPath`](../interfaces/exports_interaction.EventPath.md)[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:26

___

### events

• **events**: `Map`\<`string`, [`EventServer`](exports_cluster.EventServer.md)\<`any`, `any`\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:25

___

### initializeStructureFromEndpoints

• `Private` **initializeStructureFromEndpoints**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:33

___

### verifyAndInitializeStructureElementsFromEndpoint

• `Private` **verifyAndInitializeStructureElementsFromEndpoint**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:34

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:30

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:31

___

### getAttribute

▸ **getAttribute**(`endpointId`, `clusterId`, `attributeId`): `undefined` \| [`AnyAttributeServer`](../modules/exports_cluster.md#anyattributeserver)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `attributeId` | [`AttributeId`](../modules/exports_datatype.md#attributeid) |

#### Returns

`undefined` \| [`AnyAttributeServer`](../modules/exports_cluster.md#anyattributeserver)\<`any`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:44

___

### getAttributes

▸ **getAttributes**(`filters`, `onlyWritable?`): [`AttributeWithPath`](../interfaces/exports_interaction.AttributeWithPath.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `onlyWritable?` | `boolean` |

#### Returns

[`AttributeWithPath`](../interfaces/exports_interaction.AttributeWithPath.md)[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:53

___

### getClusterServer

▸ **getClusterServer**(`endpointId`, `clusterId`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`any`, `any`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:42

___

### getCommand

▸ **getCommand**(`endpointId`, `clusterId`, `commandId`): `undefined` \| [`CommandServer`](exports_cluster.CommandServer.md)\<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `commandId` | [`CommandId`](../modules/exports_datatype.md#commandid) |

#### Returns

`undefined` \| [`CommandServer`](exports_cluster.CommandServer.md)\<`any`, `any`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:50

___

### getCommands

▸ **getCommands**(`filters`): [`CommandWithPath`](../interfaces/exports_interaction.CommandWithPath.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\>[] |

#### Returns

[`CommandWithPath`](../interfaces/exports_interaction.CommandWithPath.md)[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:55

___

### getEndpoint

▸ **getEndpoint**(`endpointId`): `undefined` \| [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |

#### Returns

`undefined` \| [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:40

___

### getEvent

▸ **getEvent**(`endpointId`, `clusterId`, `eventId`): `undefined` \| [`EventServer`](exports_cluster.EventServer.md)\<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `eventId` | [`EventId`](../modules/exports_datatype.md#eventid) |

#### Returns

`undefined` \| [`EventServer`](exports_cluster.EventServer.md)\<`any`, `any`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:47

___

### getEvents

▸ **getEvents**(`filters`): [`EventWithPath`](../interfaces/exports_interaction.EventWithPath.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |

#### Returns

[`EventWithPath`](../interfaces/exports_interaction.EventWithPath.md)[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:54

___

### hasAttribute

▸ **hasAttribute**(`endpointId`, `clusterId`, `attributeId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `attributeId` | [`AttributeId`](../modules/exports_datatype.md#attributeid) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:45

___

### hasClusterServer

▸ **hasClusterServer**(`endpointId`, `clusterId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:43

___

### hasCommand

▸ **hasCommand**(`endpointId`, `clusterId`, `commandId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `commandId` | [`CommandId`](../modules/exports_datatype.md#commandid) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:51

___

### hasEndpoint

▸ **hasEndpoint**(`endpointId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:41

___

### hasEvent

▸ **hasEvent**(`endpointId`, `clusterId`, `eventId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `eventId` | [`EventId`](../modules/exports_datatype.md#eventid) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:48

___

### initializeFromEndpoint

▸ **initializeFromEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:32

___

### resolveAttributeName

▸ **resolveAttributeName**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:37

___

### resolveCommandName

▸ **resolveCommandName**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<[`CommandId`](../modules/exports_datatype.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\>  }\> |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:39

___

### resolveEventName

▸ **resolveEventName**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\> |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:38

___

### resolveGenericElementName

▸ **resolveGenericElementName**(`nodeId`, `endpointId`, `clusterId`, `elementId`, `elementMap`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `endpointId` | `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | `undefined` \| [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `elementId` | `undefined` \| `number` |
| `elementMap` | `Map`\<`string`, `any`\> |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:36

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

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:35

___

### validateConcreteAttributePath

▸ **validateConcreteAttributePath**(`endpointId`, `clusterId`, `attributeId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `attributeId` | [`AttributeId`](../modules/exports_datatype.md#attributeid) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:46

___

### validateConcreteCommandPath

▸ **validateConcreteCommandPath**(`endpointId`, `clusterId`, `commandId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `commandId` | [`CommandId`](../modules/exports_datatype.md#commandid) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:52

___

### validateConcreteEventPath

▸ **validateConcreteEventPath**(`endpointId`, `clusterId`, `eventId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `eventId` | [`EventId`](../modules/exports_datatype.md#eventid) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:49
