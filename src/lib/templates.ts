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
  'Design',
  'Accounting & Tax',
  'Finance & Advisory',
  'General',
]

// Rates default to 0 so you just fill the amounts; descriptions do the work.
export const ITEM_TEMPLATES: ItemTemplate[] = [
  {
    id: 'swe-retainer',
    label: 'Software development — retainer',
    group: 'Software & IT',
    items: [
      {
        description: 'Software development — monthly retainer',
        quantity: 1,
        unitPrice: 0,
      },
      { description: 'Additional engineering hours', quantity: 0, unitPrice: 0 },
      { description: 'Technical advisory & code review', quantity: 0, unitPrice: 0 },
    ],
  },
  {
    id: 'swe-passthrough',
    label: 'Dev + infrastructure (pass-through)',
    group: 'Software & IT',
    items: [
      { description: 'Development services', quantity: 1, unitPrice: 0 },
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
      { description: 'Senior engineer — consulting hours', quantity: 0, unitPrice: 0 },
      { description: 'Project management — hours', quantity: 0, unitPrice: 0 },
    ],
  },
  {
    id: 'it-managed',
    label: 'Managed IT / support',
    group: 'Software & IT',
    items: [
      { description: 'Managed IT support — monthly', quantity: 1, unitPrice: 0 },
      { description: 'On-site / remote support visits', quantity: 0, unitPrice: 0 },
      {
        description: 'Hardware & software licenses (pass-through)',
        quantity: 1,
        unitPrice: 0,
      },
    ],
  },
  {
    id: 'design-project',
    label: 'Design project',
    group: 'Design',
    items: [
      { description: 'UI / UX design', quantity: 1, unitPrice: 0 },
      { description: 'Brand & visual assets', quantity: 1, unitPrice: 0 },
      { description: 'Revisions & handoff', quantity: 1, unitPrice: 0 },
    ],
  },
  {
    id: 'acct-bookkeeping',
    label: 'Monthly bookkeeping',
    group: 'Accounting & Tax',
    items: [
      { description: 'Monthly bookkeeping', quantity: 1, unitPrice: 0 },
      { description: 'Bank & card reconciliation', quantity: 1, unitPrice: 0 },
      { description: 'Financial statements preparation', quantity: 1, unitPrice: 0 },
    ],
  },
  {
    id: 'acct-tax',
    label: 'Tax & compliance',
    group: 'Accounting & Tax',
    items: [
      { description: 'Annual tax return preparation', quantity: 1, unitPrice: 0 },
      { description: 'Tax advisory — hours', quantity: 0, unitPrice: 0 },
      { description: 'Government filing fees (pass-through)', quantity: 1, unitPrice: 0 },
    ],
  },
  {
    id: 'acct-payroll',
    label: 'Payroll services',
    group: 'Accounting & Tax',
    items: [
      { description: 'Payroll processing — per employee', quantity: 1, unitPrice: 0 },
      { description: 'Payroll setup & onboarding', quantity: 1, unitPrice: 0 },
    ],
  },
  {
    id: 'fin-advisory',
    label: 'Financial advisory',
    group: 'Finance & Advisory',
    items: [
      { description: 'Advisory retainer — monthly', quantity: 1, unitPrice: 0 },
      { description: 'Financial modeling', quantity: 1, unitPrice: 0 },
      { description: 'Valuation & analysis', quantity: 1, unitPrice: 0 },
    ],
  },
  {
    id: 'fin-diligence',
    label: 'Due diligence / M&A',
    group: 'Finance & Advisory',
    items: [
      { description: 'Financial due diligence', quantity: 1, unitPrice: 0 },
      { description: 'Deal advisory — hours', quantity: 0, unitPrice: 0 },
    ],
  },
  {
    id: 'gen-services',
    label: 'General professional services',
    group: 'General',
    items: [
      { description: 'Professional services', quantity: 1, unitPrice: 0 },
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
