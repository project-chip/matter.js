[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/color-control/export](../README.md) / \<internal\>

# \<internal\>

## Type Aliases

### ColorControlBehaviorType

> **ColorControlBehaviorType**: `InstanceType`\<*typeof* [`ColorControlBehavior`](../README.md#colorcontrolbehavior)\>

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts#L23)

***

### HueTransitionData

> **HueTransitionData**: [`TransitionData`](README.md#transitiondata) & `object`

#### Type declaration

##### distanceLeft?

> `optional` **distanceLeft**: `number`

##### isEnhancedHue

> **isEnhancedHue**: `boolean`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2097](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2097)

***

### ManagedTransitionType

> **ManagedTransitionType**: `"hue"` \| `"enhancedHue"` \| `"saturation"` \| `"colorTemperature"` \| `"x"` \| `"y"`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L61)

***

### StateType

> **StateType**: `InstanceType`\<*typeof* `ColorControlBehavior.State`\>

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlBehavior.ts#L25)

***

### TransitionData

> **TransitionData**: `object`

#### Type declaration

##### changeRate

> **changeRate**: `number`

##### maxValue

> **maxValue**: `number`

##### minValue

> **minValue**: `number`

##### remainingTime?

> `optional` **remainingTime**: `number`

##### targetValue?

> `optional` **targetValue**: `number`

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:2089](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L2089)

## Variables

### ColorControlServerBase

> `const` **ColorControlServerBase**: [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), readonly [[`HueSaturation`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#huesaturation), [`EnhancedHue`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#enhancedhue), [`ColorLoop`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colorloop), [`Xy`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#xy), [`ColorTemperature`](../../../../../cluster/export/namespaces/ColorControl/enumerations/Feature.md#colortemperature)]\>, [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../../cluster/export/namespaces/ColorControl/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`ColorControlInterface`](../README.md#colorcontrolinterface)\>, [`ColorControlInterface`](../README.md#colorcontrolinterface)\>, [`ColorControlInterface`](../README.md#colorcontrolinterface)\>

#### Source

[packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/color-control/ColorControlServer.ts#L53)
