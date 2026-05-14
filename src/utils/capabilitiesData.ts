export interface Capability {
  slug: string;
  name: string;
  tagline: string;
  color: string;
  gradient: string;
  icon: 'ingestion' | 'taxonomy' | 'logic' | 'execution' | 'knowledge' | 'persona' | 'authorized' | 'hitl';
  type: 'step' | 'activity';
  status?: 'success' | 'warning';
  description: string;
  longDescription: string;
  features: { title: string; description: string }[];
  technicalDetails: string[];
}

export const capabilities: Capability[] = [
  // Left column — Steps
  {
    slug: 'contextual-ingestion',
    name: 'Contextual Ingestion',
    tagline: 'Intelligent data absorption with semantic understanding',
    color: '#64748b',
    gradient: 'from-slate-500 to-slate-700',
    icon: 'ingestion',
    type: 'step',
    description: 'The first stage of the Twin Core pipeline. Raw inputs — documents, conversations, behavioral signals — are parsed, chunked, and enriched with contextual metadata before entering the knowledge graph.',
    longDescription: 'Contextual Ingestion is the sensory gateway of your Digital Twin. Unlike simple data import, it applies multi-layered semantic analysis to every input, understanding not just what was said, but the intent, tone, and situational context behind it. This enables the twin to build a rich, nuanced understanding that mirrors your own cognitive intake process.',
    features: [
      { title: 'Multi-Modal Parsing', description: 'Processes text, structured data, and behavioral signals through unified pipelines.' },
      { title: 'Semantic Chunking', description: 'Intelligently segments content at meaning boundaries rather than arbitrary character limits.' },
      { title: 'Context Enrichment', description: 'Automatically tags ingested data with temporal, relational, and domain-specific metadata.' },
      { title: 'Deduplication Engine', description: 'Identifies and merges overlapping knowledge without losing nuance or provenance.' },
    ],
    technicalDetails: [
      'Supports JSON, Markdown, PDF, and conversational transcript formats',
      'Embedding model: domain-fine-tuned transformer with 768-dim output',
      'Average ingestion latency: <200ms per document chunk',
      'Provenance tracking with full audit trail',
    ],
  },
  {
    slug: 'taxonomy-classification',
    name: 'Taxonomy Classification',
    tagline: 'Dynamic categorization across knowledge domains',
    color: '#6366f1',
    gradient: 'from-indigo-500 to-indigo-700',
    icon: 'taxonomy',
    type: 'step',
    description: 'Every piece of ingested knowledge is classified against a hierarchical taxonomy — mapping it to domains, sub-domains, skill areas, and conceptual clusters.',
    longDescription: 'Taxonomy Classification is the organizational backbone of the Twin. It takes raw, enriched knowledge and places it within a living, evolving classification system. This isn\'t a static folder structure — it\'s a dynamic graph that adapts as your expertise grows, creating new categories and relationships organically.',
    features: [
      { title: 'Hierarchical Mapping', description: 'Organizes knowledge across domain → sub-domain → concept → instance hierarchies.' },
      { title: 'Auto-Evolution', description: 'The taxonomy grows and restructures itself as new knowledge patterns emerge.' },
      { title: 'Cross-Domain Linking', description: 'Discovers and surfaces unexpected connections between disparate knowledge areas.' },
      { title: 'Confidence Scoring', description: 'Each classification carries a confidence score for downstream decision-making.' },
    ],
    technicalDetails: [
      'Graph-based taxonomy with dynamic node creation',
      'Classification accuracy: 94.2% on domain-specific benchmarks',
      'Supports up to 12 hierarchy levels',
      'Real-time reclassification on knowledge graph updates',
    ],
  },
  {
    slug: 'conscious-logic-emulation',
    name: 'Conscious Logic Emulation',
    tagline: 'Deterministic reasoning that mirrors your thought process',
    color: '#8b5cf6',
    gradient: 'from-violet-500 to-violet-700',
    icon: 'logic',
    type: 'step',
    description: 'The Twin doesn\'t just retrieve knowledge — it reasons. Conscious Logic Emulation applies your documented decision-making patterns, heuristics, and judgment frameworks to new situations.',
    longDescription: 'This is where the Digital Twin transcends simple retrieval-augmented generation. Conscious Logic Emulation captures and replicates your unique reasoning patterns — the way you weigh trade-offs, the heuristics you apply under uncertainty, and the frameworks you use to structure complex decisions. It\'s not about mimicking outputs; it\'s about internalizing your cognitive process.',
    features: [
      { title: 'Decision Tree Synthesis', description: 'Builds executable decision trees from observed behavioral patterns.' },
      { title: 'Heuristic Capture', description: 'Learns your shortcuts, rules of thumb, and gut-feel patterns for rapid judgment.' },
      { title: 'Reasoning Chains', description: 'Generates transparent, step-by-step reasoning traces for every output.' },
      { title: 'Calibrated Uncertainty', description: 'Knows when it doesn\'t know — flags low-confidence reasoning for human review.' },
    ],
    technicalDetails: [
      'Chain-of-thought prompting with persona-calibrated templates',
      'Reasoning transparency: full trace logging for audit',
      'Fallback escalation at <70% confidence threshold',
      'Supports counterfactual and hypothetical reasoning modes',
    ],
  },
  {
    slug: 'bounded-task-execution',
    name: 'Bounded Task Execution',
    tagline: 'Safe, scoped action within defined guardrails',
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-cyan-700',
    icon: 'execution',
    type: 'step',
    description: 'The final stage: executing tasks within strictly defined boundaries. Every action the Twin takes is scoped, auditable, and reversible — never exceeding its authorized domain.',
    longDescription: 'Bounded Task Execution is the action layer with built-in safety. Every task the Twin performs is wrapped in explicit scope constraints, permission checks, and rollback capabilities. This isn\'t autonomous AI running free — it\'s controlled, predictable execution that respects the boundaries you define.',
    features: [
      { title: 'Scope Constraints', description: 'Every task has explicit boundaries — what it can and cannot touch.' },
      { title: 'Permission Gates', description: 'Multi-level authorization checks before any state-changing action.' },
      { title: 'Audit Trail', description: 'Complete, immutable log of every action taken and its rationale.' },
      { title: 'Rollback Capability', description: 'Any executed action can be reversed within the defined rollback window.' },
    ],
    technicalDetails: [
      'Task execution sandbox with resource limits',
      'Role-based access control (RBAC) integration',
      'Mean execution time: <500ms for standard operations',
      'Automatic timeout and circuit-breaker patterns',
    ],
  },

  // Right column — Activity Cards
  {
    slug: 'knowledge-hub-traversal',
    name: 'Knowledge Hub Traversal',
    tagline: 'Navigate your entire knowledge graph in real-time',
    color: '#6366F1',
    gradient: 'from-indigo-500 to-indigo-700',
    icon: 'knowledge',
    type: 'activity',
    status: 'success',
    description: 'The Knowledge Hub is the Twin\'s memory. Traversal means intelligently navigating the interconnected web of your expertise to find the most relevant knowledge for any given context.',
    longDescription: 'Knowledge Hub Traversal is how your Digital Twin accesses its accumulated wisdom. Rather than simple keyword search, it performs graph-based traversal — following semantic links, weighing relevance by context, and assembling multi-hop knowledge chains. The result is answers that draw from the full breadth and depth of your expertise.',
    features: [
      { title: 'Graph Traversal', description: 'Navigates knowledge graphs using semantic similarity and contextual relevance.' },
      { title: 'Multi-Hop Reasoning', description: 'Chains knowledge across multiple nodes to answer complex, composite questions.' },
      { title: 'Contextual Ranking', description: 'Dynamically re-ranks knowledge relevance based on the current conversation context.' },
      { title: 'Knowledge Freshness', description: 'Prioritizes recently updated knowledge while preserving foundational understanding.' },
    ],
    technicalDetails: [
      'Vector similarity search with HNSW indexing',
      'Sub-100ms retrieval for 95th percentile queries',
      'Supports up to 1M knowledge nodes per twin instance',
      'Automatic knowledge decay and refresh cycles',
    ],
  },
  {
    slug: 'expert-persona-validated',
    name: 'Expert Persona Validated',
    tagline: 'Authenticate responses against your expertise profile',
    color: '#8B5CF6',
    gradient: 'from-violet-500 to-violet-700',
    icon: 'persona',
    type: 'activity',
    status: 'success',
    description: 'Every response is validated against your expert persona — ensuring the Twin\'s output matches your communication style, expertise boundaries, and professional standards.',
    longDescription: 'Expert Persona Validation is the quality gate that ensures your Digital Twin truly sounds and thinks like you. It cross-references every generated response against your documented expertise profile, communication style guide, and professional boundaries. If a response would misrepresent your knowledge or deviate from your voice, it\'s caught and corrected before delivery.',
    features: [
      { title: 'Voice Matching', description: 'Ensures responses match your documented communication style and tone.' },
      { title: 'Expertise Boundary Check', description: 'Prevents the Twin from claiming knowledge outside your demonstrated expertise.' },
      { title: 'Consistency Audit', description: 'Cross-references new responses against historical outputs for consistency.' },
      { title: 'Persona Drift Detection', description: 'Monitors for gradual deviation from your established persona over time.' },
    ],
    technicalDetails: [
      'Style embedding comparison with cosine similarity >0.85 threshold',
      'Expertise boundary enforced via domain-scoped knowledge retrieval',
      'Consistency check against last 1000 validated responses',
      'Weekly persona calibration reports',
    ],
  },
  {
    slug: 'execution-authorized',
    name: 'Execution Authorized',
    tagline: 'Green-light confirmed for autonomous task completion',
    color: '#10B981',
    gradient: 'from-emerald-500 to-emerald-700',
    icon: 'authorized',
    type: 'activity',
    status: 'success',
    description: 'The final authorization gate. Once knowledge has been retrieved, reasoning applied, and persona validated — the Twin receives clearance to execute the task autonomously.',
    longDescription: 'Execution Authorized represents the culmination of the Twin\'s decision pipeline. After ingestion, classification, reasoning, and validation, this gate confirms that all checks have passed and the Twin has sufficient confidence and authorization to proceed. It\'s the moment where preparation meets action — controlled, verified, and ready.',
    features: [
      { title: 'Multi-Stage Verification', description: 'Confirms all upstream pipeline stages completed successfully.' },
      { title: 'Confidence Threshold', description: 'Only authorizes execution when aggregate confidence exceeds the set threshold.' },
      { title: 'Rate Limiting', description: 'Prevents runaway execution with configurable rate limits per task type.' },
      { title: 'Authorization Logging', description: 'Every authorization decision is logged with full context for compliance.' },
    ],
    technicalDetails: [
      'Minimum confidence threshold: 85% for standard tasks',
      'Elevated threshold: 95% for high-impact actions',
      'Authorization cache with 5-minute TTL',
      'Supports manual override for edge cases',
    ],
  },
  {
    slug: 'hitl-edge-case-routing',
    name: 'HITL Edge-Case Routing',
    tagline: 'Smart escalation when the Twin needs human judgment',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-amber-700',
    icon: 'hitl',
    type: 'activity',
    status: 'warning',
    description: 'Not everything can be automated. When the Twin encounters ambiguity, novel situations, or low-confidence scenarios, it intelligently routes to a human-in-the-loop for decision-making.',
    longDescription: 'HITL (Human-in-the-Loop) Edge-Case Routing is perhaps the most critical capability of a responsible Digital Twin. It\'s the system\'s built-in humility — the recognition that some decisions require human judgment, empathy, or contextual understanding that AI cannot yet replicate. Smart routing ensures the right edge cases reach the right humans at the right time.',
    features: [
      { title: 'Confidence-Based Escalation', description: 'Automatically escalates when reasoning confidence drops below threshold.' },
      { title: 'Priority Classification', description: 'Categorizes edge cases by urgency and impact for triage.' },
      { title: 'Context Packaging', description: 'Bundles full reasoning context with escalations so humans can decide quickly.' },
      { title: 'Learning Loop', description: 'Human decisions on edge cases feed back into the Twin\'s training data.' },
    ],
    technicalDetails: [
      'Escalation trigger: confidence <70% or novel pattern detection',
      'Priority levels: P0 (immediate) through P3 (batch review)',
      'Average human response time target: <15 minutes for P0',
      'Feedback loop with automatic model retraining on resolved cases',
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find(c => c.slug === slug);
}

export function getStepCapabilities(): Capability[] {
  return capabilities.filter(c => c.type === 'step');
}

export function getActivityCapabilities(): Capability[] {
  return capabilities.filter(c => c.type === 'activity');
}
