[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / SubscriptionOptions

# Interface: SubscriptionOptions

[\<internal\>](../modules/internal_.md).SubscriptionOptions

Server options that control subscription handling.

## Table of contents

### Properties

- [maxIntervalSeconds](internal_.SubscriptionOptions-1.md#maxintervalseconds)
- [minIntervalSeconds](internal_.SubscriptionOptions-1.md#minintervalseconds)
- [randomizationWindowSeconds](internal_.SubscriptionOptions-1.md#randomizationwindowseconds)

## Properties

### maxIntervalSeconds

• `Optional` **maxIntervalSeconds**: `number`

Optional maximum subscription interval to use for sending subscription reports. It will be used if not too
low and inside the range requested by the connected controller.

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionOptions.d.ts:14

___

### minIntervalSeconds

• `Optional` **minIntervalSeconds**: `number`

Optional minimum subscription interval to use for sending subscription reports. It will be used when other
calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to
set limits.

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionOptions.d.ts:20

___

### randomizationWindowSeconds

• `Optional` **randomizationWindowSeconds**: `number`

Optional subscription randomization window to use for sending subscription reports. This specifies a window
in seconds from which a random part is added to the calculated maximum interval to make sure that devices
that get powered on in parallel not all send at the same timepoint.

#### Defined in

matter.js/dist/esm/protocol/interaction/SubscriptionOptions.d.ts:26
