[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [NetworkCommissioning](../README.md) / Complete

# Interface: Complete

This cluster supports all NetworkCommissioning features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`CompleteInstance`](../README.md#completeinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### connectMaxTimeSeconds

> `readonly` **connectMaxTimeSeconds**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### interfaceEnabled

> `readonly` **interfaceEnabled**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`boolean`, `any`\>

This attribute shall indicate whether the associated network interface is enabled or not. By default all
network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true).

It is undefined what happens if InterfaceEnabled is written to false on the same interface as that which
is used to write the value. In that case, it is possible that the Administrator would have to await
expiry of the fail-safe, and associated recovery of network configuration to prior safe values, before
being able to communicate with the node again (see Section 11.9.6.2, “ArmFailSafe Command”).

It may be possible to disable Ethernet interfaces but it is implementation-defined. If not supported, a
write to this attribute with a value of false shall fail with a status of INVALID_ACTION. When disabled,
an Ethernet interface would longer employ media detection. That is, a simple unplug and replug of the
cable shall NOT re-enable the interface.

On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server cluster
instances with InterfaceEnabled set to true.

###### See

MatterSpecification.v11.Core § 11.8.6.5

##### lastConnectErrorValue

> `readonly` **lastConnectErrorValue**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the ErrorValue used in the last failed attempt to connect to an
operational network, using this interface, whether by invocation of the ConnectNetwork command or by
autonomous connection after loss of connectivity or during initial establishment. If no such attempt was
made, or no network configurations exist in the Networks attribute, then this attribute shall be set to
null.

If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus
attribute, then this field shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.8

##### lastNetworkId

> `readonly` **lastNetworkId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `Uint8Array`, `any`\>

This attribute shall indicate the NetworkID used in the last attempt to connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

If a network configuration is removed from the Networks attribute using the RemoveNetwork command after
a connection attempt, this field may indicate a NetworkID that is no longer configured on the Node.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.7

##### lastNetworkingStatus

> `readonly` **lastNetworkingStatus**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`NetworkCommissioningStatus`](../enumerations/NetworkCommissioningStatus.md), `any`\>

This attribute shall indicate the status of the last attempt either scan or connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.6

##### maxNetworks

> `readonly` **maxNetworks**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This shall indicate the maximum number of network configuration entries that can be added, based on
available device resources. The length of the Networks attribute list shall be less than or equal to
this value.

###### See

MatterSpecification.v11.Core § 11.8.6.1

##### networks

> `readonly` **networks**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute shall indicate the network configurations that are usable on the network interface
represented by this cluster server instance.

The order of configurations in the list reflects precedence. That is, any time the Node attempts to
connect to the network it shall attempt to do so using the configurations in Networks Attribute in the
order as they appear in the list.

The order of list items shall only be modified by the AddOrUpdateThreadNetwork, AddOrUpdateWiFiNetwork
and ReorderNetwork commands. In other words, the list shall be stable over

time, unless mutated externally.

Ethernet networks shall be automatically populated by the cluster server. Ethernet Network Commissioning
Cluster instances shall always have exactly one Section 11.8.5.4, “NetworkInfoStruct” instance in their
Networks attribute. There shall be no way to add, update or remove Ethernet network configurations to
those Cluster instances.

###### See

MatterSpecification.v11.Core § 11.8.6.2

##### scanMaxTimeSeconds

> `readonly` **scanMaxTimeSeconds**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

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

#### addOrUpdateThreadNetwork

> `readonly` **addOrUpdateThreadNetwork**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

#### addOrUpdateWiFiNetwork

> `readonly` **addOrUpdateWiFiNetwork**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

#### connectNetwork

> `readonly` **connectNetwork**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

#### removeNetwork

> `readonly` **removeNetwork**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

#### reorderNetwork

> `readonly` **reorderNetwork**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

#### scanNetworks

> `readonly` **scanNetworks**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

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

#### ethernetNetworkInterface

