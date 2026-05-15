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
    name: 'Smart Knowledge Intake',
    tagline: 'Learns from everything you share — and understands the meaning behind it',
    color: '#64748b',
    gradient: 'from-slate-500 to-slate-700',
    icon: 'ingestion',
    type: 'step',
    description: 'This is where your Digital Twin starts learning. It reads your documents, conversations, and work patterns — then organizes everything so it truly understands what you know and how you think.',
    longDescription: 'Smart Knowledge Intake is how your Digital Twin absorbs your knowledge. It doesn\'t just store files — it reads and understands them. When you share a document, a chat transcript, or your work history, the Twin picks up on the meaning, the tone, and the intent behind it. Over time, it builds a deep, organized picture of your expertise — the same way you naturally absorb information from experience.',
    features: [
      { title: 'Reads Any Format', description: 'Handles documents, spreadsheets, chat logs, and more — all in one place.' },
      { title: 'Smart Breakdown', description: 'Splits content into meaningful sections instead of random pieces, so nothing gets taken out of context.' },
      { title: 'Automatic Tagging', description: 'Automatically labels your content with dates, topics, and connections — making it easy to find later.' },
      { title: 'No Duplicates', description: 'Spots repeated information and merges it cleanly, so your knowledge base stays organized.' },
    ],
    technicalDetails: [
      'Works with PDFs, Word docs, Markdown, spreadsheets, and chat transcripts',
      'Uses an AI model fine-tuned to your professional domain for high accuracy',
      'Processes each section of a document in under 0.2 seconds',
      'Keeps a complete record of where every piece of knowledge came from',
    ],
  },
  {
    slug: 'taxonomy-classification',
    name: 'Auto-Categorization',
    tagline: 'Automatically organizes your knowledge into clear categories',
    color: '#6366f1',
    gradient: 'from-indigo-500 to-indigo-700',
    icon: 'taxonomy',
    type: 'step',
    description: 'Once your Twin absorbs new information, it files everything into a structured system of topics, skills, and specialties — so the right knowledge is always easy to find.',
    longDescription: 'Auto-Categorization is your Twin\'s filing system — but one that thinks for itself. Instead of rigid folders, it uses a flexible structure that organizes your knowledge by topic, specialty, and skill level. As you add more knowledge, the system grows and adapts automatically, creating new categories and surfacing connections you might not have noticed.',
    features: [
      { title: 'Structured Organization', description: 'Arranges your expertise from broad fields down to specific topics, like chapters in a book.' },
      { title: 'Self-Updating Categories', description: 'Categories grow and adapt automatically as your Twin learns new things.' },
      { title: 'Connects the Dots', description: 'Finds surprising connections between different areas of your expertise.' },
      { title: 'Certainty Ratings', description: 'Every classification includes a confidence rating, so the Twin knows how sure it is.' },
    ],
    technicalDetails: [
      'Uses a flexible, graph-based system that creates new categories on the fly',
      'Achieves 94% accuracy when classifying domain-specific knowledge',
      'Supports up to 12 levels of detail for deep specializations',
      'Instantly re-organizes when new knowledge is added',
    ],
  },
  {
    slug: 'conscious-logic-emulation',
    name: 'Decision Mirroring',
    tagline: 'Thinks the way you think — applying your logic to new problems',
    color: '#8b5cf6',
    gradient: 'from-violet-500 to-violet-700',
    icon: 'logic',
    type: 'step',
    description: 'Your Digital Twin doesn\'t just recall facts — it reasons through problems using the same decision-making style you would. It learns how you weigh options, handle trade-offs, and make judgment calls.',
    longDescription: 'This is what makes your Digital Twin more than a search engine. Decision Mirroring captures how you actually think — the way you evaluate options, the shortcuts you rely on, and the frameworks you use to make tough decisions. When faced with a new question, the Twin doesn\'t just look up an answer — it reasons through it step by step, the same way you would.',
    features: [
      { title: 'Decision Mapping', description: 'Maps out your decision-making patterns so the Twin can follow the same logic.' },
      { title: 'Learns Your Shortcuts', description: 'Picks up on your rules of thumb and quick-judgment habits.' },
      { title: 'Shows Its Work', description: 'Explains its reasoning step by step, so you can see exactly how it reached a conclusion.' },
      { title: 'Knows Its Limits', description: 'Recognizes when it\'s unsure and flags those situations for your review.' },
    ],
    technicalDetails: [
      'Uses step-by-step reasoning templates calibrated to your thinking style',
      'Full transparency — every reasoning step is logged and reviewable',
      'Automatically asks for human input when confidence drops below 70%',
      'Can explore "what if" scenarios and hypothetical situations',
    ],
  },
  {
    slug: 'bounded-task-execution',
    name: 'Safe Task Handling',
    tagline: 'Takes action safely — only within the boundaries you set',
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-cyan-700',
    icon: 'execution',
    type: 'step',
    description: 'This is where your Twin takes action. Every task it performs stays within strict boundaries that you define — and every action is logged and can be undone.',
    longDescription: 'Safe Task Handling is the safety layer. When your Twin performs a task — drafting an email, updating a schedule, generating a report — it operates within clear rules about what it can and cannot do. Every action is tracked, every decision is logged, and anything it does can be reversed. You stay in control at all times.',
    features: [
      { title: 'Clear Boundaries', description: 'Each task has clear rules about what the Twin is allowed to do.' },
      { title: 'Permission Checks', description: 'Multiple layers of permission checks before any real action is taken.' },
      { title: 'Full Activity Log', description: 'A complete, tamper-proof record of everything the Twin does and why.' },
      { title: 'Undo Any Action', description: 'Any action can be undone within the allowed time window.' },
    ],
    technicalDetails: [
      'Runs tasks in a secure sandbox with strict resource limits',
      'Integrates with role-based permissions to control who can do what',
      'Completes standard tasks in under half a second',
      'Automatically stops tasks that take too long or behave unexpectedly',
    ],
  },

  // Right column — Activity Cards
  {
    slug: 'knowledge-hub-traversal',
    name: 'Instant Knowledge Recall',
    tagline: 'Finds the right knowledge from your entire expertise — instantly',
    color: '#6366F1',
    gradient: 'from-indigo-500 to-indigo-700',
    icon: 'knowledge',
    type: 'activity',
    status: 'success',
    description: 'The Knowledge Hub is your Twin\'s memory. When asked a question, it searches through your entire knowledge base — following connections between topics to find the most relevant answer.',
    longDescription: 'Instant Knowledge Recall is how your Digital Twin recalls what it knows. Instead of simple keyword search, it follows connections between ideas — linking related concepts across topics to build a complete answer. This means it can combine knowledge from different areas of your expertise to handle complex, multi-part questions.',
    features: [
      { title: 'Smart Search', description: 'Searches your knowledge by meaning and relevance, not just keywords.' },
      { title: 'Connects Multiple Ideas', description: 'Combines knowledge from different topics to answer complex questions.' },
      { title: 'Context-Aware Results', description: 'Prioritizes results based on what\'s most relevant to the current conversation.' },
      { title: 'Stays Up to Date', description: 'Prioritizes recent knowledge while keeping your foundational expertise intact.' },
    ],
    technicalDetails: [
      'Uses advanced similarity search to find the closest matching knowledge',
      'Returns results in under 0.1 seconds for almost all queries',
      'Can hold up to 1 million knowledge entries per Twin',
      'Automatically refreshes knowledge and deprioritizes outdated information',
    ],
  },
  {
    slug: 'expert-persona-validated',
    name: 'Authenticity Check',
    tagline: 'Every response is checked to make sure it sounds like you',
    color: '#8B5CF6',
    gradient: 'from-violet-500 to-violet-700',
    icon: 'persona',
    type: 'activity',
    status: 'success',
    description: 'Before any response goes out, the Twin checks it against your professional profile — making sure it matches your voice, stays within your areas of expertise, and meets your standards.',
    longDescription: 'Authenticity Check is the quality check that keeps your Twin authentic. Every response it generates is compared against your communication style, your areas of expertise, and your professional standards. If something doesn\'t sound like you — or claims knowledge you haven\'t demonstrated — it gets corrected before anyone sees it.',
    features: [
      { title: 'Matches Your Voice', description: 'Makes sure every response sounds like you — your tone, your style.' },
      { title: 'Stays In Your Lane', description: 'Prevents the Twin from answering questions outside your proven expertise.' },
      { title: 'Consistency Check', description: 'Compares new responses against past ones to ensure consistency.' },
      { title: 'Drift Detection', description: 'Watches for any gradual shift away from your established voice over time.' },
    ],
    technicalDetails: [
      'Compares response style against your profile with 85%+ similarity required',
      'Only retrieves knowledge from your verified areas of expertise',
      'Checks consistency against your last 1,000 validated responses',
      'Generates weekly reports on how well the Twin matches your persona',
    ],
  },
  {
    slug: 'execution-authorized',
    name: 'Final Approval',
    tagline: 'All checks passed — your Twin is cleared to act',
    color: '#10B981',
    gradient: 'from-emerald-500 to-emerald-700',
    icon: 'authorized',
    type: 'activity',
    status: 'success',
    description: 'The final checkpoint. Once the Twin has found the right knowledge, applied your reasoning, and passed the persona check — it gets the green light to complete the task.',
    longDescription: 'Final Approval is the final "go" signal. After your Twin has gathered knowledge, reasoned through the problem, and verified the response matches your standards, this step confirms everything checks out. Only then does the Twin proceed — with full confidence and a complete audit trail.',
    features: [
      { title: 'Full Pipeline Check', description: 'Verifies that every previous step completed successfully before proceeding.' },
      { title: 'Confidence Gate', description: 'Only proceeds when overall confidence is high enough to meet your standards.' },
      { title: 'Speed Controls', description: 'Controls how many tasks can run at once to prevent overload.' },
      { title: 'Decision Logging', description: 'Every go/no-go decision is logged with full context for your records.' },
    ],
    technicalDetails: [
      'Requires at least 85% confidence for standard tasks',
      'Requires 95% confidence for high-stakes actions',
      'Caches recent authorizations for 5 minutes to speed up repeat tasks',
      'Allows you to manually approve or override any decision',
    ],
  },
  {
    slug: 'hitl-edge-case-routing',
    name: 'Human Review Routing',
    tagline: 'Asks for your help when it encounters something unfamiliar',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-amber-700',
    icon: 'hitl',
    type: 'activity',
    status: 'warning',
    description: 'Some situations need a human touch. When your Twin encounters something ambiguous, unusual, or outside its confidence range, it flags it and asks for your input.',
    longDescription: 'This is your Twin\'s safety net. Not every situation can be handled automatically — some require human judgment, empathy, or context that AI doesn\'t have. When the Twin encounters these situations, it packages up everything it knows about the problem and routes it to you (or your team) for a decision. And every time you resolve one of these cases, the Twin learns from it.',
    features: [
      { title: 'Smart Escalation', description: 'Automatically flags situations where confidence is too low to proceed alone.' },
      { title: 'Priority Sorting', description: 'Sorts flagged items by urgency so the most important ones reach you first.' },
      { title: 'Full Context Included', description: 'Includes all relevant context with each request so you can decide quickly.' },
      { title: 'Learns From You', description: 'Every decision you make teaches the Twin, so it handles similar cases better next time.' },
    ],
    technicalDetails: [
      'Escalates when confidence drops below 70% or the situation is new',
      'Four priority levels: from immediate attention to routine batch review',
      'Top-priority items target a response within 15 minutes',
      'Automatically improves from every resolved case',
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
