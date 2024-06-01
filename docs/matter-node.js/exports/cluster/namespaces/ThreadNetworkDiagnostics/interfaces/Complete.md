[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / Complete

# Interface: Complete

This cluster supports all ThreadNetworkDiagnostics features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`CompleteInstance`](../README.md#completeinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

##### activeNetworkFaults

> `readonly` **activeNetworkFaults**: [`Attribute`](../../../interfaces/Attribute.md)\<[`NetworkFault`](../enumerations/NetworkFault.md)[], `any`\>

##### activeTimestamp

> `readonly` **activeTimestamp**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number` \| `bigint`, `any`\>

##### attachAttemptCount

> `readonly` **attachAttemptCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributeList

> `readonly` **attributeList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/README.md#attributeid)[], `never`\>

##### betterPartitionAttachAttemptCount

> `readonly` **betterPartitionAttachAttemptCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### channel

> `readonly` **channel**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### channelPage0Mask

> `readonly` **channelPage0Mask**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `Uint8Array`, `any`\>

##### childRoleCount

> `readonly` **childRoleCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

##### dataVersion

> `readonly` **dataVersion**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### delay

> `readonly` **delay**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

##### detachedRoleCount

> `readonly` **detachedRoleCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/README.md#eventid)[], `never`\>

##### extendedPanId

> `readonly` **extendedPanId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

##### featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

##### generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

##### leaderRoleCount

> `readonly` **leaderRoleCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### leaderRouterId

> `readonly` **leaderRouterId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### meshLocalPrefix

> `readonly` **meshLocalPrefix**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `Uint8Array`, `any`\>

##### neighborTable

> `readonly` **neighborTable**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

##### networkName

> `readonly` **networkName**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `string`, `any`\>

##### operationalDatasetComponents

> `readonly` **operationalDatasetComponents**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### overrunCount

> `readonly` **overrunCount**: [`Attribute`](../../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### panId

> `readonly` **panId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### parentChangeCount

> `readonly` **parentChangeCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### partitionId

> `readonly` **partitionId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### partitionIdChangeCount

> `readonly` **partitionIdChangeCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### pendingTimestamp

> `readonly` **pendingTimestamp**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number` \| `bigint`, `any`\>

##### routeTable

> `readonly` **routeTable**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

##### routerRoleCount

> `readonly` **routerRoleCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### routingRole

> `readonly` **routingRole**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`RoutingRole`](../enumerations/RoutingRole.md), `any`\>

##### rxAddressFilteredCount

> `readonly` **rxAddressFilteredCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxBeaconCount

> `readonly` **rxBeaconCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxBeaconRequestCount

> `readonly` **rxBeaconRequestCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxBroadcastCount

> `readonly` **rxBroadcastCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxDataCount

> `readonly` **rxDataCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxDataPollCount

> `readonly` **rxDataPollCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxDestAddrFilteredCount

> `readonly` **rxDestAddrFilteredCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxDuplicatedCount

> `readonly` **rxDuplicatedCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxErrFcsCount

> `readonly` **rxErrFcsCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxErrInvalidScrAddrCount

> `readonly` **rxErrInvalidScrAddrCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxErrNoFrameCount

> `readonly` **rxErrNoFrameCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxErrOtherCount

> `readonly` **rxErrOtherCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxErrSecCount

> `readonly` **rxErrSecCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxErrUnknownNeighborCount

> `readonly` **rxErrUnknownNeighborCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxOtherCount

> `readonly` **rxOtherCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxTotalCount

> `readonly` **rxTotalCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### rxUnicastCount

> `readonly` **rxUnicastCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### securityPolicy

> `readonly` **securityPolicy**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### stableDataVersion

> `readonly` **stableDataVersion**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### txAckRequestedCount

> `readonly` **txAckRequestedCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txAckedCount

> `readonly` **txAckedCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txBeaconCount

> `readonly` **txBeaconCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txBeaconRequestCount

> `readonly` **txBeaconRequestCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txBroadcastCount

