/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matter, MatterModel, ValidateModel } from "../../../src/model/index.js";

let matterModel: MatterModel;
let validationResult: ValidateModel.Result | undefined;

function instantiate() {
    if (!matterModel) {
        matterModel = new MatterModel(Matter);
    }
    return matterModel;
}

function validate() {
    if (!validationResult) {
        validationResult = ValidateModel(instantiate());
    }
    return validationResult;
}

describe("Matter", () => {
    it("instantiates model", () => {
        expect(() => {
            instantiate();
        }).not.throw();
    });

    it("validates", function () {
        // TODO - remove this after optimization
        this.timeout(10000);

        expect(() => {
            validate();
        }).not.throw();
    });

    it("has not increased in errors", () => {
        validate().report();
        expect(validationResult?.errors.length).most(16);
    });

    it("has not decreased in scope", () => {
        expect(validate().elementCount).least(3582);
    });
});
