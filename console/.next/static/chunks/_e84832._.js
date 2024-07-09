(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_e84832._.js", {

"[project]/components/__generated__/QueryRootQuery.graphql.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * @generated SignedSource<<d934d252751f4acac7d7e60db246675f>>
 * @lightSyntaxTransform
 * @nogrep
 */ /* tslint:disable */ /* eslint-disable */ // @ts-nocheck
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const node = function() {
    var v0 = [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
        }
    ];
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "QueryRootQuery",
            "selections": v0 /*: any*/ ,
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "QueryRootQuery",
            "selections": v0 /*: any*/ 
        },
        "params": {
            "cacheID": "bd73ecb0fe6ceb19f201032924086d18",
            "id": null,
            "metadata": {},
            "name": "QueryRootQuery",
            "operationKind": "query",
            "text": "query QueryRootQuery {\n  name\n}\n"
        }
    };
}();
node.hash = "7a874bbb09ad37fd5fe176c868c06242";
const __TURBOPACK__default__export__ = node;

})()),
"[project]/components/QueryRoot.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>QueryRoot
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$0$2d$canary$2e$9_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.0-canary.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$relay$40$16$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-relay@16.2.0_react@18.2.0/node_modules/react-relay/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
// import gqlFile from "@relay/QueryRootQuery.graphql";
const query = __turbopack_require__("[project]/components/__generated__/QueryRootQuery.graphql.ts [app-client] (ecmascript)");
function QueryRoot() {
    //   return <div>{data.name}</div>;
    if (!query) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$0$2d$canary$2e$9_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QueryRootV2, {}, void 0, false, {
            fileName: "[project]/components/QueryRoot.tsx",
            lineNumber: 13,
            columnNumber: 12
        }, this);
    }
    return "test";
}
_c = QueryRoot;
function QueryRootV2() {
    _s();
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$relay$40$16$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyLoadQuery"])(__turbopack_require__("[project]/components/__generated__/QueryRootQuery.graphql.ts [app-client] (ecmascript)"), {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$0$2d$canary$2e$9_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: data.name
    }, void 0, false, {
        fileName: "[project]/components/QueryRoot.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_s(QueryRootV2, "Evuu2pe67FswVQPnjZiw9yJaTEY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$relay$40$16$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyLoadQuery"]
    ];
});
_c1 = QueryRootV2;
var _c, _c1;
__turbopack_refresh__.register(_c, "QueryRoot");
__turbopack_refresh__.register(_c1, "QueryRootV2");

})()),
"[project]/app/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$0$2d$canary$2e$9_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.0-canary.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QueryRoot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/QueryRoot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$relay$40$16$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-relay@16.2.0_react@18.2.0/node_modules/react-relay/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$0$2d$canary$2e$9_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$relay$40$16$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$react$2d$relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelayEnvironmentProvider"], {
        environment: {},
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$0$2d$canary$2e$9_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QueryRoot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");

})()),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=_e84832._.js.map