> `readonly` **txBroadcastCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txDataCount

> `readonly` **txDataCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txDataPollCount

> `readonly` **txDataPollCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txDirectMaxRetryExpiryCount

> `readonly` **txDirectMaxRetryExpiryCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txErrAbortCount

> `readonly` **txErrAbortCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txErrBusyChannelCount

> `readonly` **txErrBusyChannelCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txErrCcaCount

> `readonly` **txErrCcaCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txIndirectMaxRetryExpiryCount

> `readonly` **txIndirectMaxRetryExpiryCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txNoAckRequestedCount

> `readonly` **txNoAckRequestedCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txOtherCount

> `readonly` **txOtherCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txRetryCount

> `readonly` **txRetryCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txTotalCount

> `readonly` **txTotalCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### txUnicastCount

> `readonly` **txUnicastCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### weighting

> `readonly` **weighting**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

#### Inherited from

`Identity.attributes`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `object`

#### resetCounts

> `readonly` **resetCounts**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Thread network has
changed.

##### See

MatterSpecification.v11.Core § 11.13.8.2

#### networkFaultChange

> `readonly` **networkFaultChange**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
the Node.

##### See

MatterSpecification.v11.Core § 11.13.8.1

#### Inherited from

`Identity.events`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

ErrorCounts

Server supports the counts for the number of errors that have occurred during the reception and
transmission of packets on the Thread interface.

#### macCounts

> `readonly` **macCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

MacCounts

Server supports the counts for various MAC layer happenings.

#### mleCounts

> `readonly` **mleCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

MleCounts

Server supports the counts for various MLE layer happenings.

#### packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

PacketCounts

