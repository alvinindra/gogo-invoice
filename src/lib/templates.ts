export interface TemplateItem {
  description: string
  quantity: number
  unitPrice: number
}

export interface ItemTemplate {
  id: string
  label: string
  group: string
  items: TemplateItem[]
}

/** Display order for the <optgroup>s in the template picker. */
export const TEMPLATE_GROUPS = [
  'Software & IT',
  'Coaching & Consulting',
  'Design',
  'Accounting & Tax',
  'Finance & Advisory',
  'General',
]

/**
 * unitPrice values are rough 2026 US freelance/professional market estimates in
 * USD — a starting point to edit, not a quote. Pass-through items default to 0
 * (you bill those at actual cost). Hourly items default to quantity 0 (enter
 * the hours); fixed/monthly items default to quantity 1.
 */
export const ITEM_TEMPLATES: ItemTemplate[] = [
  {
    id: 'swe-retainer',
    label: 'Software development — retainer',
    group: 'Software & IT',
    items: [
      {
        description: 'Software development — monthly retainer',
        quantity: 1,
        unitPrice: 6000,
      },
      { description: 'Additional engineering hours', quantity: 0, unitPrice: 150 },
      {
        description: 'Technical advisory & code review (hours)',
        quantity: 0,
        unitPrice: 200,
      },
    ],
  },
  {
    id: 'swe-passthrough',
    label: 'Dev + infrastructure (pass-through)',
    group: 'Software & IT',
    items: [
      { description: 'Development services (hours)', quantity: 0, unitPrice: 150 },
      {
        description: 'Cloud hosting — DigitalOcean / AWS (pass-through)',
        quantity: 1,
        unitPrice: 0,
      },
      {
        description: 'Third-party SaaS subscriptions (pass-through)',
        quantity: 1,
        unitPrice: 0,
      },
      { description: 'Domain & SSL (pass-through)', quantity: 1, unitPrice: 0 },
    ],
  },
  {
    id: 'it-hourly',
    label: 'IT / software consulting — hourly',
    group: 'Software & IT',
    items: [
      {
        description: 'Senior engineer — consulting (hours)',
        quantity: 0,
        unitPrice: 175,
      },
      { description: 'Project management (hours)', quantity: 0, unitPrice: 120 },
    ],
  },
  {
    id: 'it-managed',
    label: 'Managed IT / support',
    group: 'Software & IT',
    items: [
      { description: 'Managed IT support — monthly', quantity: 1, unitPrice: 1500 },
      {
        description: 'On-site / remote support visits (hours)',
        quantity: 0,
        unitPrice: 125,
      },
      {
        description: 'Hardware & software licenses (pass-through)',
        quantity: 1,
        unitPrice: 0,
      },
    ],
  },
  {
    id: 'coach-hourly',
    label: 'Coaching — hourly',
    group: 'Coaching & Consulting',
    items: [
      { description: 'Coaching session (hours)', quantity: 1, unitPrice: 250 },
      { description: 'Prep & follow-up notes (hours)', quantity: 0, unitPrice: 150 },
    ],
  },
  {
    id: 'consult-advisory',
    label: 'Advisory / strategy consulting',
    group: 'Coaching & Consulting',
    items: [
      { description: 'Strategy consulting (hours)', quantity: 0, unitPrice: 300 },
      { description: 'Workshop / facilitation (half-day)', quantity: 0, unitPrice: 1500 },
    ],
  },
  {
    id: 'design-project',
    label: 'Design project',
    group: 'Design',
    items: [
      { description: 'UI / UX design (hours)', quantity: 0, unitPrice: 120 },
      { description: 'Brand & visual assets', quantity: 1, unitPrice: 2500 },
      { description: 'Revisions & handoff', quantity: 1, unitPrice: 500 },
    ],
  },
  {
    id: 'acct-bookkeeping',
    label: 'Monthly bookkeeping',
    group: 'Accounting & Tax',
    items: [
      { description: 'Monthly bookkeeping', quantity: 1, unitPrice: 400 },
      { description: 'Bank & card reconciliation', quantity: 1, unitPrice: 150 },
      { description: 'Financial statements preparation', quantity: 1, unitPrice: 300 },
    ],
  },
  {
    id: 'acct-tax',
    label: 'Tax & compliance',
    group: 'Accounting & Tax',
    items: [
      { description: 'Annual tax return preparation', quantity: 1, unitPrice: 750 },
      { description: 'Tax advisory (hours)', quantity: 0, unitPrice: 200 },
      { description: 'Government filing fees (pass-through)', quantity: 1, unitPrice: 0 },
    ],
  },
  {
    id: 'acct-payroll',
    label: 'Payroll services',
    group: 'Accounting & Tax',
    items: [
      { description: 'Payroll processing — per employee', quantity: 1, unitPrice: 25 },
      { description: 'Payroll setup & onboarding', quantity: 1, unitPrice: 300 },
    ],
  },
  {
    id: 'fin-advisory',
    label: 'Financial advisory',
    group: 'Finance & Advisory',
    items: [
      { description: 'Advisory retainer — monthly', quantity: 1, unitPrice: 3000 },
      { description: 'Financial modeling', quantity: 1, unitPrice: 2500 },
      { description: 'Valuation & analysis', quantity: 1, unitPrice: 3500 },
    ],
  },
  {
    id: 'fin-diligence',
    label: 'Due diligence / M&A',
    group: 'Finance & Advisory',
    items: [
      { description: 'Financial due diligence', quantity: 1, unitPrice: 7500 },
      { description: 'Deal advisory (hours)', quantity: 0, unitPrice: 350 },
    ],
  },
  {
    id: 'gen-services',
    label: 'General professional services',
    group: 'General',
    items: [
      { description: 'Professional services (hours)', quantity: 0, unitPrice: 125 },
      { description: 'Reimbursable expenses (pass-through)', quantity: 1, unitPrice: 0 },
    ],
  },
  {
    id: 'gen-goods',
    label: 'Products / goods',
    group: 'General',
    items: [
      { description: 'Product', quantity: 1, unitPrice: 0 },
      { description: 'Shipping & handling', quantity: 1, unitPrice: 0 },
    ],
  },
]
