[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / LocalizationConfiguration

# Namespace: LocalizationConfiguration

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/LocalizationConfigurationCluster.d.ts:54

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeLocale

> `readonly` **activeLocale**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`string`, `any`\>

The ActiveLocale attribute shall represent the locale that the Node is currently configured to use when
conveying information. The ActiveLocale attribute shall be a Language Tag as defined by BCP47
[https://tools.ietf.org/rfc/bcp/bcp47.txt]. The ActiveLocale attribute shall have a default value
assigned by the Vendor and shall be a value contained within the SupportedLocales attribute list.

An attempt to write a value to ActiveLocale that is not present in SupportedLocales shall result in a
CONSTRAINT_ERROR error.

###### See

MatterSpecification.v11.Core § 11.3.4.1

##### attributes.supportedLocales

> `readonly` **supportedLocales**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`[], `any`\>

The SupportedLocales attribute shall represent a list of locale strings that are valid values for the
ActiveLocale attribute. The list shall NOT contain any duplicate entries. The ordering of items within
the list SHOULD NOT express any meaning.

###### See

MatterSpecification.v11.Core § 11.3.4.2

##### id

> `readonly` **id**: `43`

##### name

> `readonly` **name**: `"LocalizationConfiguration"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/LocalizationConfigurationCluster.d.ts:14

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/LocalizationConfigurationCluster.d.ts:57
