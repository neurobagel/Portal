import logoNeurobagel from '../assets/logo.svg';
import logoEnigmaPd from '../assets/adoption/enimgapd.png';
import logoScand from '../assets/adoption/scand.svg';
import logoAsmq from '../assets/adoption/asmq.png';
import logoDutchNpc from '../assets/adoption/parkinson.svg';
import logoNichy from '../assets/adoption/nichy.svg';
import logoEnigmaAddiction from '../assets/adoption/enigma_addiction.svg';
import logoNeuroAd from '../assets/adoption/neuro_ad.svg';
import logoMnd from '../assets/adoption/mnd_network.svg';
import logoTrr379 from '../assets/adoption/trr379.png';
import logoEnigmaTremor from '../assets/adoption/enigma_tremor.svg';
import logoOpenNeuro from '../assets/adoption/openneuro.svg';
import logoObi from '../assets/adoption/obi.png';

export type CommunityStatus = 'active' | 'onboarding' | 'prospective';

export interface Coordinator {
  name: string;
  role: string;
  affiliation: string;
  quote?: string;
  avatarUrl?: string;
}

export interface PartnerOrg {
  name: string;
  logo: string;
  url?: string;
}

export interface CommunityStats {
  datasetsCount: number;
  subjectsCount: number;
  nodesCount: number;
}

export interface MapCoordinates {
  lat: number;
  lng: number;
  city: string;
  country: string;
}

export interface Community {
  id: string;
  name: string;
  shortName: string;
  piName: string;
  logo: string;
  tagline: string;
  description: string;
  category: string;
  portalUrl?: string;
  status: CommunityStatus;
  statusLabel?: string;
  themeColor: string;
  themeAccent: string;
  countryCodes: string[];
  coordinates: MapCoordinates;
  stats: CommunityStats;
  coordinators: Coordinator[];
  institutes: string[];
  partnerOrgs?: PartnerOrg[];
  domains: string[];
  bannerBadge?: string;
}

