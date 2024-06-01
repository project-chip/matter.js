[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/interaction/export](../README.md) / InteractionEndpointStructure

# Class: InteractionEndpointStructure

## Constructors

### new InteractionEndpointStructure()

> **new InteractionEndpointStructure**(): [`InteractionEndpointStructure`](InteractionEndpointStructure.md)

#### Returns

[`InteractionEndpointStructure`](InteractionEndpointStructure.md)

## Properties

### attributePaths

> **attributePaths**: [`AttributePath`](../interfaces/AttributePath.md)[]

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L39)

***

### attributes

> **attributes**: `Map`\<`string`, [`AnyAttributeServer`](../../../../cluster/export/README.md#anyattributeservert)\<`any`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L38)

***

### change

> **change**: [`Observable`](../../../../util/export/interfaces/Observable.md)\<`any`[], `void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L44)

***

### commandPaths

> **commandPaths**: [`CommandPath`](../interfaces/CommandPath.md)[]

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L43)

***

### commands

> **commands**: `Map`\<`string`, [`CommandServer`](../../../../cluster/export/classes/CommandServer.md)\<`any`, `any`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L42)

***

### endpoints

> **endpoints**: `Map`\<[`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber), [`EndpointInterface`](../../../../endpoint/export/interfaces/EndpointInterface.md)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L37)

***

### eventPaths

> **eventPaths**: [`EventPath`](../interfaces/EventPath.md)[]

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L41)

***

### events

> **events**: `Map`\<`string`, [`EventServer`](../../../../cluster/export/classes/EventServer.md)\<`any`, `any`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L40)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L46)

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L56)

***

### getAttribute()

> **getAttribute**(`endpointId`, `clusterId`, `attributeId`): `undefined` \| [`AnyAttributeServer`](../../../../cluster/export/README.md#anyattributeservert)\<`any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `attributeId` | [`AttributeId`](../../../../datatype/export/README.md#attributeid) |

#### Returns

`undefined` \| [`AnyAttributeServer`](../../../../cluster/export/README.md#anyattributeservert)\<`any`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L199)

***

### getAttributes()

> **getAttributes**(`filters`, `onlyWritable`): [`AttributeWithPath`](../interfaces/AttributeWithPath.md)[]

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `filters` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] | `undefined` |
| `onlyWritable` | `boolean` | `false` |

#### Returns

[`AttributeWithPath`](../interfaces/AttributeWithPath.md)[]

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:266](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L266)

***

### getClusterServer()

> **getClusterServer**(`endpointId`, `clusterId`): `undefined` \| [`ClusterServerObj`](../../../../cluster/export/README.md#clusterserverobjae)\<`any`, `any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../../../../cluster/export/README.md#clusterserverobjae)\<`any`, `any`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:191](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L191)

***

### getCommand()

> **getCommand**(`endpointId`, `clusterId`, `commandId`): `undefined` \| [`CommandServer`](../../../../cluster/export/classes/CommandServer.md)\<`any`, `any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `commandId` | [`CommandId`](../../../../datatype/export/README.md#commandid) |

#### Returns

`undefined` \| [`CommandServer`](../../../../cluster/export/classes/CommandServer.md)\<`any`, `any`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:243](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L243)

***

### getCommands()

> **getCommands**(`filters`): [`CommandWithPath`](../interfaces/CommandWithPath.md)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`CommandWithPath`](../interfaces/CommandWithPath.md)[]

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:327](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L327)

***

### getEndpoint()

> **getEndpoint**(`endpointId`): `undefined` \| [`EndpointInterface`](../../../../endpoint/export/interfaces/EndpointInterface.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |

#### Returns

`undefined` \| [`EndpointInterface`](../../../../endpoint/export/interfaces/EndpointInterface.md)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L183)

***

### getEvent()

> **getEvent**(`endpointId`, `clusterId`, `eventId`): `undefined` \| [`EventServer`](../../../../cluster/export/classes/EventServer.md)\<`any`, `any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `eventId` | [`EventId`](../../../../datatype/export/README.md#eventid) |

#### Returns

`undefined` \| [`EventServer`](../../../../cluster/export/classes/EventServer.md)\<`any`, `any`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L223)

***

### getEvents()

> **getEvents**(`filters`): [`EventWithPath`](../interfaces/EventWithPath.md)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`EventWithPath`](../interfaces/EventWithPath.md)[]

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:297](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L297)

***

### hasAttribute()

> **hasAttribute**(`endpointId`, `clusterId`, `attributeId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `attributeId` | [`AttributeId`](../../../../datatype/export/README.md#attributeid) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:207](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L207)

***

### hasClusterServer()

> **hasClusterServer**(`endpointId`, `clusterId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:195](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L195)

***

### hasCommand()

> **hasCommand**(`endpointId`, `clusterId`, `commandId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `commandId` | [`CommandId`](../../../../datatype/export/README.md#commandid) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L251)

***

### hasEndpoint()

> **hasEndpoint**(`endpointId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L187)

***

### hasEvent()

> **hasEvent**(`endpointId`, `clusterId`, `eventId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `eventId` | [`EventId`](../../../../datatype/export/README.md#eventid) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:227](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L227)

***

### initializeFromEndpoint()

> **initializeFromEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L62)

***

### initializeStructureFromEndpoints()

> `private` **initializeStructureFromEndpoints**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L71)

***

### resolveAttributeName()

> **resolveAttributeName**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L165)

***

### resolveCommandName()

> **resolveCommandName**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L179)

***

### resolveEventName()

> **resolveEventName**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L169)

***

### resolveGenericElementName()

> **resolveGenericElementName**(`nodeId`, `endpointId`, `clusterId`, `elementId`, `elementMap`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | `undefined` \| [`NodeId`](../../../../datatype/export/README.md#nodeid) |
| `endpointId` | `undefined` \| [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | `undefined` \| [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `elementId` | `undefined` \| `number` |
| `elementMap` | `Map`\<`string`, `any`\> |

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L129)

***

### toHex()

> **toHex**(`value`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` \| `bigint` |

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L125)

***

### validateAnyPathDataTypes()

> **validateAnyPathDataTypes**(`data`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `object` |
| `data.attributeId`? | [`AttributeId`](../../../../datatype/export/README.md#attributeid) |
| `data.clusterId`? | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `data.commandId`? | [`CommandId`](../../../../datatype/export/README.md#commandid) |
| `data.endpointId`? | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `data.eventId`? | [`EventId`](../../../../datatype/export/README.md#eventid) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:357](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L357)

***

### validateConcreteAttributePath()

> **validateConcreteAttributePath**(`endpointId`, `clusterId`, `attributeId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `attributeId` | [`AttributeId`](../../../../datatype/export/README.md#attributeid) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:211](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L211)

***

### validateConcreteCommandPath()

> **validateConcreteCommandPath**(`endpointId`, `clusterId`, `commandId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `commandId` | [`CommandId`](../../../../datatype/export/README.md#commandid) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:255](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L255)

***

### validateConcreteEventPath()

> **validateConcreteEventPath**(`endpointId`, `clusterId`, `eventId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../../datatype/export/README.md#clusterid) |
| `eventId` | [`EventId`](../../../../datatype/export/README.md#eventid) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:231](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L231)

***

### verifyAndInitializeStructureElementsFromEndpoint()

> `private` **verifyAndInitializeStructureElementsFromEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionEndpointStructure.ts#L79)
