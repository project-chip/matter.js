# @matter/types - Matter operational types and data structures for Matter.js

This package implements operational types and data structures for Matter.

Due to type definition size, we do not export clusters as part of the root package.  You may instead import then as:

```typescript
import { OnOffCluster } from "@matter/types/clusters/OnOffCluster";
```

or:

```typescript
import { OnOffCluster } from "@matter/types/clusters";
```
