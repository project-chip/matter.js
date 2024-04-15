[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Switch](../modules/exports_cluster.Switch.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[Switch](../modules/exports_cluster.Switch.md).Cluster

Switch

This cluster exposes interactions with a switch device, for the purpose of using those interactions by other
devices.

Two types of switch devices are supported: latching switch (e.g. rocker switch) and momentary switch (e.g. push
button), distinguished with their feature flags.

Interactions with the switch device are exposed as attributes (for the latching switch) and as events (for both
types of switches).

An interested client may subscribe to these attributes/events and thus be informed of the interactions, and can
perform actions based on this, for example by sending commands to perform an action such as controlling a light
or a window shade.

Per the Matter specification you cannot use [SwitchCluster](../modules/exports_cluster.md#switchcluster-1) without enabling certain feature combinations.
You must use the SwitchCluster.with() factory method to obtain a working cluster.

**`See`**

MatterSpecification.v11.Cluster § 1.11

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.Switch.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [id](exports_cluster.Switch.Cluster.md#id)
- [name](exports_cluster.Switch.Cluster.md#name)
- [with](exports_cluster.Switch.Cluster.md#with)

## Properties

### id

• **id**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:55

___

### name

• **name**: `string`

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:56

___

### with

• **with**: \<SelectionT\>(...`selection`: `SelectionT`) => [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ... ; `totalNumberOfPressesCounted`: ...  }\>, `any`\> ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: ... ; `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `latchingSwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\> ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchLongPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchMultiPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``true`` ; `momentarySwitch`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``false`` ; `momentarySwitch`: ``false``  }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Type declaration

▸ \<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ... ; `totalNumberOfPressesCounted`: ...  }\>, `any`\> ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: ... ; `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `latchingSwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\> ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchLongPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchMultiPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``true`` ; `momentarySwitch`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``false`` ; `momentarySwitch`: ``false``  }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

##### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ... ; `totalNumberOfPressesCounted`: ...  }\>, `any`\> ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: ... ; `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `latchingSwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\> ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchLongPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchMultiPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``true`` ; `momentarySwitch`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``false`` ; `momentarySwitch`: ``false``  }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

##### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ... ; `totalNumberOfPressesCounted`: ...  }\>, `any`\> ; `multiPressOngoing`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: ... ; `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `latchingSwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitch`: ``true``  }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\> ; `longRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } ; `flags`: \{ `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchRelease`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchLongPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchLongPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitch`: ``false`` ; `momentarySwitchMultiPress`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `momentarySwitchMultiPress`: ``true`` ; `momentarySwitchRelease`: ``false``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``true`` ; `momentarySwitch`: ``true``  }  }, \{ `component`: ``false`` ; `flags`: \{ `latchingSwitch`: ``false`` ; `momentarySwitch`: ``false``  }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``59`` ; `name`: ``"Switch"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:57
