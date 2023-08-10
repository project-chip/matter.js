/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../../common/MatterError.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { Conformance } from "../../aspects/index.js";
import { ClusterModel, DatatypeModel } from "../../models/index.js";
import { FeatureBitmap } from "./FeatureBitmap.js";

export type IllegalFeatureCombinations = FeatureBitmap[];

type Choices = {
    [name: string]: {
        exclusive: boolean;
        features: string[];
    };
};

/**
 * Analyzes feature conformance to ascertain feature combinations that are
 * unsupported.  Uses rules to match the conformance AST.
 *
 * Rule matching is not exhaustive but supports a significant subset of the
 * conformance dialect that is inclusive of all feature conformances used by
 * the 1.1 specifications.
 *
 * Throws an error if conformance does not adhere to supported rules.  This
 * indicates the ruleset needs augmentation.
 */
export function IllegalFeatureCombinations(cluster: ClusterModel) {
    const illegal = [] as IllegalFeatureCombinations;
    const choices = {} as Choices;

    for (const f of cluster.features) {
        addFeatureNode(f, f.conformance.ast, illegal, choices);
    }

    function add(flags: FeatureBitmap) {
        if (!illegal.some(e => isDeepEqual(e, flags))) {
            illegal.push(flags);
        }
    }

    for (const choice of Object.values(choices)) {
        // If choices are mutually exclusive, reject any two flags in
        // combination
        if (choice.exclusive) {
            for (const f1 of choice.features) {
                for (const f2 of choice.features) {
                    if (f1 !== f2) {
                        add({ [f1]: true, [f2]: true });
                    }
                }
            }
        }

        // At least one feature choice must be enabled
        const flags = FeatureBitmap();
        for (const f of choice.features) {
            flags[f] = false;
        }

        add(flags);
    }

    return { illegal, requiresFeatures: !!choices.length };
}

function addFeatureNode(
    feature: DatatypeModel,
    node: Conformance.Ast,
    illegal: IllegalFeatureCombinations,
    choices: Choices,
) {
    function unsupported() {
        throw new InternalError(`New rule required to support ${feature.path} conformance "${feature.conformance}"`);
    }

    function addDisjunctRequirement(flags: FeatureBitmap, node: Conformance.Ast) {
        switch (node.type) {
            case Conformance.Special.Name:
                flags[node.param] = false;
                break;

            case Conformance.OR:
                addDisjunctRequirement(flags, node.param.lhs);
                addDisjunctRequirement(flags, node.param.rhs);
                break;

            default:
                unsupported();
        }
    }

    function addConjunctRequirement(feature: string, node: Conformance.Ast) {
        switch (node.type) {
            case Conformance.Special.Name:
                illegal.push({ [feature]: true, [node.param]: false });
                break;

            case Conformance.AND:
                addConjunctRequirement(feature, node.param.lhs);
                addConjunctRequirement(feature, node.param.rhs);
                break;
        }
    }

    switch (node.type) {
        case Conformance.Special.Empty:
        case Conformance.Flag.Optional:
        case Conformance.Flag.Provisional:
            break;

        case Conformance.Special.Group:
            node.param.forEach(ast => addFeatureNode(feature, ast, illegal, choices));
            break;

        case Conformance.Special.Choice:
            if (node.param.num > 1) {
                unsupported();
            }
            let choice = choices[node.param.name];
            if (choice) {
                choice.features.push(feature.name);
            } else {
                choice = choices[node.param.name] = {
                    exclusive: !node.param.orMore,
                    features: [feature.name],
                };
            }
            break;

        case Conformance.Special.Name:
            illegal.push({ [node.param]: true, [feature.name]: false });
            break;

        case Conformance.Special.OptionalIf:
            if (node.param.type == Conformance.AND) {
                addConjunctRequirement(feature.name, node.param);
            } else {
                const flags = FeatureBitmap({ [feature.name]: true });
                addDisjunctRequirement(flags, node.param);
                illegal.push(flags);
            }
            break;

        default:
            unsupported();
            break;
    }
}
