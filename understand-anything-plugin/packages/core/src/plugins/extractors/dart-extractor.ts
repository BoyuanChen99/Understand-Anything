import type { StructuralAnalysis, CallGraphEntry } from "../../types.js";
import type { LanguageExtractor, TreeSitterNode } from "./types.js";
import { findChild, findChildren } from "./base-extractor.js";

/**
 * Whether a Dart name is exported.
 *
 * Dart's visibility rule is name-based and the INVERSE of Kotlin's: names
 * starting with `_` are library-private, everything else is exported. There
 * is no `public` / `private` keyword to inspect — only the leading character.
 */
function isExported(name: string): boolean {
  return !name.startsWith("_");
}

/**
 * Dart extractor for tree-sitter structural analysis + call graph.
 *
 * Approach (matching `KotlinExtractor` convention): mixin / extension / enum
 * declarations are folded into `StructuralAnalysis.classes[]` because the
 * shared schema does not have a first-class slot for them. Extension
 * declarations without a name surface as `"on <TargetType>"` so they aren't
 * silently dropped.
 */
export class DartExtractor implements LanguageExtractor {
  readonly languageIds = ["dart"];

  extractStructure(rootNode: TreeSitterNode): StructuralAnalysis {
    const functions: StructuralAnalysis["functions"] = [];
    const classes: StructuralAnalysis["classes"] = [];
    const imports: StructuralAnalysis["imports"] = [];
    const exports: StructuralAnalysis["exports"] = [];

    // Implementation lands in subsequent tasks.
    void rootNode;
    void findChild;
    void findChildren;
    void isExported;

    return { functions, classes, imports, exports };
  }

  extractCallGraph(rootNode: TreeSitterNode): CallGraphEntry[] {
    // Implementation lands in a later task.
    void rootNode;
    return [];
  }
}
