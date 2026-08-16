import { PracticeArea, ResourceArticle } from '../types';

export const FIRM_INFO = {
  name: 'The Law Office of Darin Siefkes',
  legalName: 'The Law Office of Darin Siefkes, PLLC',
  attorneyName: 'Darin P. Siefkes',
  tagline: 'Practical, Experienced Business Law Counsel for Austin Businesses',
  address: {
    street: '1523 W. Koenig Ln.',
    city: 'Austin',
    state: 'TX',
    zip: '78756',
    full: '1523 W. Koenig Ln., Austin, TX 78756',
  },
  phone: '(512) 206-4242',
  phoneRaw: '5122064242',
  fax: '(512) 206-4243',
  hours: 'Monday – Friday: 8:30 AM – 5:30 PM',
  consultationNote: 'Initial consultation by appointment',
  establishedYear: '2005',
  attorney: {
    name: 'Darin P. Siefkes',
    title: 'Founder & Principal Attorney',
    barAdmissions: [
      'State Bar of Texas (2005)',
      'The Missouri Bar (2005)',
    ],
    education: [
      {
        degree: 'Juris Doctor (J.D.), cum laude',
        institution: 'Baylor University School of Law',
        year: '2005',
      },
      {
        degree: 'Master of Science (M.S.), Mass Communication',
        institution: 'Kansas State University',
        year: '1999',
      },
      {
        degree: 'Bachelor of Science (B.S.), History',
        institution: 'Kansas State University',
        year: '1996',
      },
    ],
    backgroundSummary:
      'Before entering the legal profession, Darin worked across diverse commercial sectors including media, oil field operations, and both emerging and established information technology corporations. This real-world business background provides a pragmatic perspective when advising entrepreneurs, business owners, and growing companies.',
  },
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'business-formation',
    number: '01',
    title: 'Business Formation',
    category: 'formation',
    shortDescription:
      'Strategic entity selection (LLC, Corp, LP), customized governance documents, Operating Agreements, and Texas filing compliance.',
    overview:
      'Starting a business on solid legal ground prevents costly governance disputes and liability exposure down the road. We guide Austin entrepreneurs and founders through every phase of entity selection, structuring, ownership allocation, and formation documentation under Texas law.',
    whatWeHelpWith: [
      'Evaluation and selection between LLC, LP, S-Corp, and C-Corp structures',
      'Drafting tailored Operating Agreements, Company Agreements, and Bylaws',
      'Filing Certificates of Formation with the Texas Secretary of State',
      'Founder share allocation, vesting schedules, and buy-sell provisions',
      'Corporate resolutions, initial minutes, and EIN / tax classification coordination',
      'Registered agent considerations and Texas state compliance requirements',
    ],
    keyConsiderations: [
      'Protection of personal assets through appropriate limited liability barriers',
      'Tax efficiency based on flow-through vs. corporate tax classifications',
      'Clear voting rights and deadlock-resolution protocols among co-founders',
      'Capital contribution terms and profit/loss distribution mechanics',
    ],
    commonScenarios: [
      'Two or three partners starting an Austin technology or services venture needing customized equity splits and buy-sell terms.',
      'A sole proprietor converting an expanding consulting practice into a Texas LLC for liability shielding and tax flexibility.',
      'An existing company establishing holding and operating entity layers to isolate commercial assets.',
    ],
    faqs: [
      {
        question: 'Which entity structure is best for my Austin startup: LLC or Corporation?',
        answer:
          'There is no one-size-fits-all answer. LLCs provide exceptional structural flexibility and pass-through taxation with minimal statutory formalities. Corporations (C-Corp or S-Corp election) may be advantageous if you plan to seek venture capital or issue equity options. We evaluate your goals, capitalization plans, and operational needs to determine the right fit.',
      },
      {
        question: 'Can I use an online template for my Texas LLC Operating Agreement?',
        answer:
          'Generic online templates rarely account for Texas-specific statutory default rules or the nuance of your particular ownership dynamics. A customized agreement establishes enforceable buy-sell rules, voting thresholds, and exit provisions that protect your investment when partners disagree.',
      },
    ],
    featured: true,
  },
  {
    id: 'business-disputes',
    number: '02',
    title: 'Business Disputes',
    category: 'disputes',
    shortDescription:
      'Pragmatic resolution for breach of contract, shareholder & partner conflicts, vendor disagreements, and commercial claims.',
    overview:
      'When commercial relationships fracture, decisive legal counsel is essential to protect your business assets, enforce your rights, and mitigate operational disruption. We prioritize strategic negotiation and pragmatic solutions that protect your balance sheet.',
    whatWeHelpWith: [
      'Breach of contract claims and contract enforcement',
      'Shareholder, partner, and member disputes including freeze-outs and fiduciary breaches',
      'Vendor, supplier, and commercial customer payment disputes',
      'Non-disclosure agreement (NDA) and non-compete enforcement / defense',
      'Pre-litigation risk analysis, demand letters, and structured settlement negotiations',
      'Mediation and alternative dispute resolution representation',
    ],
    keyConsiderations: [
      'Evaluating the legal strength of contractual remedies versus the business cost of dispute resolution',
      'Preserving ongoing operational continuity and protecting confidential business assets during a conflict',
      'Analyzing Texas statutory attorney fee recovery provisions under Texas Civil Practice and Remedies Code',
      'Drafting comprehensive, binding mutual release and separation agreements',
    ],
    commonScenarios: [
      'A key vendor fails to deliver mission-critical software or goods under an executed Master Services Agreement.',
      'Co-founders have irreconcilable differences regarding business strategy and require a structured partner buyout.',
      'A former contractor or executive attempts to solicit clients in direct violation of proprietary information covenants.',
    ],
    faqs: [
      {
        question: 'Does every business dispute end up in court?',
        answer:
          'No. In fact, most commercial disputes are resolved prior to trial through strategic negotiation, clear demand letters, or mediation. Our primary objective is securing an outcome that protects your rights without incurring unnecessary legal expenses.',
      },
      {
        question: 'Can I recover attorney fees in Texas for breach of contract?',
        answer:
          'Under Texas Civil Practice and Remedies Code Chapter 38, prevailing parties in qualifying contract disputes may be entitled to recover reasonable attorney fees. We evaluate fee-shifting potential early in every dispute.',
      },
    ],
    featured: true,
  },
  {
    id: 'contracts',
    number: '03',
    title: 'Contracts & Commercial Agreements',
    category: 'contracts',
    shortDescription:
      'Meticulous drafting, review, and negotiation of client agreements, vendor contracts, NDAs, and Master Services Agreements.',
    overview:
      'Clear, carefully drafted contracts form the bedrock of every successful enterprise. We draft and negotiate commercial agreements that clearly allocate risk, eliminate ambiguities, protect cash flow, and reflect your real operational workflow.',
    whatWeHelpWith: [
      'Client and customer Service Agreements / Statements of Work (SOW)',
      'Master Services Agreements (MSA) and Master Vendor Agreements',
      'Non-Disclosure Agreements (NDAs) and Confidentiality Covenants',
      'Independent Contractor Agreements and consulting contracts',
      'Licensing agreements, distribution agreements, and reseller terms',
      'Contract audits and risk-review of agreements presented by counterparties',
    ],
    keyConsiderations: [
      'Limitation of liability and indemnification clauses tailored to industry standards',
      'Clear payment milestones, late fees, and suspension of services rights',
      'Intellectual property ownership and work-for-hire assignment clauses',
      'Dispute resolution mechanisms, Texas venue selection, and governing law clauses',
    ],
    commonScenarios: [
      'An Austin agency or consulting firm needs standard client contracts that protect IP and guarantee prompt payment terms.',
      'A business owner receives a complex 40-page vendor contract and needs an attorney to identify hidden liabilities before signing.',
      'A software company needs standard Terms of Service, Privacy Policy, and Enterprise Service Level Agreements (SLAs).',
    ],
    faqs: [
      {
        question: 'Why should I have an attorney review a standard contract before signing?',
        answer:
          'Standard forms provided by vendors or enterprise customers are drafted exclusively to favor the other party. Meticulous review uncovers one-sided indemnification clauses, uncapped liabilities, automatic renewal traps, and restrictive covenants.',
      },
    ],
    featured: true,
  },
  {
    id: 'trademark-ip',
    number: '04',
    title: 'Trademark & Intellectual Property',
    category: 'ip',
    shortDescription:
      'USPTO federal trademark registration, clearance searches, brand asset protection, and intellectual property licensing.',
    overview:
      'Your brand name, logo, proprietary systems, and trade secrets are among your company’s most valuable assets. We help Austin businesses safeguard their unique identity and protect their creative and commercial capital nationwide.',
    whatWeHelpWith: [
      'Comprehensive USPTO trademark clearance searches and risk assessments',
      'Preparation and filing of federal trademark applications with the USPTO',
      'Responding to USPTO Office Actions and examining attorney inquiries',
      'Trademark maintenance filings, renewals, and Statements of Use',
      'IP assignment agreements, trade secret protection protocols, and NDAs',
      'Brand licensing agreements and co-existence negotiation',
    ],
    keyConsiderations: [
      'Securing federal nationwide priority versus common law local rights',
      'Ensuring distinctiveness to avoid refusals based on merely descriptive terminology',
      'Proper classification of goods and services under international trademark classes',
      'Securing work-for-hire assignments from all freelance designers, developers, and contractors',
    ],
    commonScenarios: [
      'An Austin brand preparing for regional or national expansion wanting to register their brand name and logo with the USPTO.',
      'A company receiving a trademark cease-and-desist letter needing immediate evaluation of infringement claims and defenses.',
      'A tech company licensing proprietary tools or brand assets to enterprise partners.',
    ],
    faqs: [
      {
        question: 'What is the difference between registering a business name with Texas and a USPTO trademark?',
        answer:
          'Registering your LLC or DBA name with the Texas Secretary of State merely reserves your corporate name in Texas—it does NOT grant federal trademark rights or protect you from trademark infringement claims. A USPTO federal registration grants nationwide rights and exclusive ownership across the United States.',
      },
    ],
    featured: true,
  },
  {
    id: 'franchise-law',
    number: '05',
    title: 'Franchise Law',
    category: 'transactions',
    shortDescription:
      'Comprehensive Franchise Disclosure Document (FDD) reviews, franchise agreement negotiations, and franchisee counsel.',
    overview:
      'Purchasing a franchise is a substantial long-term financial commitment governed by complex FTC regulations and state laws. We provide prospective franchisees with thorough legal review and strategic counsel before they execute binding commitments.',
    whatWeHelpWith: [
      'Detailed review and analysis of Franchise Disclosure Documents (FDD)',
      'Franchise Agreement examination, item-by-item risk assessment, and negotiation',
      'Area Development and Multi-Unit Franchise Agreement structuring',
      'Evaluation of personal guaranty exposure, territory exclusivity, and non-competes',
      'Franchisee transfer, resale, and succession planning',
      'Commercial lease review for franchise location build-outs',
    ],
    keyConsiderations: [
      'Understanding ongoing royalty obligations, advertising fund fees, and technology surcharges',
      'Analyzing restrictions on supplier sourcing, operational changes, and renewal terms',
      'Limiting spouse/personal liability under franchisor personal guaranty requirements',
      'Evaluating dispute resolution venue clauses that may force litigation out-of-state',
    ],
    commonScenarios: [
      'An entrepreneur evaluating an FDD for an Austin fast-casual dining or fitness franchise before signing.',
      'An existing franchisee negotiating the sale and transfer of their multi-unit territory to a new buyer.',
    ],
    faqs: [
      {
        question: 'Are franchisors willing to negotiate the terms in a standard Franchise Agreement?',
        answer:
          'While core system standards and royalty percentages are often fixed, franchisors frequently negotiate territory protections, transfer fees, default cure periods, personal guaranty caps, and dispute resolution venues when represented by experienced counsel.',
      },
    ],
  },
  {
    id: 'buying-selling-business',
    number: '06',
    title: 'Buying & Selling a Business',
    category: 'transactions',
    shortDescription:
      'Deal structuring, asset vs. stock purchases, comprehensive due diligence, Letter of Intent (LOI), and closing management.',
    overview:
      'Acquiring or exiting a business represents years of capital and effort. We guide buyers and sellers through every stage of the transaction—from preliminary negotiations through due diligence, definitive drafting, and closing.',
    whatWeHelpWith: [
      'Drafting and negotiating non-binding and binding Letters of Intent (LOI) / Term Sheets',
      'Structuring Asset Purchase Agreements (APA) vs. Stock / Equity Purchase Agreements',
      'Comprehensive legal due diligence and disclosure schedule preparation',
      'Seller financing documentation, promissory notes, and security agreements',
      'Non-competition, non-solicitation, and transition consulting agreements',
      'Closing coordination, third-party consents, and post-closing adjustments',
    ],
    keyConsiderations: [
      'Asset purchase advantages for isolating legacy seller liabilities',
      'Tax implications and purchase price allocation between tangible and intangible assets',
      'Robust representations and warranties paired with negotiated indemnity caps and baskets',
      'Assignment and transferability of critical leases, vendor contracts, and intellectual property',
    ],
    commonScenarios: [
      'An entrepreneur purchasing an established Austin retail or services company using seller financing and SBA loan proceeds.',
      'A founder selling their company to an industry buyer and seeking to maximize proceeds while limiting post-sale liabilities.',
    ],
    faqs: [
      {
        question: 'Should I buy the assets of a company or its stock/equity?',
        answer:
          'In most small-to-mid business acquisitions, buyers strongly prefer an Asset Purchase Agreement because it allows them to select specific assets and avoid inheriting undisclosed debts, lawsuits, or tax liabilities of the selling entity. We help you structure the deal that optimizes your legal and financial position.',
      },
    ],
    featured: true,
  },
  {
    id: 'mergers-acquisitions',
    number: '07',
    title: 'Mergers & Acquisitions',
    category: 'transactions',
    shortDescription:
      'Strategic corporate combinations, entity reorganizations, cross-entity mergers, and growth transactions under Texas law.',
    overview:
      'Strategic growth often requires combining entities or executing multi-party reorganizations. We assist Austin businesses with mid-market M&A, cross-entity conversions, and structural consolidation with high attention to detail.',
    whatWeHelpWith: [
      'Texas statutory mergers, conversions, and corporate consolidations',
      'Drafting Plans of Merger and Certificates of Merger with the Texas Secretary of State',
      'Minority shareholder protections and dissenters’ rights analysis',
      'Regulatory compliance, antitrust thresholds, and corporate authority resolutions',
      'Integration of employment contracts, IP portfolios, and operational agreements',
    ],
    keyConsiderations: [
      'Preserving key customer relationships and operational momentum during corporate transitions',
      'Ensuring strict compliance with Texas Business Organizations Code (BOC) voting and approval mandates',
      'Mitigating successor liability risks through structured covenants and escrow holdbacks',
    ],
    commonScenarios: [
      'Two complementary Austin professional practices merging into a unified Texas professional entity.',
      'A growing company acquiring a competitor’s intellectual property and customer accounts.',
    ],
    faqs: [
      {
        question: 'What approvals are needed for a Texas entity merger?',
        answer:
          'The Texas Business Organizations Code requires formal board/manager approval and supermajority or majority owner consent depending on the entity’s governing documents. We ensure all resolutions, notices, and filings meet statutory requirements.',
      },
    ],
  },
  {
    id: 'technology-companies',
    number: '08',
    title: 'Technology Companies & Startups',
    category: 'formation',
    shortDescription:
      'SaaS agreements, founder equity, IP assignment, developer contracts, and outside counsel for Austin tech ventures.',
    overview:
      'Austin’s thriving technology ecosystem demands legal counsel that understands rapid iteration, code ownership, SaaS licensing, and investor expectations. Darin Siefkes brings direct tech-industry experience to every client relationship.',
    whatWeHelpWith: [
      'SaaS Master Subscription Agreements, End User License Agreements (EULAs), and Terms of Service',
      'Founder equity structures, restricted stock purchase agreements, and vesting schedules',
      'Proprietary Information and Inventions Agreements (PIIA) for employees and contractors',
      'Software development agreements and API integration terms',
      'Seed and angel financing documentation and convertible notes / SAFEs counsel',
    ],
    keyConsiderations: [
      'Ensuring 100% of codebase, patents, and trademarks are cleanly assigned to the company',
      'Service level commitments, data privacy provisions, and downtime liability limitations',
      'Protecting founder ownership and control through strategic voting agreements',
    ],
    commonScenarios: [
      'A software founder preparing to hire contract engineers and needing watertight IP assignment contracts.',
      'A B2B SaaS platform closing its first major enterprise customer and negotiating custom data security terms.',
    ],
    faqs: [
      {
        question: 'Why is a clean IP assignment critical before raising capital?',
        answer:
          'Investors and acquirers conduct rigorous due diligence on software ownership. If any developer, contractor, or co-founder wrote code without an explicit written assignment to the company, your core technology could be tied up in ownership claims. We audit and secure your IP chain of title.',
      },
    ],
  },
  {
    id: 'commercial-real-estate',
    number: '09',
    title: 'Commercial Real Estate',
    category: 'contracts',
    shortDescription:
      'Commercial lease review, retail and office lease negotiation, tenant representation, and purchase/sale agreements.',
    overview:
      'A commercial lease or property acquisition is often one of a business’s largest ongoing balance sheet obligations. We represent business tenants, buyers, and owners in commercial real estate negotiations across the Austin metropolitan area.',
    whatWeHelpWith: [
      'Review and negotiation of commercial office, retail, and industrial leases',
      'Triple Net (NNN) lease fee audits and Common Area Maintenance (CAM) limitation terms',
      'Tenant improvement allowances (TI) and delivery condition milestones',
      'Commercial purchase and sale agreements and title/survey review',
      'Subleases, assignments, lease extensions, and landlord-tenant dispute negotiation',
    ],
    keyConsiderations: [
      'Capping uncontrollable CAM operating expense escalations',
      'Limiting personal guaranty exposure as the business matures',
      'Securing assignment and subletting flexibility in case the business expands or sells',
      'Evaluating restoration clauses and end-of-term surrender obligations',
    ],
    commonScenarios: [
      'An Austin restaurant, retailer, or professional office negotiating a 5-year commercial lease in a new retail center.',
      'A tenant seeking to sublease excess square footage or assign their lease in connection with a business sale.',
    ],
    faqs: [
      {
        question: 'Can commercial lease terms really be negotiated?',
        answer:
          'Yes. Landlord standard leases are heavily tilted in favor of property owners. Critical terms like CAM expense caps, personal guaranty releases, exclusivity rights, maintenance obligations, and default remedies can and should be negotiated before signing.',
      },
    ],
  },
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'contract-review-guide',
    slug: 'what-business-owners-should-know-before-signing-contract',
    title: 'What Business Owners Should Know Before Signing a Commercial Contract',
    category: 'Contracts & Agreements',
    readTime: '6 min read',
    date: 'Updated Quarterly',
    excerpt:
      'Key contractual pitfalls that frequently put Texas businesses at risk, including hidden indemnities, unlimited liability clauses, and dispute resolution traps.',
    keyTakeaways: [
      'Never accept uncapped indemnification clauses without mutual limitations and insurance alignment.',
      'Define clear milestones, acceptance criteria, and explicit payment terms to avoid cash-flow disputes.',
      'Confirm governing law and dispute venue remain in Travis County, Texas to prevent costly out-of-state litigation.',
      'Ensure intellectual property generated under the contract is explicitly assigned in writing.',
    ],
    tags: ['Contracts', 'Risk Management', 'Commercial Agreements', 'Texas Law'],
    content: [
      {
        sectionHeading: 'The Risk of the "Standard" Agreement',
        paragraphs: [
          'In commercial transactions, there is no such thing as a truly "standard" contract. Every agreement presented by a vendor, customer, landlord, or software platform was drafted by an attorney with one primary objective: to maximize their client’s protections while shifting as much risk as possible to you.',
          'Signing without experienced legal review often exposes a business to severe hidden liabilities that only become apparent when a dispute arises or when performance is disrupted.',
        ],
      },
      {
        sectionHeading: '1. Uncapped Indemnification and Liability Exposure',
        paragraphs: [
          'One of the most dangerous provisions in any commercial contract is an overbroad indemnity clause. When you agree to "indemnify, defend, and hold harmless" another party, you are agreeing to pay their legal fees and any resulting damages, sometimes even for their own negligence.',
          'Pragmatic counsel works to ensure indemnities are strictly mutual, narrowly tailored to direct breach of the agreement, and backed by liability caps aligned with your commercial insurance coverage.',
        ],
      },
      {
        sectionHeading: '2. Dispute Venue and Governing Law in Texas',
        paragraphs: [
          'Contracts drafted by out-of-state vendors frequently stipulate governing law in Delaware, California, or New York, with mandatory dispute resolution in their home jurisdiction. If a dispute occurs, you could be forced to hire out-of-state counsel and travel across the country.',
          'We consistently negotiate for Travis County, Texas venue and Texas governing law to protect local Austin business operations.',
        ],
      },
      {
        sectionHeading: '3. Intellectual Property Ownership & Work-for-Hire Clarity',
        paragraphs: [
          'Unless your contract contains explicit "work made for hire" language and affirmative assignment clauses under federal copyright and state trade secret laws, you may discover that your company does not own custom software, designs, or marketing assets developed by an outside provider.',
        ],
      },
    ],
  },
  {
    id: 'entity-selection-texas',
    slug: 'choosing-the-right-business-entity-texas',
    title: 'Choosing the Right Business Entity in Texas: LLC vs. S-Corp vs. C-Corp',
    category: 'Business Formation',
    readTime: '7 min read',
    date: 'Updated Quarterly',
    excerpt:
      'A practical comparison of liability shielding, tax treatment, operational governance, and founder flexibility for Austin entrepreneurs.',
    keyTakeaways: [
      'LLCs offer unparalleled flexibility in operating rules and profit distribution with minimal corporate formalities.',
      'S-Corporation tax status can yield self-employment tax savings for profitable active owner-operators.',
      'C-Corporations remain the standard vehicle for high-growth tech ventures seeking institutional venture funding.',
      'Formal governing documents (Operating Agreements or Bylaws) are essential to prevent statutory deadlock under Texas law.',
    ],
    tags: ['Formation', 'LLC', 'Corporations', 'Startups', 'Texas BOC'],
    content: [
      {
        sectionHeading: 'Foundational Structure Determines Long-Term Success',
        paragraphs: [
          'Choosing how to structure your business is one of the most consequential decisions an entrepreneur will make. The chosen structure dictates personal liability protection, tax obligations, governance requirements, and how easily you can raise capital or sell the enterprise.',
        ],
      },
      {
        sectionHeading: 'Texas Limited Liability Company (LLC)',
        paragraphs: [
          'For most Austin small-to-mid businesses, the Texas LLC is the gold standard. It provides the same limited liability shield as a corporation but without the rigid statutory requirements for annual shareholder meetings, director elections, and formal minutes.',
          'Ownership interests in a Texas LLC are governed by a Company Agreement (Operating Agreement), allowing customized voting thresholds, equity vesting, and profit allocation that need not match capital contributions.',
        ],
      },
      {
        sectionHeading: 'S-Corporation Tax Election',
        paragraphs: [
          'An S-Corporation is not a distinct state entity type, but rather a federal tax classification available to qualifying LLCs or state corporations. Under an S-Corp election, owner-employees can draw a reasonable salary and distribute remaining profits as dividend distributions, potentially reducing self-employment taxes.',
        ],
      },
      {
        sectionHeading: 'C-Corporation Considerations',
        paragraphs: [
          'If your Austin startup plans to raise institutional seed or venture capital, issue stock options to employees, or qualify for Section 1202 Qualified Small Business Stock (QSBS) capital gains exclusions, a Delaware or Texas C-Corporation is frequently the preferred vehicle.',
        ],
      },
    ],
  },
  {
    id: 'buying-a-business-checklist',
    slug: 'legal-considerations-when-buying-a-business',
    title: 'Legal Due Diligence Checklist When Buying an Existing Business',
    category: 'Transactions & M&A',
    readTime: '8 min read',
    date: 'Updated Quarterly',
    excerpt:
      'How to evaluate financial records, uncover undisclosed liabilities, structure the purchase agreement, and safeguard your capital.',
    keyTakeaways: [
      'Structure the acquisition as an Asset Purchase Agreement whenever feasible to avoid legacy liabilities.',
      'Conduct rigorous due diligence across contracts, financial history, taxes, employees, and customer concentration.',
      'Require thorough representations, warranties, and an escrow holdback to cover post-closing indemnity claims.',
      'Confirm commercial lease transferability and landlord consent early in the due diligence period.',
    ],
    tags: ['M&A', 'Asset Purchase', 'Due Diligence', 'Business Acquisition'],
    content: [
      {
        sectionHeading: 'Mitigating Risk in Business Acquisitions',
        paragraphs: [
          'Purchasing an existing business provides immediate cash flow, established customer accounts, and operational infrastructure. However, failing to conduct thorough legal due diligence can turn a promising opportunity into a financial catastrophe.',
        ],
      },
      {
        sectionHeading: '1. Asset Purchase vs. Stock Purchase',
        paragraphs: [
          'In an Asset Purchase Agreement (APA), the buyer acquires specific commercial assets (equipment, customer lists, IP, goodwill) while leaving specified liabilities with the seller’s entity. In a Stock or Membership Interest purchase, the buyer acquires the company in its entirety, including unknown or contingent liabilities.',
          'Except in rare circumstances involving non-transferable permits or contracts, buyers generally favor asset purchases.',
        ],
      },
      {
        sectionHeading: '2. Contractual and Lease Due Diligence',
        paragraphs: [
          'Every key relationship must be scrutinized: Are major customer contracts assignable without consent? Will the commercial landlord approve a lease assignment or require a new lease? Are there change-of-control clauses in software subscriptions?',
        ],
      },
      {
        sectionHeading: '3. Seller Restrictive Covenants',
        paragraphs: [
          'To protect the value of the acquired goodwill, the definitive agreement must contain enforceable non-competition and non-solicitation covenants preventing the seller from opening a competing business in the Austin market or soliciting key employees.',
        ],
      },
    ],
  },
  {
    id: 'trademark-startup-strategy',
    slug: 'protecting-your-brand-trademark-strategy',
    title: 'Protecting Your Brand: Trademark Strategy for Austin Startups',
    category: 'Intellectual Property',
    readTime: '5 min read',
    date: 'Updated Quarterly',
    excerpt:
      'Why registering your LLC name with the Texas Secretary of State is not enough to protect your brand nationwide.',
    keyTakeaways: [
      'A Texas Secretary of State filing only reserves a name in Texas and offers zero nationwide trademark protection.',
      'Federal USPTO registration grants nationwide constructive notice and exclusive rights in your commercial class.',
      'Conducting a thorough clearance search before investing in branding avoids expensive re-branding and infringement claims.',
    ],
    tags: ['Trademarks', 'Intellectual Property', 'Startups', 'USPTO'],
    content: [
      {
        sectionHeading: 'The Common Misconception About Business Names',
        paragraphs: [
          'Many business owners believe that once their Texas LLC or corporation is approved by the Texas Secretary of State, their brand name is legally protected. This is a dangerous misconception.',
          'State entity registration only confirms that no other company has the identical corporate name on file in Texas. It does NOT prevent someone with an existing federal trademark from shutting down your operations with a cease-and-desist letter.',
        ],
      },
      {
        sectionHeading: 'The Benefits of Federal USPTO Registration',
        paragraphs: [
          'A federal trademark registered with the United States Patent and Trademark Office (USPTO) provides nationwide priority dating back to your application filing date, the legal presumption of brand ownership, and the right to use the coveted ® symbol.',
          'We conduct comprehensive preliminary clearance searches across federal, state, and common law databases to identify potential conflicts before you invest heavily in marketing and signage.',
        ],
      },
    ],
  },
  {
    id: 'partner-disputes-prevention',
    slug: 'resolving-business-partner-disputes',
    title: 'Resolving Business Partner Disputes Before They Turn Into Costly Litigation',
    category: 'Disputes & Governance',
    readTime: '6 min read',
    date: 'Updated Quarterly',
    excerpt:
      'Practical mechanisms for addressing founder deadlock, fiduciary disagreements, and minority shareholder rights.',
    keyTakeaways: [
      'A well-drafted Operating Agreement with clear dispute escalation clauses is the best defense against partner deadlock.',
      'Texas law imposes strict fiduciary duties of loyalty, care, and good faith among managing partners and officers.',
      'Structured partner buyouts with pre-determined valuation formulas provide a clean, dignified exit path.',
    ],
    tags: ['Disputes', 'Partnership', 'Governance', 'Mediation'],
    content: [
      {
        sectionHeading: 'The Anatomy of a Partnership Dispute',
        paragraphs: [
          'When co-founders launch a company, enthusiasm runs high and disagreements seem unthinkable. However, changes in business vision, financial stress, unequal work contributions, or personal priorities inevitably create friction.',
          'Without proactive legal protocols in place, a partnership dispute can paralyze daily operations and destroy enterprise value.',
        ],
      },
      {
        sectionHeading: 'Deadlock-Breaking Mechanisms',
        paragraphs: [
          'A properly structured Texas Company Agreement includes specific deadlock-resolution mechanisms such as mandatory mediation periods, independent tie-breaking advisors, or structured "Texas shootout" / buy-sell buyout formulas.',
          'Having an attorney facilitate early discussions often leads to a clean, negotiated buyout agreement without destroying the business.',
        ],
      },
    ],
  },
  {
    id: 'franchise-agreement-review',
    slug: 'franchise-agreement-review-key-terms',
    title: 'Franchise Agreement Review: Key Terms Every Franchisee Must Understand',
    category: 'Franchise Law',
    readTime: '6 min read',
    date: 'Updated Quarterly',
    excerpt:
      'Understanding the legal and financial implications of Franchise Disclosure Documents (FDD), royalties, and personal guarantees.',
    keyTakeaways: [
      'Scrutinize Item 19 Financial Performance Representations in the FDD to evaluate realistic earnings potential.',
      'Carefully evaluate territory exclusivity boundaries and franchisor digital sales carve-outs.',
      'Negotiate caps on personal guarantees to protect family assets as the franchise grows.',
    ],
    tags: ['Franchise', 'FDD', 'Commercial Agreements', 'Franchisee'],
    content: [
      {
        sectionHeading: 'Evaluating the 23 Items of the FDD',
        paragraphs: [
          'The Federal Trade Commission (FTC) mandates that franchisors provide prospective buyers with a Franchise Disclosure Document (FDD) containing 23 specific disclosures at least 14 days before signing any binding agreement or paying fees.',
          'Darin Siefkes analyzes every item of the FDD, focusing on litigation history (Item 3), bankruptcy filings (Item 4), initial fees and ongoing royalties (Items 5 & 6), and supplier restrictions (Item 8).',
        ],
      },
    ],
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    title: 'Dedicated Outside Counsel',
    description:
      'Large enterprises have internal general counsel on salary. We provide the same caliber of strategic, ongoing business guidance tailored for Austin small businesses and entrepreneurs without the full-time overhead.',
    highlight: 'Accessible & Embedded',
  },
  {
    title: 'Proactive Problem Prevention',
    description:
      'Sound contracts, clear governance agreements, and trademark protection prevent expensive commercial litigation before it ever starts. Proactive planning is far more cost-effective than courtroom defense.',
    highlight: 'Protection-First',
  },
  {
    title: 'Cost-Conscious & Transparent',
    description:
      'We believe in practical, business-minded legal counsel. Where appropriate, we offer transparent flat-fee pricing for core services like business formations, trademark filings, and contract reviews.',
    highlight: 'Predictable Value',
  },
  {
    title: 'Direct Attorney Attention',
    description:
      'You will work directly with Darin Siefkes throughout your matter. Your business will never be handed off to junior associates, paralegals, or unfamiliar intermediaries.',
    highlight: 'Personal Focus',
  },
];

export const AUSTIN_COMMUNITY = {
  headline: 'Business Counsel in Austin, Texas',
  subtitle: 'Rooted in the Capital City’s Entrepreneurial Spirit',
  copy: 'Austin is one of the most vibrant business and innovation hubs in the country. From high-growth technology startups and creative agencies to independent retailers, commercial contractors, and multi-generation family companies, Austin businesses face unique opportunities and regulatory requirements. Located centrally on Koenig Lane, The Law Office of Darin Siefkes provides direct, accessible counsel to founders and executives across the Austin metropolitan area.',
  highlights: [
    { label: 'Location', value: '1523 W. Koenig Ln., Austin, TX' },
    { label: 'Experience', value: 'Serving Texas Businesses Since 2005' },
    { label: 'Client Focus', value: 'Startups, Small Businesses & Mid-Market Firms' },
    { label: 'Office Hours', value: 'Mon – Fri, 8:30 AM – 5:30 PM' },
  ],
};
