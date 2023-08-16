"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsDefined = void 0;
function assertIsDefined(val) {
    // why dont we use :any ? because we want to get the non-nullable type back 
    if (!val) {
        throw Error("Expected 'val' to be defined, but recieved " + val);
    }
}
exports.assertIsDefined = assertIsDefined;
