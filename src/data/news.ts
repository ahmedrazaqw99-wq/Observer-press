export interface Article {
  id: string;
  slug: string;
  category: 'politics' | 'world' | 'tech' | 'culture' | 'opinion' | 'investigations';
  isLeadStory?: boolean;
  isBreaking?: boolean;
  title: Record<'ro' | 'en', string>;
  excerpt: Record<'ro' | 'en', string>;
  content?: Record<'ro' | 'en', string[]>;
  author: {
    name: string;
    role: Record<'ro' | 'en', string>;
    avatar: string;
  };
  publishedAt: string;
  readTimeMinutes: number;
  image: string;
  imageCaption?: Record<'ro' | 'en', string>;
}

export const DEMO_ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'reforma-energetica-europeana',
    category: 'world',
    isLeadStory: true,
    title: {
      ro: 'Pachetul Istoric de Tranziție Energetică Aprobat de Comisia Europeană',
      en: 'Historic Energy Transition Package Approved by the European Commission'
    },
    excerpt: {
      ro: 'O decizie crucială care reconfigurează piața energetică est-europeană pentru următorul deceniu, cu investiții masive în infrastructură verde.',
      en: 'A pivotal decision reshaping the East European energy landscape for the next decade, backed by massive green infrastructure funding.'
    },
    content: {
      ro: [
        'Comisia Europeană a aprobat marți un pachet legislativ fără precedent, menit să accelereze tranziția energetică în statele membre din estul continentului. Decizia vine după luni de negocieri tensionate între delegațiile naționale.',
        'Fondul dedicat, estimat la zeci de miliarde de euro, va finanța rețele de energie regenerabilă, capacități de stocare și modernizarea infrastructurii de distribuție învechite.',
        'Analiștii avertizează însă că implementarea rămâne o provocare: birocrația locală și lipsa forței de muncă calificate ar putea încetini absorbția fondurilor în anumite regiuni.',
        'Reacțiile guvernelor est-europene au fost în general pozitive, deși unele state au cerut clarificări suplimentare privind criteriile de eligibilitate pentru proiectele transfrontaliere.',
        'Următoarea etapă va fi ratificarea la nivel național, proces estimat să dureze până la finalul anului.'
      ],
      en: [
        'The European Commission approved an unprecedented legislative package on Tuesday, designed to accelerate the energy transition across the continent\'s eastern member states. The decision follows months of tense negotiations between national delegations.',
        'The dedicated fund, estimated at tens of billions of euros, will finance renewable energy grids, storage capacity, and the modernization of aging distribution infrastructure.',
        'Analysts warn, however, that implementation remains a challenge: local bureaucracy and a shortage of skilled labor could slow the absorption of funds in certain regions.',
        'Reactions from East European governments have been broadly positive, though some states requested further clarification on eligibility criteria for cross-border projects.',
        'The next step will be national-level ratification, a process expected to take until the end of the year.'
      ]
    },
    author: {
      name: 'Elena Moldovan',
      role: { ro: 'Corespondent Senior Bruxelles', en: 'Senior Brussels Correspondent' },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    publishedAt: '2026-07-29T10:30:00Z',
    readTimeMinutes: 6,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80',
    imageCaption: {
      ro: 'Sediul Comisiei Europene la Bruxelles în timpul sesiunii extraordinare de vot.',
      en: 'The European Commission headquarters in Brussels during the extraordinary voting session.'
    }
  },
  {
    id: '2',
    slug: 'impactul-ai-in-jurnalism',
    category: 'tech',
    isBreaking: true,
    title: {
      ro: 'Noi Reglementări privind Transparența Integrității Algoritmice',
      en: 'New Regulations on Algorithmic Integrity Transparency'
    },
    excerpt: {
      ro: 'Guvernele europene stabilesc primele standarde obligatorii pentru identificarea conținutului sintetic.',
      en: 'European governments set the first mandatory standards for synthetic content identification.'
    },
    content: {
      ro: [
        'Un grup de nouăsprezece state a semnat un memorandum comun ce impune etichetarea obligatorie a conținutului generat sau modificat semnificativ de sisteme de inteligență artificială.',
        'Platformele mari de social media vor avea un termen de optsprezece luni pentru a implementa marcaje vizibile pe imagini, clipuri video și audio sintetic.',
        'Reprezentanții industriei tehnologice s-au declarat parțial de acord, cerând însă un cadru unitar la nivel european pentru a evita fragmentarea reglementărilor pe piețe naționale.'
      ],
      en: [
        'A group of nineteen states signed a joint memorandum requiring mandatory labeling of content generated or significantly altered by artificial intelligence systems.',
        'Major social media platforms will have an eighteen-month window to implement visible markers on synthetic images, video, and audio.',
        'Technology industry representatives voiced partial agreement, while calling for a unified European framework to avoid fragmented regulation across national markets.'
      ]
    },
    author: {
      name: 'Victor Vancea',
      role: { ro: 'Editor Tehnologie', en: 'Technology Editor' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    publishedAt: '2026-07-29T14:15:00Z',
    readTimeMinutes: 4,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    slug: 'viitorul-oraselor-verzi',
    category: 'opinion',
    title: {
      ro: 'Cum Redefinim Spațiul Public în Metropolele Moderne',
      en: 'Redefining Public Spaces in Modern Metropolises'
    },
    excerpt: {
      ro: 'Urbanismul nu mai este despre mașini, ci despre reconectarea comunităților la ritmul pietonal.',
      en: 'Urbanism is no longer about cars, but about reconnecting communities to a pedestrian pace.'
    },
    content: {
      ro: [
        'Timp de decenii, planificarea urbană a fost dictată de fluxul auto. Astăzi, tot mai multe capitale europene inversează această logică, redând străzile pietonilor și bicicliștilor.',
        'Schimbarea nu este doar estetică: studiile arată o creștere a comerțului local și o scădere a poluării fonice acolo unde s-au aplicat astfel de măsuri.',
        'Rezistența vine, previzibil, din partea unor asociații de transportatori și a unor comercianți care se tem de pierderea accesului cu mașina pentru clienți.'
      ],
      en: [
        'For decades, urban planning was dictated by car traffic flow. Today, more and more European capitals are reversing that logic, giving streets back to pedestrians and cyclists.',
        'The shift is not merely aesthetic: studies show increased local commerce and reduced noise pollution where such measures have been applied.',
        'Resistance, predictably, comes from transport associations and some merchants who fear losing customers\' car access.'
      ]
    },
    author: {
      name: 'Matei Cantacuzino',
      role: { ro: 'Eseist & Arhitect', en: 'Essayist & Architect' },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    },
    publishedAt: '2026-07-28T09:00:00Z',
    readTimeMinutes: 8,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    slug: 'investigatie-fonduri-culturale',
    category: 'investigations',
    title: {
      ro: 'Anatomia unui Patrimoniu Uitat: Clădirile Istorice în Pericol',
      en: 'Anatomy of Forgotten Heritage: Historic Buildings at Risk'
    },
    excerpt: {
      ro: 'O anchetă de șase luni dezvăluie mecanismele prin care monumente de clasa A pierd protecția statului.',
      en: 'A six-month investigation reveals how Class-A heritage sites lose state protection.'
    },
    content: {
      ro: [
        'Peste treizeci de clădiri clasate ca monumente istorice de clasa A și-au pierdut statutul de protecție în ultimii cinci ani, arată documente obținute de redacția noastră.',
        'Mecanismul, aparent birocratic, se bazează pe declasificări succesive votate în comisii locale cu vizibilitate publică minimă.',
        'Proprietarii unor astfel de clădiri au putut ulterior obține autorizații de demolare sau conversie, deschizând calea pentru proiecte imobiliare cu valoare de piață semnificativ mai mare.',
        'Autoritatea națională de patrimoniu a refuzat să comenteze punctual, invocând ancheta administrativă internă aflată în desfășurare.'
      ],
      en: [
        'More than thirty buildings classified as Class-A historic monuments have lost their protected status over the past five years, documents obtained by our newsroom show.',
        'The mechanism, seemingly bureaucratic, relies on successive declassifications voted in local committees with minimal public visibility.',
        'Owners of such buildings were subsequently able to obtain demolition or conversion permits, opening the way for real-estate projects worth significantly more on the open market.',
        'The national heritage authority declined to comment on specific cases, citing an ongoing internal administrative review.'
      ]
    },
    author: {
      name: 'Ioana Rusu',
      role: { ro: 'Departamentul Anchetă', en: 'Investigations Desk' },
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
    },
    publishedAt: '2026-07-27T18:00:00Z',
    readTimeMinutes: 12,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: '5',
    slug: 'dezbatere-buget-national',
    category: 'politics',
    title: {
      ro: 'Coaliția de Guvernare Rămâne Divizată în Privința Bugetului pe 2027',
      en: 'Governing Coalition Remains Split Over the 2027 Budget'
    },
    excerpt: {
      ro: 'Partenerii de coaliție nu au ajuns la un acord privind reducerea cheltuielilor publice, amânând votul final pentru a treia oară.',
      en: 'Coalition partners failed to agree on public spending cuts, postponing the final vote for a third time.'
    },
    content: {
      ro: [
        'Discuțiile privind bugetul de stat pe anul viitor s-au blocat din nou, după ce partidele de coaliție nu au reușit să convină asupra țintei de deficit.',
        'Ministerul Finanțelor propune reduceri de cheltuieli în administrația centrală, în timp ce unul dintre partenerii de coaliție insistă pentru menținerea investițiilor în infrastructură.',
        'Votul final a fost amânat pentru a treia oară consecutiv, alimentând speculații privind stabilitatea coaliției pe termen mediu.'
      ],
      en: [
        'Talks on next year\'s state budget stalled again after coalition parties failed to agree on a deficit target.',
        'The Finance Ministry is proposing spending cuts in the central administration, while one coalition partner insists on preserving infrastructure investment.',
        'The final vote has been postponed for a third consecutive time, fueling speculation about the coalition\'s medium-term stability.'
      ]
    },
    author: {
      name: 'Radu Ionescu',
      role: { ro: 'Corespondent Politic', en: 'Political Correspondent' },
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80'
    },
    publishedAt: '2026-07-26T12:00:00Z',
    readTimeMinutes: 5,
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: '6',
    slug: 'renasterea-teatrului-independent',
    category: 'culture',
    title: {
      ro: 'Renașterea Teatrului Independent: O Nouă Generație de Regizori',
      en: 'The Independent Theatre Revival: A New Generation of Directors'
    },
    excerpt: {
      ro: 'Sălile mici din centrul orașului găzduiesc din nou spectacole experimentale, susținute de un public tânăr tot mai numeros.',
      en: 'Small downtown venues are hosting experimental shows again, backed by a growing young audience.'
    },
    content: {
      ro: [
        'După ani de declin, scena teatrului independent trăiește o revitalizare vizibilă, cu săli mici din centrul orașului vândute integral cu săptămâni înainte.',
        'O generație de regizori sub treizeci și cinci de ani experimentează cu formate hibride, combinând teatrul clasic cu elemente de instalație vizuală și muzică live.',
        'Finanțarea rămâne precară, majoritatea producțiilor bazându-se pe crowdfunding și granturi culturale mici.'
      ],
      en: [
        'After years of decline, the independent theatre scene is experiencing a visible revival, with small downtown venues selling out weeks in advance.',
        'A generation of directors under thirty-five is experimenting with hybrid formats, blending classical theatre with visual installation elements and live music.',
        'Funding remains precarious, with most productions relying on crowdfunding and small cultural grants.'
      ]
    },
    author: {
      name: 'Ana Georgescu',
      role: { ro: 'Critic de Teatru', en: 'Theatre Critic' },
      avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&auto=format&fit=crop&q=80'
    },
    publishedAt: '2026-07-25T16:30:00Z',
    readTimeMinutes: 7,
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&auto=format&fit=crop&q=80'
  }
];