Server supports the counts for the number of received and transmitted packets on the Thread interface.

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<[`Branded`](../../../../../util/export/README.md#brandedtb)\<`53`, `"ClusterId"`\>, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"ThreadNetworkDiagnostics"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `1`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

##### attributes.activeNetworkFaults

> `readonly` **activeNetworkFaults**: [`Attribute`](../../../interfaces/Attribute.md)\<[`NetworkFault`](../enumerations/NetworkFault.md)[], `any`\>

##### attributes.activeTimestamp

> `readonly` **activeTimestamp**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number` \| `bigint`, `any`\>

##### attributes.attachAttemptCount

> `readonly` **attachAttemptCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/README.md#attributeid)[], `never`\>

##### attributes.betterPartitionAttachAttemptCount

> `readonly` **betterPartitionAttachAttemptCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.channel

> `readonly` **channel**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### attributes.channelPage0Mask

> `readonly` **channelPage0Mask**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `Uint8Array`, `any`\>

##### attributes.childRoleCount

> `readonly` **childRoleCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.dataVersion

> `readonly` **dataVersion**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### attributes.delay

> `readonly` **delay**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number`, `any`\>

##### attributes.detachedRoleCount

> `readonly` **detachedRoleCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/README.md#eventid)[], `never`\>

##### attributes.extendedPanId

> `readonly` **extendedPanId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number` \| `bigint`, `any`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/README.md#commandid)[], `never`\>

##### attributes.leaderRoleCount

> `readonly` **leaderRoleCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.leaderRouterId

> `readonly` **leaderRouterId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### attributes.meshLocalPrefix

> `readonly` **meshLocalPrefix**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `Uint8Array`, `any`\>

##### attributes.neighborTable

> `readonly` **neighborTable**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

##### attributes.networkName

> `readonly` **networkName**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `string`, `any`\>

##### attributes.operationalDatasetComponents

> `readonly` **operationalDatasetComponents**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### attributes.overrunCount

> `readonly` **overrunCount**: [`Attribute`](../../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.panId

> `readonly` **panId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### attributes.parentChangeCount

> `readonly` **parentChangeCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.partitionId

> `readonly` **partitionId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### attributes.partitionIdChangeCount

> `readonly` **partitionIdChangeCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.pendingTimestamp

> `readonly` **pendingTimestamp**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`null` \| `number` \| `bigint`, `any`\>

##### attributes.routeTable

> `readonly` **routeTable**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

##### attributes.routerRoleCount

> `readonly` **routerRoleCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.routingRole

> `readonly` **routingRole**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`RoutingRole`](../enumerations/RoutingRole.md), `any`\>

##### attributes.rxAddressFilteredCount

> `readonly` **rxAddressFilteredCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxBeaconCount

> `readonly` **rxBeaconCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxBeaconRequestCount

> `readonly` **rxBeaconRequestCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxBroadcastCount

> `readonly` **rxBroadcastCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxDataCount

> `readonly` **rxDataCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxDataPollCount

> `readonly` **rxDataPollCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxDestAddrFilteredCount

> `readonly` **rxDestAddrFilteredCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxDuplicatedCount

> `readonly` **rxDuplicatedCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrFcsCount

> `readonly` **rxErrFcsCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrInvalidScrAddrCount

> `readonly` **rxErrInvalidScrAddrCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrNoFrameCount

> `readonly` **rxErrNoFrameCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrOtherCount

> `readonly` **rxErrOtherCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrSecCount

> `readonly` **rxErrSecCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxErrUnknownNeighborCount

> `readonly` **rxErrUnknownNeighborCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxOtherCount

> `readonly` **rxOtherCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxTotalCount

> `readonly` **rxTotalCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.rxUnicastCount

> `readonly` **rxUnicastCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.securityPolicy

> `readonly` **securityPolicy**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### attributes.stableDataVersion

> `readonly` **stableDataVersion**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### attributes.txAckRequestedCount

> `readonly` **txAckRequestedCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txAckedCount

> `readonly` **txAckedCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txBeaconCount

> `readonly` **txBeaconCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txBeaconRequestCount

> `readonly` **txBeaconRequestCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txBroadcastCount

> `readonly` **txBroadcastCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txDataCount

> `readonly` **txDataCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txDataPollCount

> `readonly` **txDataPollCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txDirectMaxRetryExpiryCount

> `readonly` **txDirectMaxRetryExpiryCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txErrAbortCount

> `readonly` **txErrAbortCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txErrBusyChannelCount

> `readonly` **txErrBusyChannelCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txErrCcaCount

> `readonly` **txErrCcaCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txIndirectMaxRetryExpiryCount

> `readonly` **txIndirectMaxRetryExpiryCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txNoAckRequestedCount

> `readonly` **txNoAckRequestedCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txOtherCount

> `readonly` **txOtherCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txRetryCount

> `readonly` **txRetryCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txTotalCount

> `readonly` **txTotalCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.txUnicastCount

> `readonly` **txUnicastCount**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`object`]

##### attributes.weighting

> `readonly` **weighting**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.resetCounts

> `readonly` **resetCounts**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### events

> `readonly` **events**: `object`

##### events.connectionStatus

> `readonly` **connectionStatus**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The ConnectionStatus Event shall indicate that a Node’s connection status to a Thread network has
changed.

###### See

MatterSpecification.v11.Core § 11.13.8.2

##### events.networkFaultChange

> `readonly` **networkFaultChange**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
the Node.

###### See

MatterSpecification.v11.Core § 11.13.8.1

##### features

> `readonly` **features**: `object`

##### features.errorCounts

> `readonly` **errorCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

ErrorCounts

Server supports the counts for the number of errors that have occurred during the reception and
transmission of packets on the Thread interface.

##### features.macCounts

> `readonly` **macCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

MacCounts

Server supports the counts for various MAC layer happenings.

##### features.mleCounts

> `readonly` **mleCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

MleCounts

Server supports the counts for various MLE layer happenings.

##### features.packetCounts

> `readonly` **packetCounts**: [`BitFlag`](../../../../schema/README.md#bitflag)

PacketCounts

Server supports the counts for the number of received and transmitted packets on the Thread interface.

##### id

> `readonly` **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`53`, `"ClusterId"`\>

##### name

> `readonly` **name**: `"ThreadNetworkDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
