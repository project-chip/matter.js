[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / SubscriptionOptions

# Interface: SubscriptionOptions

[node/export](../modules/node_export.md).[\<internal\>](../modules/node_export._internal_.md).SubscriptionOptions

Server options that control subscription handling.

## Table of contents

### Properties

- [maxIntervalSeconds](node_export._internal_.SubscriptionOptions-1.md#maxintervalseconds)
- [minIntervalSeconds](node_export._internal_.SubscriptionOptions-1.md#minintervalseconds)
- [randomizationWindowSeconds](node_export._internal_.SubscriptionOptions-1.md#randomizationwindowseconds)

## Properties

### maxIntervalSeconds

• `Optional` **maxIntervalSeconds**: `number`

Optional maximum subscription interval to use for sending subscription reports. It will be used if not too
low and inside the range requested by the connected controller.

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts#L26)

___

### minIntervalSeconds

• `Optional` **minIntervalSeconds**: `number`

Optional minimum subscription interval to use for sending subscription reports. It will be used when other
calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to
set limits.

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts#L33)

___

### randomizationWindowSeconds

• `Optional` **randomizationWindowSeconds**: `number`

Optional subscription randomization window to use for sending subscription reports. This specifies a window
in seconds from which a random part is added to the calculated maximum interval to make sure that devices
that get powered on in parallel not all send at the same timepoint.

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts#L40)