> `readonly` **ethernetNetworkInterface**: [`BitFlag`](../../../../schema/README.md#bitflag)

EthernetNetworkInterface

Ethernet related features

#### threadNetworkInterface

> `readonly` **threadNetworkInterface**: [`BitFlag`](../../../../schema/README.md#bitflag)

ThreadNetworkInterface

Thread related features

#### wiFiNetworkInterface

> `readonly` **wiFiNetworkInterface**: [`BitFlag`](../../../../schema/README.md#bitflag)

WiFiNetworkInterface

Wi-Fi related features

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`49`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"NetworkCommissioning"`

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

##### attributes.connectMaxTimeSeconds

> `readonly` **connectMaxTimeSeconds**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### attributes.interfaceEnabled

> `readonly` **interfaceEnabled**: [`WritableAttribute`](../../../interfaces/WritableAttribute.md)\<`boolean`, `any`\>

This attribute shall indicate whether the associated network interface is enabled or not. By default all
network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true).

It is undefined what happens if InterfaceEnabled is written to false on the same interface as that which
is used to write the value. In that case, it is possible that the Administrator would have to await
expiry of the fail-safe, and associated recovery of network configuration to prior safe values, before
being able to communicate with the node again (see Section 11.9.6.2, “ArmFailSafe Command”).

It may be possible to disable Ethernet interfaces but it is implementation-defined. If not supported, a
write to this attribute with a value of false shall fail with a status of INVALID_ACTION. When disabled,
an Ethernet interface would longer employ media detection. That is, a simple unplug and replug of the
cable shall NOT re-enable the interface.

On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server cluster
instances with InterfaceEnabled set to true.

###### See

MatterSpecification.v11.Core § 11.8.6.5

##### attributes.lastConnectErrorValue

> `readonly` **lastConnectErrorValue**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

This attribute shall indicate the ErrorValue used in the last failed attempt to connect to an
operational network, using this interface, whether by invocation of the ConnectNetwork command or by
autonomous connection after loss of connectivity or during initial establishment. If no such attempt was
made, or no network configurations exist in the Networks attribute, then this attribute shall be set to
null.

If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus
attribute, then this field shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.8

##### attributes.lastNetworkId

> `readonly` **lastNetworkId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `Uint8Array`, `any`\>

This attribute shall indicate the NetworkID used in the last attempt to connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

If a network configuration is removed from the Networks attribute using the RemoveNetwork command after
a connection attempt, this field may indicate a NetworkID that is no longer configured on the Node.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.7

##### attributes.lastNetworkingStatus

> `readonly` **lastNetworkingStatus**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`NetworkCommissioningStatus`](../enumerations/NetworkCommissioningStatus.md), `any`\>

This attribute shall indicate the status of the last attempt either scan or connect to an operational
network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous
connection after loss of connectivity or during initial establishment. If no such attempt was made, or
no network configurations exist in the Networks attribute, then this attribute shall be set to null.

This attribute is present to assist with error recovery during Network commissioning and to assist in
non-concurrent networking commissioning flows.

###### See

MatterSpecification.v11.Core § 11.8.6.6

##### attributes.maxNetworks

> `readonly` **maxNetworks**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This shall indicate the maximum number of network configuration entries that can be added, based on
available device resources. The length of the Networks attribute list shall be less than or equal to
this value.

###### See

MatterSpecification.v11.Core § 11.8.6.1

##### attributes.networks

> `readonly` **networks**: [`Attribute`](../../../interfaces/Attribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This attribute shall indicate the network configurations that are usable on the network interface
represented by this cluster server instance.

The order of configurations in the list reflects precedence. That is, any time the Node attempts to
connect to the network it shall attempt to do so using the configurations in Networks Attribute in the
order as they appear in the list.

The order of list items shall only be modified by the AddOrUpdateThreadNetwork, AddOrUpdateWiFiNetwork
and ReorderNetwork commands. In other words, the list shall be stable over

time, unless mutated externally.

Ethernet networks shall be automatically populated by the cluster server. Ethernet Network Commissioning
Cluster instances shall always have exactly one Section 11.8.5.4, “NetworkInfoStruct” instance in their
Networks attribute. There shall be no way to add, update or remove Ethernet network configurations to
those Cluster instances.

###### See

MatterSpecification.v11.Core § 11.8.6.2

##### attributes.scanMaxTimeSeconds

> `readonly` **scanMaxTimeSeconds**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands

> `readonly` **commands**: `object`

##### commands.addOrUpdateThreadNetwork

> `readonly` **addOrUpdateThreadNetwork**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands.addOrUpdateWiFiNetwork

> `readonly` **addOrUpdateWiFiNetwork**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands.connectNetwork

> `readonly` **connectNetwork**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands.removeNetwork

> `readonly` **removeNetwork**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands.reorderNetwork

> `readonly` **reorderNetwork**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### commands.scanNetworks

> `readonly` **scanNetworks**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`, `object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/README.md#bitschema)\>

##### features

> `readonly` **features**: `object`

##### features.ethernetNetworkInterface

> `readonly` **ethernetNetworkInterface**: [`BitFlag`](../../../../schema/README.md#bitflag)

EthernetNetworkInterface

Ethernet related features

##### features.threadNetworkInterface

> `readonly` **threadNetworkInterface**: [`BitFlag`](../../../../schema/README.md#bitflag)

ThreadNetworkInterface

Thread related features

##### features.wiFiNetworkInterface

> `readonly` **wiFiNetworkInterface**: [`BitFlag`](../../../../schema/README.md#bitflag)

WiFiNetworkInterface

Wi-Fi related features

##### id

> `readonly` **id**: `49`

##### name

> `readonly` **name**: `"NetworkCommissioning"`

##### revision

> `readonly` **revision**: `1`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