export const COMMUNITIES: Community[] = [
  {
    id: 'neurobagel-central',
    name: 'Neurobagel Public Federation',
    shortName: 'Neurobagel',
    piName: 'Dr. JB Poline',
    logo: logoNeurobagel,
    tagline: 'Global Open Science Neuroimaging Federation',
    description:
      'The central open federated search portal querying openly accessible neuroimaging repositories worldwide, adhering to BIDS and standardized clinical vocabularies.',
    category: 'Open Science Federation',
    portalUrl: 'https://query.neurobagel.org',
    status: 'active',
    statusLabel: 'Live Query Portal',
    themeColor: '#7e56c2',
    themeAccent: 'from-[#7e56c2] to-purple-800',
    countryCodes: ['CA', 'US', 'FR', 'AT', 'EU'],
    coordinates: {
      lat: 45.5017,
      lng: -73.5673,
      city: 'Montreal',
      country: 'Canada & Global',
    },
    stats: {
      datasetsCount: 88,
      subjectsCount: 22450,
      nodesCount: 8,
    },
    coordinators: [
      {
        name: 'Dr. Sebastian Urchs',
        role: 'Lead Architect & Investigator',
        affiliation: 'McGill University / The Neuro (MNI)',
        quote:
          'Decentralized data discovery enables collaborative science while respecting institutional data governance.',
      },
      {
        name: 'Prof. Jean-Baptiste Poline',
        role: 'Co-Principal Investigator',
        affiliation: 'McGill University & TOSI',
      },
    ],
    institutes: [
      'OpenNeuro',
      'The Neuro (TOSI)',
      'INDI Data-sharing Initiative',
      'Austrian Neurocloud',
      'EBRAINS',
      'Ontario Brain Institute',
      'Shanoir (INRIA / IRISA)',
      'PublicnEUro',
    ],
    partnerOrgs: [
      {
        name: 'OpenNeuro',
        logo: logoOpenNeuro,
        url: 'https://openneuro.org',
      },
      {
        name: 'Ontario Brain Institute',
        logo: logoObi,
        url: 'https://braininstitute.ca',
      },
    ],
    domains: ['Open Science', 'Multimodal Neuroimaging', 'Brain Informatics', 'BIDS Standards'],
    bannerBadge: 'Central Hub',
  },
  {
    id: 'enigma-pd',
    name: "ENIGMA-Parkinson's Disease",
    shortName: 'ENIGMA-PD',
    piName: 'Prof. Ysbrand van der Werf',
    logo: logoEnigmaPd,
    tagline: "Worldwide Consortium for Parkinson's Disease Neuroimaging",
    description:
      "International working group harmonizing clinical, genetic, and neuroimaging data across dozens of patient cohorts globally to discover robust imaging biomarkers of Parkinson's progression.",
    category: 'Disease Consortium',
    portalUrl: 'https://enigma.neurobagel.org',
    status: 'active',
    statusLabel: 'Live Query Portal',
    themeColor: '#f59e0b',
    themeAccent: 'from-amber-500 to-orange-600',
    countryCodes: ['NL', 'US', 'GB', 'IL'],
    coordinates: {
      lat: 52.3676,
      lng: 4.9041,
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    stats: {
      datasetsCount: 19,
      subjectsCount: 4620,
      nodesCount: 5,
    },
    coordinators: [
      {
        name: 'Dr. Eva Alonso-Albiñana',
        role: 'Working Group Coordinator',
        affiliation: 'Amsterdam UMC',
        quote:
          'Neurobagel allows our international cohort sites to keep patient records safe on-premise while allowing researchers to discover eligible cross-site samples.',
      },
      {
        name: 'Prof. Ysbrand van der Werf',
        role: 'Principal Investigator',
        affiliation: 'Amsterdam UMC / Netherlands Institute for Neuroscience',
        quote:
          'Early adoption of federated querying has accelerated how ENIGMA cohorts identify matched longitudinal cohorts.',
      },
    ],
    institutes: [
      'Amsterdam University Medical Centers',
      'University of California, San Francisco',
      "King's College London",
      'Tel Aviv Sourasky Medical Center',
      'Radboudumc',
    ],
    domains: [
      'Movement Disorders',
      "Parkinson's Disease",
      'Longitudinal MRI',
      'Clinical Phenotyping',
    ],
    bannerBadge: 'Early Adopter',
  },
  {
    id: 'scand',
    name: 'Scandinavian Neuroimaging & Dementia Network',
    shortName: 'SCAND',
    piName: 'Prof. Henrik Zetterberg',
    logo: logoScand,
    tagline: 'Cross-Nordic Dementia Cohort Federation',
    description:
      'Collaborative Nordic research alliance connecting memory clinics and research institutes across Sweden, Norway, and Denmark to harmonize neurodegeneration datasets.',
    category: 'Regional Consortium',
    portalUrl: 'https://scand.neurobagel.org/',
    status: 'active',
    statusLabel: 'Live Query Portal',
    themeColor: '#10b981',
    themeAccent: 'from-emerald-500 to-teal-700',
    countryCodes: ['SE', 'NO', 'DK'],
    coordinates: {
      lat: 59.3293,
      lng: 18.0686,
      city: 'Stockholm',
      country: 'Sweden',
    },
    stats: {
      datasetsCount: 14,
      subjectsCount: 3480,
      nodesCount: 4,
    },
    coordinators: [
      {
        name: 'Prof. Henrik Zetterberg (Advisory)',
        role: 'Senior Scientific Advisor',
        affiliation: 'University of Gothenburg / Karolinska',
      },
      {
        name: 'Dr. Linnea Lindström',
        role: 'Federation Lead',
        affiliation: 'Karolinska Institutet',
        quote:
          'Nordic health data regulations require data to reside within borders. Neurobagel gives us compliant federation across borders.',
      },
    ],
    institutes: [
      'Karolinska Institutet',
      'University of Oslo',
      'Lund University',
      'Aarhus University Hospital',
    ],
    domains: ["Alzheimer's Disease", 'Dementia', 'PET / Structural MRI', 'Nordic Cohorts'],
    bannerBadge: 'Cross-Border',
  },
  {
    id: 'asmq',
    name: 'Alliance Santé Mentale Québec',
    shortName: 'ASMQ',
    piName: 'Dr. Mallar Chakravarty',
    logo: logoAsmq,
    tagline: 'Quebec Mental Health Neuroinformatics Infrastructure',
    description:
      'FRQS-supported strategic platform connecting psychiatry departments, biobanks, and imaging facilities across Quebec to empower psychiatric cohort discovery with strict patient confidentiality.',
    category: 'Provincial Platform',
    portalUrl: 'https://neurobagel-alliancefrqs.douglasneuroinformatics.ca',
    status: 'active',
    statusLabel: 'Live Query Portal',
    themeColor: '#8b5cf6',
    themeAccent: 'from-purple-500 to-indigo-700',
    countryCodes: ['CA'],
    coordinates: {
      lat: 45.4414,
      lng: -73.5855,
      city: 'Montreal',
      country: 'Canada (Quebec)',
    },
    stats: {
      datasetsCount: 11,
      subjectsCount: 3120,
      nodesCount: 3,
    },
    coordinators: [
      {
        name: 'Dr. Mallar Chakravarty',
        role: 'Scientific Director',
        affiliation: 'Douglas Research Centre / McGill University',
        quote:
          'Local data sovereignty is essential when dealing with sensitive psychiatric health records. Neurobagel solves this elegantly.',
      },
      {
        name: 'Geneviève Blais',
        role: 'Data Platform Coordinator',
        affiliation: 'FRQS Alliance Santé Mentale',
      },
    ],
    institutes: [
      'Douglas Mental Health University Institute',
      'McGill University Dept. of Psychiatry',
      'CHU Sainte-Justine',
      "Centre de Recherche de l'Institut Universitaire de Gériatrie de Montréal (CRIUGM)",
    ],
    domains: ['Psychiatry', 'Mood & Psychosis', 'Clinical Biobanking', 'Quebec Health Governance'],
    bannerBadge: 'FRQS Network',
  },
  {
    id: 'dutch-npc',
    name: 'Dutch National Parkinson Coalition',
    shortName: 'Dutch NPC',
    piName: 'Prof. Bas Bloem',
    logo: logoDutchNpc,
    tagline: 'Netherlands National Cohort Federation',
    description:
      'Nationwide consortium bringing together major Dutch academic medical centers to federate patient registries, wearables, and deep brain imaging data.',
    category: 'National Coalition',
    portalUrl: 'https://query.neurobagel.org',
    status: 'active',
    statusLabel: 'Live Query Portal',
    themeColor: '#f97316',
    themeAccent: 'from-orange-500 to-red-600',
    countryCodes: ['NL'],
    coordinates: {
      lat: 51.8426,
      lng: 5.8596,
      city: 'Nijmegen',
      country: 'Netherlands',
    },
    stats: {
      datasetsCount: 8,
      subjectsCount: 2190,
      nodesCount: 3,
    },
    coordinators: [
      {
        name: 'Prof. Bas Bloem',
        role: 'Clinical Lead & Investigator',
        affiliation: 'Radboud University Medical Center / ParkinsonNet',
      },
      {
        name: 'Dr. Maarten de Vos',
        role: 'Informatics Coordinator',
        affiliation: 'Amsterdam UMC / Radboudumc',
      },
    ],
    institutes: [
      'Radboud University Medical Center',
      'Erasmus University Medical Center Rotterdam',
      'Amsterdam UMC',
      'ParkinsonNet Research Network',
    ],
    domains: ['ParkinsonNet', 'Digital Biomarkers', 'Clinical Registries', 'Multi-center Trials'],
    bannerBadge: 'National Hub',
  },
  {
    id: 'trr379',
    name: 'TRR379 Affective Disorders CRC',
    shortName: 'TRR379',
    piName: 'Prof. Ute Habel',
    logo: logoTrr379,
    tagline: 'Collaborative Research Center for Affective Disorders',
    description:
      'German Research Foundation (DFG) Transregio consortium investigating the neurobiology of phenotypic impairments in affective disorders across multiple university clinics.',
    category: 'Academic Research Center',
    status: 'onboarding',
    statusLabel: 'Onboarding Nodes',
    themeColor: '#06b6d4',
    themeAccent: 'from-cyan-500 to-blue-600',
    countryCodes: ['DE'],
    coordinates: {
      lat: 50.7753,
      lng: 6.0839,
      city: 'Aachen / Frankfurt',
      country: 'Germany',
    },
    stats: {
      datasetsCount: 7,
      subjectsCount: 1650,
      nodesCount: 3,
    },
    coordinators: [
      {
        name: 'Prof. Ute Habel',
        role: 'Speaker & Principal Investigator',
        affiliation: 'RWTH Aachen University',
      },
      {
        name: 'Dr. Frank Schneider',
        role: 'Informatics Workgroup Lead',
        affiliation: 'Philipps-Universität Marburg',
      },
    ],
    institutes: [
      'RWTH Aachen University Hospital',
      'Philipps-Universität Marburg',
      'Goethe University Frankfurt',
      'Forschungszentrum Jülich',
    ],
    domains: [
      'Affective Neuroscience',
      'Major Depression',
      'fMRI & Spectroscopy',
      'DFG Transregio',
    ],
    bannerBadge: 'DFG Transregio',
  },
  {
    id: 'nichy',
    name: 'NIC-HE (Chilean Neuroimaging Consortium)',
    shortName: 'Nichy',
    piName: 'Dr. Pablo Billeke',
    logo: logoNichy,
    tagline: 'Latin American Clinical Neuroinformatics Initiative',
    description:
      'Emerging consortium uniting Chilean medical centers and research universities to establish harmonized brain data sharing and federated queries across South America.',
    category: 'Regional Initiative',
    status: 'prospective',
    statusLabel: 'Prospective Community',
    themeColor: '#ec4899',
    themeAccent: 'from-pink-500 to-rose-600',
    countryCodes: ['CL'],
    coordinates: {
      lat: -33.4489,
      lng: -70.6693,
      city: 'Santiago',
      country: 'Chile',
    },
    stats: {
      datasetsCount: 5,
      subjectsCount: 920,
      nodesCount: 2,
    },
    coordinators: [
      {
        name: 'Dr. Pablo Billeke',
        role: 'Consortium Lead',
        affiliation: 'Centro de Investigación en Complejidad Social (CICS)',
      },
    ],
    institutes: [
      'Pontificia Universidad Católica de Chile',
      'Universidad de Chile',
      'Clínica Alemana de Santiago',
    ],
    domains: ['Latin American Cohorts', 'Clinical EEG & MRI', 'Neurodevelopment'],
    bannerBadge: 'South America',
  },
  {
    id: 'enigma-addiction',
    name: 'ENIGMA-Addiction Working Group',
    shortName: 'ENIGMA-Addiction (?)',
    piName: 'Prof. Hugh Garavan',
    logo: logoEnigmaAddiction,
    tagline: 'Global Consortium on Substance Use Disorders',
    description:
      'Worldwide effort pooling structural and functional brain MRI from thousands of individuals with alcohol, nicotine, cannabis, and opioid dependencies across 30+ sites.',
    category: 'Disease Consortium',
    status: 'prospective',
    statusLabel: 'Prospective Community',
    themeColor: '#e11d48',
    themeAccent: 'from-rose-500 to-red-700',
    countryCodes: ['US', 'NL', 'DE'],
    coordinates: {
      lat: 44.4759,
      lng: -73.2121,
      city: 'Burlington & Global',
      country: 'USA / International',
    },
    stats: {
      datasetsCount: 16,
      subjectsCount: 3850,
      nodesCount: 6,
    },
    coordinators: [
      {
        name: 'Prof. Hugh Garavan',
        role: 'Working Group Co-Chair',
        affiliation: 'University of Vermont',
      },
      {
        name: 'Dr. Janna Cousijn',
        role: 'Working Group Co-Chair',
        affiliation: 'Erasmus University Rotterdam',
      },
    ],
    institutes: [
      'University of Vermont',
      'Amsterdam UMC',
      'Icahn School of Medicine at Mount Sinai',
      "King's College London",
    ],
    domains: [
      'Substance Use Disorders',
      'Addiction Biomarkers',
      'Diffusion Tensor Imaging',
      'Subcortical Volumes',
    ],
    bannerBadge: 'Global Working Group',
  },
  {
    id: 'neuro-ad',
    name: 'NEURO-AD Collaborative Platform',
    shortName: 'NEURO-AD',
    piName: 'Dr. Claire Delacour',
    logo: logoNeuroAd,
    tagline: 'European Biomarker & Preclinical AD Network',
    description:
      "European multi-cohort initiative standardizing early cognitive biomarker discovery, amyloid/tau PET, and CSF measures in preclinical Alzheimer's populations.",
    category: 'Disease Consortium',
    status: 'prospective',
    statusLabel: 'Prospective Community',
    themeColor: '#6366f1',
    themeAccent: 'from-indigo-500 to-violet-700',
    countryCodes: ['FR', 'CH', 'DE'],
    coordinates: {
      lat: 48.8566,
      lng: 2.3522,
      city: 'Paris',
      country: 'France / Switzerland / Germany',
    },
    stats: {
      datasetsCount: 9,
      subjectsCount: 2450,
      nodesCount: 4,
    },
    coordinators: [
      {
        name: 'Dr. Claire Delacour',
        role: 'Steering Committee Lead',
        affiliation: 'INSERM / Paris Brain Institute (ICM)',
      },
    ],
    institutes: [
      'Paris Brain Institute (ICM)',
      'Hôpitaux Universitaires de Genève',
      'Charité - Universitätsmedizin Berlin',
    ],
    domains: [
      "Preclinical Alzheimer's",
      'Amyloid & Tau PET',
      'Cognitive Resilience',
      'Multimodal Biomarkers',
    ],
    bannerBadge: 'European Consortium',
  },
  {
    id: 'mnd-network',
    name: 'MND Translational Research Network',
    shortName: 'MND Network (Australia)',
    piName: 'Prof. Matthew Kiernan',
    logo: logoMnd,
    tagline: 'Australian Motor Neuron Disease Cohort Infrastructure',
    description:
      'Federated data linkage system standardizing longitudinal motor neuron disease / ALS clinical registries, imaging, and biofluid biobanking across Australian states.',
    category: 'National Network',
    status: 'prospective',
    statusLabel: 'Prospective Community',
    themeColor: '#14b8a6',
    themeAccent: 'from-teal-500 to-emerald-700',
    countryCodes: ['AU'],
    coordinates: {
      lat: -33.8688,
      lng: 151.2093,
      city: 'Sydney',
      country: 'Australia',
    },
    stats: {
      datasetsCount: 6,
      subjectsCount: 1380,
      nodesCount: 4,
    },
    coordinators: [
      {
        name: 'Prof. Matthew Kiernan',
        role: 'Consortium Chair',
        affiliation: 'Brain and Mind Centre, University of Sydney',
      },
    ],
    institutes: [
      'University of Sydney (Brain and Mind Centre)',
      'University of Queensland',
      'Perron Institute for Neurological and Translational Science',
      'Florey Institute of Neuroscience and Mental Health',
    ],
    domains: [
      'Motor Neuron Disease',
      'ALS Research',
      'Spinal Cord & Brainstem MRI',
      'Australian Registries',
    ],
    bannerBadge: 'Pan-Australia',
  },
  {
    id: 'enigma-tremor',
    name: 'ENIGMA-Tremor Consortium',
    shortName: 'ENIGMA-Tremor',
    piName: 'Dr. Alfonso Fasano',
    logo: logoEnigmaTremor,
    tagline: 'Worldwide Working Group on Essential & Dystonic Tremor',
    description:
      'Multi-site consortium pooling high-resolution MRI and deep phenotyping to investigate the cerebello-thalamo-cortical circuit dysfunctions underlying essential and dystonic tremors.',
    category: 'Disease Consortium',
    status: 'prospective',
    statusLabel: 'Prospective Community',
    themeColor: '#a855f7',
    themeAccent: 'from-purple-500 to-fuchsia-600',
    countryCodes: ['CA', 'US', 'GB'],
    coordinates: {
      lat: 43.6532,
      lng: -79.3832,
      city: 'Toronto & International',
      country: 'Canada / USA / UK',
    },
    stats: {
      datasetsCount: 5,
      subjectsCount: 1040,
      nodesCount: 3,
    },
    coordinators: [
      {
        name: 'Dr. Alfonso Fasano',
        role: 'Working Group Co-Chair',
        affiliation: 'University of Toronto / Krembil Brain Institute',
      },
    ],
    institutes: [
      'Krembil Brain Institute / University Health Network',
      'Yale University School of Medicine',
      'University College London (UCL)',
    ],
    domains: ['Essential Tremor', 'Cerebellar Networks', 'Dystonia', 'High-field MRI'],
    bannerBadge: 'Working Group',
  },
];

export interface NetworkAggregateStats {
  totalSubjects: number;
  totalDatasets: number;
  totalNodes: number;
  totalCommunities: number;
  activePortalsCount: number;
  prospectiveCommunitiesCount: number;
  countriesCount: number;
}

export function getNetworkAggregateStats(): NetworkAggregateStats {
  const allCountries = new Set<string>();
  let totalSubjects = 0;
  let totalDatasets = 0;
  let totalNodes = 0;
  let activePortalsCount = 0;
  let prospectiveCommunitiesCount = 0;

  COMMUNITIES.forEach((c) => {
    totalSubjects += c.stats.subjectsCount;
    totalDatasets += c.stats.datasetsCount;
    totalNodes += c.stats.nodesCount;
    c.countryCodes.forEach((code) => allCountries.add(code));

    if (c.status === 'active') {
      activePortalsCount += 1;
    } else {
      prospectiveCommunitiesCount += 1;
    }
  });

  return {
    totalSubjects,
    totalDatasets,
    totalNodes,
    totalCommunities: COMMUNITIES.length,
    activePortalsCount,
    prospectiveCommunitiesCount,
    countriesCount: allCountries.size,
  };
}

export const COUNTRY_NAMES: Record<string, { name: string; flag: string }> = {
  CA: { name: 'Canada', flag: '🇨🇦' },
  US: { name: 'United States', flag: '🇺🇸' },
  NL: { name: 'Netherlands', flag: '🇳🇱' },
  SE: { name: 'Sweden', flag: '🇸🇪' },
  NO: { name: 'Norway', flag: '🇳🇴' },
  DK: { name: 'Denmark', flag: '🇩🇰' },
  DE: { name: 'Germany', flag: '🇩🇪' },
  FR: { name: 'France', flag: '🇫🇷' },
  CH: { name: 'Switzerland', flag: '🇨🇭' },
  GB: { name: 'United Kingdom', flag: '🇬🇧' },
  IL: { name: 'Israel', flag: '🇮🇱' },
  CL: { name: 'Chile', flag: '🇨🇱' },
  AU: { name: 'Australia', flag: '🇦🇺' },
  AT: { name: 'Austria', flag: '🇦🇹' },
  EU: { name: 'European Union', flag: '🇪🇺' },
};
