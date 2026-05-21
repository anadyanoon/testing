// ==========================================
// 1. STATE CONFIGURATIONS
// ==========================================
const appState = {
  activeTab: 'radar',
  insights: [
    {
      id: 'insight-1',
      title: 'CTR dropped 18% in Electronics',
      description: 'Homepage banner slot 2 performance fell below running statistical deviation bounds. Action target: Swap visual displays.',
      metricDelta: -18.23,
      impactUsd: 4200,
      severity: 'critical',
      actionLabel: 'Swap placement layout'
    },
    {
      id: 'insight-2',
      title: 'Skincare trending on TikTok',
      description: 'Demand volume indicators suggest a 240% surge across targeted influencer index tracking channels.',
      metricDelta: 240.00,
      impactUsd: 8700,
      severity: 'high',
      actionLabel: 'Deploy Gen-Z assets'
    },
    {
      id: 'insight-3',
      title: 'Inventory exhaustion alert',
      description: 'SKU-9042 (Corset Crop) run-rate constraints anticipate a total catalog stockout within 32 tracking hours.',
      metricDelta: -12.15,
      impactUsd: 3100,
      severity: 'medium',
      actionLabel: 'Reallocate performance budget'
    }
  ],
  merchSlots: [
    {
      id: 'slot-1',
      name: 'HERO HOME CAROUSEL',
      sku: 'SKU-4902 (TikTok Lace Knit)',
      ctr: 4.8,
      status: 'AI Placed',
      underperforming: false
    },
    {
      id: 'slot-2',
      name: 'WEEKEND SELECTION ROW',
      sku: 'SKU-1022 (Basic Crewneck)',
      ctr: 1.1,
      status: 'Manual Placement',
      underperforming: true,
      alternative: 'SKU-8849 (+1.9% CTR lift)'
    }
  ],
  experiments: [
    {
      id: 'exp-1',
      name: 'EXP-9942: Video vs Static Banners',
      description: 'Evaluating conversion lift metrics using incoming dynamic TikTok and Meta referral ad paths.',
      status: 'ACTIVE',
      variantA: { label: 'A (Static Banner)', value: '1.84% CR' },
      variantB: { label: 'B (TikTok UGC Video)', value: '2.91% CR' },
      winnerDeclared: false
    }
  ],
  competitors: [
    {
      channel: 'TEMU MARKETPLACE',
      sku: 'Corset Waist Wrap Bustier',
      competitorPrice: '$3.82',
      ourPrice: '$19.99',
      trendTime: '2h ago',
      colorCode: 'text-rose'
    },
    {
      channel: 'TIKTOK SHOP US',
      sku: 'Gloss-Oil Lip Tint Plumper',
      competitorPrice: 'Surging demand tracking metrics (4.8k units/day)',
      ourPrice: 'Catalog match verification: 92%',
      trendT