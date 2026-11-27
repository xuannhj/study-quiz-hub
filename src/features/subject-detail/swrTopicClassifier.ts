import type { Question } from '../../types/study';

export interface SwrTopic {
  id: string;
  chapterNumber: string;
  shortTitle: string;
  title: string;
  keywords: string[];
}

export const SWR_TOPICS: SwrTopic[] = [
  {
    id: 'req-levels',
    chapterNumber: 'Chương 1-3',
    shortTitle: 'Bản chất Yêu cầu & Cấp độ',
    title: 'Chương 1-3: Bản chất Yêu cầu & Cấp độ (Business, User, Functional, Scope)',
    keywords: [
      'business requirement',
      'functional requirement',
      'non-functional',
      'nonfunctional',
      'scope creep',
      'gold plating',
      'three levels',
      'vision and scope',
      'constraint',
      'project scope',
      'product vision',
      'scope',
      'level of requirement',
      'business objective',
      'business goal',
      'reengineering',
      'legacy',
      'core capability',
    ],
  },
  {
    id: 'stakeholders',
    chapterNumber: 'Chương 4-7',
    shortTitle: 'Khách hàng & Stakeholders',
    title: 'Chương 4-7: Khách hàng, Stakeholders, User Classes & Project Champions',
    keywords: [
      'stakeholder',
      'user class',
      'project champion',
      'customer',
      'persona',
      'favoring user',
      'direct user',
      'indirect user',
      'product owner',
      'business analyst',
      'user representative',
      'user advocate',
      'collaborat',
      'champion',
    ],
  },
  {
    id: 'elicitation',
    chapterNumber: 'Chương 8-10',
    shortTitle: 'Kỹ thuật Elicitation',
    title: 'Chương 8-10: Kỹ thuật Thu thập Yêu cầu (Elicitation, JAD, Interview, Survey)',
    keywords: [
      'elicitation',
      'interview',
      'workshop',
      'jad',
      'focus group',
      'observation',
      'questionnaire',
      'survey',
      'facilitator',
      'moderator',
      'eliciting',
      'open-ended',
      'closed-ended',
      'brainstorming',
      'document analysis',
      'interface analysis',
      'elicit',
    ],
  },
  {
    id: 'usecase',
    chapterNumber: 'Chương 11-13',
    shortTitle: 'Use Case & User Stories',
    title: 'Chương 11-13: Use Case & User Stories (Actor, Include/Extend, Scenarios)',
    keywords: [
      'use case',
      'user story',
      'actor',
      'include',
      'extend',
      'precondition',
      'postcondition',
      'alternative flow',
      'scenario',
      'use-case',
      'use case diagram',
      'primary actor',
      'secondary actor',
      'normal flow',
      'exception flow',
      'acceptance criteria',
    ],
  },
  {
    id: 'srs-specs',
    chapterNumber: 'Chương 14-16',
    shortTitle: 'Đặc tả SRS & Chuẩn IEEE 830',
    title: 'Chương 14-16: Đặc tả SRS, Chuẩn IEEE 830 & Viết Yêu cầu Chuẩn',
    keywords: [
      'srs',
      'software requirements specification',
      'ieee 830',
      'ambiguous',
      'verifiable',
      'feasible',
      'consistent',
      'traceable',
      'complete',
      'requirement statement',
      'label the requirements',
      'shall',
      'must be',
      'correct',
      'unambiguous',
      'modifiable',
      'atomic',
      'singular',
      'specification',
    ],
  },
  {
    id: 'modeling',
    chapterNumber: 'Chương 17-18',
    shortTitle: 'Phân tích & Mô hình hóa',
    title: 'Chương 17-18: Phân tích & Mô hình hóa (Context Diagram, DFD, State Transition, Data Dict)',
    keywords: [
      'context diagram',
      'data flow diagram',
      'dfd',
      'state transition',
      'data dictionary',
      'decision table',
      'dialog map',
      'swimlane',
      'entity',
      'primitive',
      'repeating group',
      'external entities',
      'process',
      'data store',
      'erd',
      'class diagram',
      'state-transition',
      'finite state',
    ],
  },
  {
    id: 'validation',
    chapterNumber: 'Chương 19-20',
    shortTitle: 'Thẩm định Yêu cầu',
    title: 'Chương 19-20: Thẩm định & Đánh giá Yêu cầu (Verification vs Validation, Inspection)',
    keywords: [
      'verification',
      'validation',
      'inspection',
      'walkthrough',
      'peer review',
      'checklist',
      'defect',
      'rework',
      'author',
      'moderator',
      'scribe',
      'reader',
      'formal inspection',
      'validate',
      'verify',
      'acceptance test',
    ],
  },
  {
    id: 'change-mgmt',
    chapterNumber: 'Chương 21-23',
    shortTitle: 'Quản lý Thay đổi & Loại Dự án',
    title: 'Chương 21-23: Quản lý Thay đổi & Loại hình Dự án (CCB, Baseline, Enhancement)',
    keywords: [
      'change control',
      'ccb',
      'baseline',
      'enhancement project',
      'replacement project',
      'change request',
      'cr',
      'proposed change',
      'change control board',
      'version',
      'revision',
      'change management',
      'cots',
      'off-the-shelf',
    ],
  },
  {
    id: 'quality-risk',
    chapterNumber: 'Chương 24-27',
    shortTitle: 'Quality Attributes & Prototype',
    title: 'Chương 24-27: Thuộc tính Chất lượng, Rủi ro & Prototype',
    keywords: [
      'quality attribute',
      'performance',
      'security',
      'usability',
      'reliability',
      'availability',
      'maintainability',
      'portability',
      'scalability',
      'robustness',
      'risk',
      'risk management',
      'prototype',
      'throwaway',
      'evolutionary',
      'mock-up',
      'paper prototype',
      'wireframe',
      'fidelity',
      'safety',
    ],
  },
  {
    id: 'trace-prio',
    chapterNumber: 'Chương 28-30',
    shortTitle: 'Truy vết RTM & Ưu tiên hóa',
    title: 'Chương 28-30: Truy vết Ma trận RTM & Kỹ thuật Ưu tiên hóa Yêu cầu',
    keywords: [
      'traceability',
      'matrix',
      'rtm',
      'prioritization',
      'moscow',
      '100',
      'pairwise',
      'in or out',
      'three-level',
      'forward traceability',
      'backward traceability',
      'trace',
      'priorit',
      'cost',
      'value',
      'penalty',
      'rank',
    ],
  },
];

const OTHER_TOPIC: SwrTopic = {
  id: 'other',
  chapterNumber: 'Tổng hợp',
  shortTitle: 'Kỹ năng BA & Tổng hợp',
  title: 'Chương khác: Kỹ năng BA thực tế & Tổng hợp',
  keywords: [],
};

export function classifySwrQuestion(q: Question): SwrTopic {
  const text = (
    q.prompt +
    ' ' +
    q.options.map((o) => o.text).join(' ') +
    ' ' +
    (q.explanation || '')
  ).toLowerCase();

  let bestTopic: SwrTopic | null = null;
  let maxScore = 0;

  for (const topic of SWR_TOPICS) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (text.includes(kw)) {
        score += 1;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestTopic = topic;
    }
  }

  return bestTopic && maxScore > 0 ? bestTopic : OTHER_TOPIC;
}
