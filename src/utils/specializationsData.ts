export interface StoryStep {
  icon: string;
  title: string;
  description: string;
  detail: string;
  stat: string;
  statLabel: string;
}

export interface SpecializationData {
  id: string;
  title: string;
  icon: string;
  color: string;
  colorLight: string;
  gradient: string;
  heroImage: string;
  tagline: string;
  heroLine: string;
  heroSubline: string;
  scenario: string[];
  steps: StoryStep[];
  outcome: string;
  outcomeStat: string;
  outcomeLabel: string;
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
}

export const specializationsData: Record<string, SpecializationData> = {
  education: {
    id: 'education',
    title: 'Education',
    icon: 'GraduationCap',
    color: '#6366f1',
    colorLight: '#eef2ff',
    gradient: 'from-indigo-600 to-violet-600',
    heroImage: '/images/specializations/education.png',
    tagline: 'Curriculum · Student Flow · Learning Ops',
    heroLine: 'Professor Maya has 240 students this semester.',
    heroSubline: 'She used to spend 3 hours every morning triaging emails. Now she doesn\'t.',
    scenario: [
      'Every morning, Maya\'s inbox had 60+ student queries — deadline extensions, grade clarifications, resource requests, attendance questions.',
      'She was spending more time on administration than on actual teaching. The irony? She became a professor to inspire minds, not manage spreadsheets.',
      'Then her department deployed a Digital Twin.',
    ],
    steps: [
      {
        icon: 'BookOpen',
        title: 'The Twin absorbs everything Maya knows',
        description: 'Course materials, grading rubrics, past Q&A patterns, policy documents, her communication style — all ingested into a living knowledge model.',
        detail: 'The Twin doesn\'t just store information. It learns the nuance — when Maya grants extensions (and when she doesn\'t), how she phrases encouragement, which resources she recommends for struggling students.',
        stat: '2,400+',
        statLabel: 'knowledge nodes mapped',
      },
      {
        icon: 'MessageSquare',
        title: 'Students message as usual. The Twin responds as Maya.',
        description: '"Can I get an extension on Assignment 3?" — The Twin checks the syllabus, verifies the student\'s submission history, and drafts a response in Maya\'s exact voice.',
        detail: 'The student can\'t tell the difference. The response arrives in 30 seconds instead of 8 hours. It\'s personalized, references the specific assignment, and even includes the late submission policy link.',
        stat: '< 30s',
        statLabel: 'average response time',
      },
      {
        icon: 'Users',
        title: 'When it\'s uncertain, it escalates. Instantly.',
        description: 'A student facing a family emergency requests special accommodation beyond standard policy. The Twin recognizes this as beyond its authority.',
        detail: 'Instead of guessing, it routes the case directly to Maya with full context: student history, past accommodations, the original message, and a suggested response draft. Maya decides in 2 minutes, not 2 hours.',
        stat: '12%',
        statLabel: 'of cases escalated',
      },
      {
        icon: 'ClipboardCheck',
        title: 'The operational backbone runs itself.',
        description: 'Attendance tracking, engagement nudges, assignment reminders, office-hour scheduling, grade posting notifications — all automated.',
        detail: 'Students who miss 2+ classes get a personalized check-in. Those approaching deadline get gentle reminders. Those excelling get encouragement. All in Maya\'s voice, at scale.',
        stat: '3 hrs',
        statLabel: 'saved every day',
      },
    ],
    outcome: 'Maya now spends 90% of her time on what she loves — teaching, mentoring, and research. Not paperwork.',
    outcomeStat: '88%',
    outcomeLabel: 'reduction in admin work',
    testimonial: 'I feel like I\'m finally doing my job again. The Twin handles the noise so I can focus on the signal — my students.',
    testimonialAuthor: 'Professor Maya K.',
    testimonialRole: 'Computer Science Department',
  },
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare',
    icon: 'HeartPulse',
    color: '#6366f1',
    colorLight: '#eef2ff',
    gradient: 'from-indigo-600 to-violet-600',
    heroImage: '/images/specializations/healthcare.png',
    tagline: 'Patient Flow · Coordination · Clinical Ops',
    heroLine: 'Dr. Rajan manages 80 patients across 3 departments.',
    heroSubline: 'A missed follow-up call used to mean a readmission. Not anymore.',
    scenario: [
      'Between rounds, referrals, and follow-ups, Dr. Rajan\'s coordination tasks piled up. Critical items fell through the cracks.',
      'One missed follow-up led to a preventable readmission. That was the moment he knew something had to change.',
      'His hospital piloted a Digital Twin for clinical coordination.',
    ],
    steps: [
      {
        icon: 'Stethoscope',
        title: 'The Twin maps the clinical universe',
        description: 'Patient protocols, referral preferences, follow-up schedules, medication interactions — the Twin builds a complete operational model of Dr. Rajan\'s practice.',
        detail: 'It knows which cases are routine follow-ups and which are high-risk. It understands the difference between a standard post-op check and a critical cardiac monitoring schedule.',
        stat: '80',
        statLabel: 'active patient threads',
      },
      {
        icon: 'CalendarCheck',
        title: 'Appointments coordinate themselves',
        description: 'Post-discharge follow-ups, specialist referrals, lab result notifications — the Twin schedules, reminds, and confirms. All in Dr. Rajan\'s professional tone.',
        detail: 'Patient Mrs. Sharma\'s 2-week post-surgery check? Automatically scheduled, confirmed, and the specialist is pre-briefed with her file. Zero manual coordination.',
        stat: '95%',
        statLabel: 'follow-up completion rate',
      },
      {
        icon: 'Clock',
        title: 'Critical alerts surface before anyone else notices',
        description: 'Abnormal lab results, medication conflicts, deteriorating vitals — the Twin detects patterns and escalates immediately. No waiting in queue.',
        detail: 'At 3 AM, a patient\'s potassium levels spike. The Twin alerts the on-call team within 90 seconds, attaches the patient\'s full medication history, and suggests the protocol Dr. Rajan would follow.',
        stat: '< 2 min',
        statLabel: 'critical alert response',
      },
      {
        icon: 'FileText',
        title: 'Documentation writes itself',
        description: 'Clinical notes, handoff summaries, discharge instructions — drafted from structured data, reviewed by the physician. Hours of charting, reduced to minutes.',
        detail: 'End-of-shift handoffs used to take 45 minutes of dictation. Now the Twin pre-generates handoff notes from the day\'s activities. Dr. Rajan reviews, adjusts, signs. Done in 8 minutes.',
        stat: '70%',
        statLabel: 'less charting time',
      },
    ],
    outcome: 'Zero missed follow-ups. Zero preventable readmissions. Dr. Rajan sleeps better.',
    outcomeStat: '0',
    outcomeLabel: 'missed follow-ups',
    testimonial: 'My patients are safer, and I\'m actually present during rounds instead of buried in paperwork. The Twin doesn\'t replace my judgment — it amplifies my capacity.',
    testimonialAuthor: 'Dr. Rajan S.',
    testimonialRole: 'Internal Medicine, City General Hospital',
  },
  services: {
    id: 'services',
    title: 'Services',
    icon: 'Layers',
    color: '#6366f1',
    colorLight: '#eef2ff',
    gradient: 'from-indigo-600 to-violet-600',
    heroImage: '/images/specializations/services.png',
    tagline: 'Workflow Ops · SLA Logic · Delivery',
    heroLine: 'Service Lead Priya handles 150 tickets per week.',
    heroSubline: 'Her team\'s SLA compliance was 72%. Three weeks later, it was 96%.',
    scenario: [
      'Priya\'s team was drowning. Tickets bounced between engineers. Clients escalated because nobody owned the resolution. SLA violations were a weekly certainty.',
      'The problem wasn\'t skill — it was routing. The right person never got the right ticket at the right time.',
      'They deployed a Digital Twin trained on Priya\'s routing logic.',
    ],
    steps: [
      {
        icon: 'Headphones',
        title: 'The Twin learns Priya\'s brain',
        description: 'Routing rules, priority matrices, client-specific SLAs, team capabilities, on-call schedules — every decision pattern Priya makes, encoded.',
        detail: 'Client Acme Corp has a 4-hour critical SLA but a 48-hour standard SLA. Engineer Rahul is the expert for database issues but is off on Thursdays. The Twin knows all of this.',
        stat: '32',
        statLabel: 'routing rules encoded',
      },
      {
        icon: 'Zap',
        title: 'Tickets find the right owner instantly',
        description: 'New ticket arrives → classify severity → match skill requirements → check availability → assign ownership. No human bottleneck. No ping-pong.',
        detail: 'A critical database outage ticket for Acme Corp? Assigned to Rahul in 8 seconds. If Rahul\'s off, it goes to the next-best engineer with a context brief attached.',
        stat: '< 10s',
        statLabel: 'assignment time',
      },
      {
        icon: 'BarChart3',
        title: 'SLA violations get predicted, not discovered',
        description: 'The Twin monitors every ticket\'s resolution timeline. Two hours before an SLA breach, it flags the risk and suggests intervention options.',
        detail: 'Ticket #4891 is trending toward breach. The Twin notifies Priya: "Estimated resolution: 5.2 hours. SLA limit: 4 hours. Suggest: Reassign to senior engineer or request scope reduction from client."',
        stat: '2 hrs',
        statLabel: 'early warning buffer',
      },
      {
        icon: 'CheckCircle2',
        title: 'Clients stop chasing. They get proactive updates.',
        description: 'At every milestone — assignment, investigation, resolution, confirmation — the client receives a contextual update. Automatically, in Priya\'s team\'s voice.',
        detail: '"Hi Team Acme — your ticket #4891 has been assigned to our database specialist and is actively being investigated. Expected resolution: 3 hours. We\'ll update you at each milestone."',
        stat: '96%',
        statLabel: 'SLA compliance',
      },
    ],
    outcome: 'Priya\'s team went from firefighting to engineering. SLA compliance jumped 24 points in 3 weeks.',
    outcomeStat: '+24%',
    outcomeLabel: 'SLA improvement',
    testimonial: 'We stopped being a reactive help desk and became a proactive operations team. The Twin didn\'t just route tickets — it transformed our culture.',
    testimonialAuthor: 'Priya M.',
    testimonialRole: 'Service Delivery Lead, TechScale Inc.',
  },
};

export function getSpecialization(id: string): SpecializationData | undefined {
  return specializationsData[id];
}

export function getAllSpecializationIds(): string[] {
  return Object.keys(specializationsData);
}
