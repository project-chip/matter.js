[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / device/export

# device/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Enumerations

- [DeviceClasses](enumerations/DeviceClasses.md)
- [NodeStateInformation](enumerations/NodeStateInformation.md)

### Classes

- [Aggregator](classes/Aggregator.md)
- [ComposedDevice](classes/ComposedDevice.md)
- [Device](classes/Device.md)
- [DimmableLightDevice](classes/DimmableLightDevice.md)
- [DimmablePluginUnitDevice](classes/DimmablePluginUnitDevice.md)
- [Endpoint](classes/Endpoint.md)
- [OnOffBaseDevice](classes/OnOffBaseDevice.md)
- [OnOffLightDevice](classes/OnOffLightDevice.md)
- [OnOffPluginUnitDevice](classes/OnOffPluginUnitDevice.md)
- [PairedDevice](classes/PairedDevice.md)
- [PairedNode](classes/PairedNode.md)
- [RootEndpoint](classes/RootEndpoint.md)

### Interfaces

- [DeviceTypeDefinition](interfaces/DeviceTypeDefinition.md)
- [EndpointOptions](interfaces/EndpointOptions.md)

## Type Aliases

### CommissioningControllerNodeOptions

> **CommissioningControllerNodeOptions**: `object`

#### Type declaration

##### attributeChangedCallback()?

> `optional` `readonly` **attributeChangedCallback**: (`nodeId`, `data`) => `void`

Optional additional callback method which is called for each Attribute change reported by the device. Use this
if subscribing to all relevant attributes is too much effort.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/export/README.md#nodeid) |
| `data` | [`DecodedAttributeReportValue`](../../protocol/interaction/export/README.md#decodedattributereportvaluet)\<`any`\> |

###### Returns

`void`

##### autoSubscribe?

> `optional` `readonly` **autoSubscribe**: `boolean`

Unless set to false all events and attributes are subscribed and value changes are reflected in the ClusterClient
instances. With this reading attributes values is mostly looked up in the locally cached data.
Additionally more features like reaction on shutdown event or endpoint structure changes (for bridges) are done
internally automatically.

##### eventTriggeredCallback()?

> `optional` `readonly` **eventTriggeredCallback**: (`nodeId`, `data`) => `void`

Optional additional callback method which is called for each Event reported by the device. Use this if
subscribing to all relevant events is too much effort.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/export/README.md#nodeid) |
| `data` | [`DecodedEventReportValue`](../../protocol/interaction/export/README.md#decodedeventreportvaluet)\<`any`\> |

###### Returns

`void`

##### stateInformationCallback()?

> `optional` `readonly` **stateInformationCallback**: (`nodeId`, `state`) => `void`

Optional callback method which is called when the state of the node changes. This can be used to detect when
the node goes offline or comes back online.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/export/README.md#nodeid) |
| `state` | [`NodeStateInformation`](enumerations/NodeStateInformation.md) |

###### Returns

`void`

##### subscribeMaxIntervalCeilingSeconds?

> `optional` `readonly` **subscribeMaxIntervalCeilingSeconds**: `number`

Maximum subscription interval when values are changed. This is also used as a keepalive mechanism to validate
that the device is still available. Default it is set to 60s.

##### subscribeMinIntervalFloorSeconds?

> `optional` `readonly` **subscribeMinIntervalFloorSeconds**: `number`

Minimum subscription interval when values are changed. Default it is set to 0s.

#### Source

[packages/matter.js/src/device/PairedNode.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L92)

***

### EndpointLoggingOptions

> **EndpointLoggingOptions**: `object`

Options for logging endpoint structure. The default is that anything is logged beside "Non Supported" attributes and
events on ClusterClients. The Filter methods can be used to filter out specific endpoints or clusters if wanted.

#### Type declaration

##### clusterClientFilter()?

> `optional` **clusterClientFilter**: (`endpoint`, `cluster`) => `boolean`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../endpoint/export/interfaces/EndpointInterface.md) |
| `cluster` | [`ClusterClientObj`](../../cluster/export/README.md#clusterclientobjface)\<`any`, `any`, `any`, `any`\> |

###### Returns

`boolean`

##### clusterServerFilter()?

> `optional` **clusterServerFilter**: (`endpoint`, `cluster`) => `boolean`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../endpoint/export/interfaces/EndpointInterface.md) |
| `cluster` | [`ClusterServerObj`](../../cluster/export/README.md#clusterserverobjae)\<`any`, `any`\> |

###### Returns

`boolean`

##### endpointFilter()?

> `optional` **endpointFilter**: (`endpoint`) => `boolean`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../endpoint/export/interfaces/EndpointInterface.md) |

###### Returns

`boolean`

##### logAttributeObjectValues?

> `optional` **logAttributeObjectValues**: `boolean`

##### logAttributePrimitiveValues?

> `optional` **logAttributePrimitiveValues**: `boolean`

##### logChildEndpoints?

> `optional` **logChildEndpoints**: `boolean`

##### logClusterAttributes?

> `optional` **logClusterAttributes**: `boolean`

##### logClusterClients?

> `optional` **logClusterClients**: `boolean`

##### logClusterCommands?

> `optional` **logClusterCommands**: `boolean`

##### logClusterEvents?

> `optional` **logClusterEvents**: `boolean`

##### logClusterGlobalAttributes?

> `optional` **logClusterGlobalAttributes**: `boolean`

##### logClusterServers?

> `optional` **logClusterServers**: `boolean`

##### logNotSupportedClusterAttributes?

> `optional` **logNotSupportedClusterAttributes**: `boolean`

##### logNotSupportedClusterCommands?

> `optional` **logNotSupportedClusterCommands**: `boolean`

##### logNotSupportedClusterEvents?

> `optional` **logNotSupportedClusterEvents**: `boolean`

#### Source

[packages/matter.js/src/device/EndpointStructureLogger.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/EndpointStructureLogger.ts#L23)

## Variables

### DeviceTypes

> `const` **DeviceTypes**: `object`

#### Index signature

 \[`key`: `string`\]: [`DeviceTypeDefinition`](interfaces/DeviceTypeDefinition.md)

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L118)

## Functions

### DeviceTypeDefinition()

> **DeviceTypeDefinition**(`__namedParameters`): [`DeviceTypeDefinition`](interfaces/DeviceTypeDefinition.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | `object` |
| `__namedParameters.code` | `number` |
| `__namedParameters.deviceClass` | [`DeviceClasses`](enumerations/DeviceClasses.md) |
| `__namedParameters.name` | `string` |
| `__namedParameters.optionalClientClusters`? | [`ClusterId`](../../datatype/export/README.md#clusterid)[] |
| `__namedParameters.optionalServerClusters`? | [`ClusterId`](../../datatype/export/README.md#clusterid)[] |
| `__namedParameters.requiredClientClusters`? | [`ClusterId`](../../datatype/export/README.md#clusterid)[] |
| `__namedParameters.requiredServerClusters`? | [`ClusterId`](../../datatype/export/README.md#clusterid)[] |
| `__namedParameters.revision` | `number` |
| `__namedParameters.superSet`? | `string` |
| `__namedParameters.unknown`? | `boolean` |

#### Returns

[`DeviceTypeDefinition`](interfaces/DeviceTypeDefinition.md)

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L83)

***

### UnknownDeviceType()

> **UnknownDeviceType**(`code`): [`DeviceTypeDefinition`](interfaces/DeviceTypeDefinition.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

[`DeviceTypeDefinition`](interfaces/DeviceTypeDefinition.md)

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:988](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L988)

***

### WrapCommandHandler()

> **WrapCommandHandler**\<`C`\>(`handler`, `commandHandler`?): [`ClusterServerHandlers`](../../cluster/export/README.md#clusterserverhandlersc)\<`C`\>

Utility function to wrap externally registered command handlers into the internal command handler and make sure
the custom ones are used if defined

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Cluster`](../../cluster/export/interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`ClusterServerHandlers`](../../cluster/export/README.md#clusterserverhandlersc)\<`C`\> | Internal handlers instance to wrap the external handler into |
| `commandHandler`? | [`NamedHandler`](../../util/export/classes/NamedHandler.md)\<`any`\> | Command handler instance with the registered handlers |

#### Returns

[`ClusterServerHandlers`](../../cluster/export/README.md#clusterserverhandlersc)\<`C`\>

#### Source

[packages/matter.js/src/device/Device.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L28)

***

### getClusterInitialAttributeValues()

> **getClusterInitialAttributeValues**\<`F`, `SF`, `A`, `C`, `E`\>(`attributeInitialValues`, `cluster`): [`AttributeInitialValues`](../../cluster/export/README.md#attributeinitialvaluesa)\<`A`\> \| `undefined`

Utility function to get the initial attribute values for a cluster out of an object with initial attribute values
for multiple clusters

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attributeInitialValues` | `undefined` \| `object` | Object with initial attribute values for automatically added clusters |
| `cluster` | [`Cluster`](../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | Cluster to get the initial attribute values for |

#### Returns

[`AttributeInitialValues`](../../cluster/export/README.md#attributeinitialvaluesa)\<`A`\> \| `undefined`

#### Source

[packages/matter.js/src/device/OnOffDevices.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/OnOffDevices.ts#L34)

***

### getDeviceTypeDefinitionByCode()

> **getDeviceTypeDefinitionByCode**(`code`): [`DeviceTypeDefinition`](interfaces/DeviceTypeDefinition.md) \| `undefined`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

[`DeviceTypeDefinition`](interfaces/DeviceTypeDefinition.md) \| `undefined`

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:997](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L997)

***

### logEndpoint()

> **logEndpoint**(`endpoint`, `options`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../endpoint/export/interfaces/EndpointInterface.md) |
| `options` | [`EndpointLoggingOptions`](README.md#endpointloggingoptions) |

#### Returns

`void`

#### Source

[packages/matter.js/src/device/EndpointStructureLogger.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/EndpointStructureLogger.ts#L237)
